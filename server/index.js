
import express from 'express';

const app = express();

// Health check route
app.get('/', (req, res) => {
  res.send('CareerGuide API is running');
});

// Helper function to make Ollama API call
async function callOllama(prompt) {
  const ollamaRes = await fetch('http://192.168.29.220:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'llama3:8b', prompt })
  });

  let result = '';
  for await (const chunk of ollamaRes.body) {
    const lines = chunk.toString().split('\n').filter(Boolean);
    for (const line of lines) {
      try {
        const parsed = JSON.parse(line);
        if (parsed.response) {
          result += parsed.response;
        }
      } catch (err) {
        console.error('Stream parse error:', err.message);
      }
    }
  }
  return result;
}

app.post('/api/ollama-conclusion', async (req, res) => {
  const { answers } = req.body;
  if (!answers) {
    return res.status(400).json({ error: 'Missing answers' });
  }

  try {
    // Enhanced prompt for career guidance
    const guidancePrompt = `Given these career test answers: ${JSON.stringify(answers)}, 
    provide a professional career guidance conclusion for a student. 
    Focus on their strengths, recommended path, and actionable advice in 3-4 bullet points.`;

    // Prompt for flowchart data
    const flowchartPrompt = `Based on these career test answers: ${JSON.stringify(answers)}, 
    create a career decision flowchart/tree structure. Return ONLY a valid JSON object with this exact structure:
    {
      "name": "Career Path",
      "children": [
        {
          "name": "Education Phase",
          "children": [
            {"name": "Choose Stream (Science/Commerce/Arts)", "value": "recommended_stream"},
            {"name": "Select Subjects", "value": "subject_list"}
          ]
        },
        {
          "name": "Higher Education",
          "children": [
            {"name": "College Selection", "value": "college_options"},
            {"name": "Specialization", "value": "specialization_options"}
          ]
        },
        {
          "name": "Career Options",
          "children": [
            {"name": "Job Role 1", "value": "job_description"},
            {"name": "Job Role 2", "value": "job_description"},
            {"name": "Entrepreneurship", "value": "business_opportunities"}
          ]
        },
        {
          "name": "Growth Path",
          "children": [
            {"name": "Entry Level", "value": "entry_requirements"},
            {"name": "Mid Level", "value": "mid_level_goals"},
            {"name": "Senior Level", "value": "leadership_roles"}
          ]
        }
      ]
    }
    Make sure the JSON is valid and specific to the user's test results.`;

    // Make both API calls in parallel
    const [guidanceResult, flowchartResult] = await Promise.all([
      callOllama(guidancePrompt),
      callOllama(flowchartPrompt)
    ]);

    let flowchartData = null;
    try {
      // Try to parse the flowchart JSON response
      const cleanedFlowchart = flowchartResult.replace(/```json|```/g, '').trim();
      flowchartData = JSON.parse(cleanedFlowchart);
    } catch (err) {
      console.error('Failed to parse flowchart JSON:', err);
      // Fallback flowchart structure
      flowchartData = {
        name: "Career Path",
        children: [
          {
            name: "Education Phase",
            children: [
              { name: "Choose Recommended Stream", value: "Based on your test results" },
              { name: "Focus on Core Subjects", value: "Build strong foundation" }
            ]
          },
          {
            name: "Higher Education",
            children: [
              { name: "Research Colleges", value: "Find best fit institutions" },
              { name: "Choose Specialization", value: "Align with career goals" }
            ]
          },
          {
            name: "Career Development",
            children: [
              { name: "Gain Experience", value: "Internships and projects" },
              { name: "Build Network", value: "Professional connections" },
              { name: "Continuous Learning", value: "Stay updated with trends" }
            ]
          }
        ]
      };
    }

    if (guidanceResult) {
      res.json({ 
        conclusion: guidanceResult,
        flowchart: flowchartData
      });
    } else {
      res.status(500).json({ error: 'Empty response from Ollama' });
    }

  } catch (err) {
    console.error('Ollama API error:', err);
    res.status(500).json({ error: 'Ollama API error', details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
