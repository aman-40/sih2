import express from 'express';
import cors from 'cors';

const app = express();

// Enable JSON parsing
app.use(express.json());

// Enable CORS for your frontend
app.use(cors({
  origin: 'http://localhost:5173', // React frontend URL
  methods: ['GET', 'POST'],
  credentials: true
}));

// Health check route
app.get('/', (req, res) => {
  res.send('CareerGuide API is running');
});

// Helper function to make Ollama API call
async function callOllama(prompt) {
  try {
    const ollamaRes = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        model: 'llama3:8b', 
        prompt,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          max_tokens: 1000
        }
      })
    });

    if (!ollamaRes.ok) {
      throw new Error(`Ollama API error: ${ollamaRes.status}`);
    }

    const data = await ollamaRes.json();
    return data.response || '';
  } catch (error) {
    console.error('Ollama API call failed:', error);
    return '';
  }
}

// Helper function to analyze answers and determine stream
function analyzeAnswers(answers) {
  const scores = { science: 0, commerce: 0, arts: 0 };
  Object.values(answers).forEach(answer => {
    if (answer && answer.weight) {
      scores.science += answer.weight.science || 0;
      scores.commerce += answer.weight.commerce || 0;
      scores.arts += answer.weight.arts || 0;
    }
  });
  
  const totalScore = scores.science + scores.commerce + scores.arts;
  const percentages = {
    science: Math.round((scores.science / totalScore) * 100),
    commerce: Math.round((scores.commerce / totalScore) * 100),
    arts: Math.round((scores.arts / totalScore) * 100)
  };
  
  const recommendedStream = Object.keys(percentages).reduce((a, b) => 
    percentages[a] > percentages[b] ? a : b
  );
  
  return { recommendedStream, percentages, scores };
}

// Helper function to create interactive tree structure
function createInteractiveTree(stream, percentages) {
  const streamDetails = {
    science: {
      name: 'Science Stream',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology/Computer Science'],
      careers: ['Engineer', 'Doctor', 'Scientist', 'Researcher', 'Data Analyst'],
      colleges: ['IITs', 'NITs', 'Medical Colleges', 'Engineering Institutes'],
      salary: '₹6-15 LPA',
      growth: 'High demand in tech and research'
    },
    commerce: {
      name: 'Commerce Stream',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics/Informatics'],
      careers: ['CA', 'Business Analyst', 'Banker', 'Entrepreneur', 'Financial Advisor'],
      colleges: ['Delhi University', 'SRCC', 'Christ University', 'Symbiosis'],
      salary: '₹5-12 LPA',
      growth: 'Stable career with good earning potential'
    },
    arts: {
      name: 'Arts/Humanities Stream',
      subjects: ['History', 'Political Science', 'Geography', 'Literature', 'Psychology'],
      careers: ['Teacher', 'Journalist', 'Social Worker', 'Artist', 'Civil Services'],
      colleges: ['JNU', 'DU Arts', 'Jamia Millia', 'TISS'],
      salary: '₹4-10 LPA',
      growth: 'Diverse opportunities in social sector'
    }
  };

  const details = streamDetails[stream];
  
  return {
    name: "Your Career Journey",
    value: `${details.name} - ${percentages[stream]}% Match`,
    children: [
      {
        name: "🎓 Education Path",
        value: "Foundation Building",
        children: [
          {
            name: `Choose ${details.name}`,
            value: `${percentages[stream]}% compatibility`,
            children: details.subjects.map(subject => ({
              name: subject,
              value: "Core Subject"
            }))
          }
        ]
      },
      {
        name: "🏛️ Higher Education",
        value: "Specialization Phase",
        children: [
          {
            name: "Top Colleges",
            value: "Best Fit Institutions",
            children: details.colleges.map(college => ({
              name: college,
              value: "Recommended College"
            }))
          }
        ]
      },
      {
        name: "💼 Career Options",
        value: "Professional Growth",
        children: details.careers.map(career => ({
          name: career,
          value: details.salary
        }))
      },
      {
        name: "📈 Growth Potential",
        value: details.growth,
        children: [
          { name: "Entry Level", value: "0-2 years experience" },
          { name: "Mid Level", value: "3-7 years experience" },
          { name: "Senior Level", value: "8+ years leadership" }
        ]
      }
    ]
  };
}

app.post('/api/ollama-conclusion', async (req, res) => {
  const { answers } = req.body;
  if (!answers) {
    return res.status(400).json({ error: 'Missing answers' });
  }

  try {
    // Analyze answers to determine stream
    const analysis = analyzeAnswers(answers);
    
    // Create interactive tree structure
    const interactiveTree = createInteractiveTree(analysis.recommendedStream, analysis.percentages);
    
    // Try to get AI guidance, but provide fallback
    const guidancePrompt = `Based on these career test answers: ${JSON.stringify(answers)}, 
    provide a brief, actionable career guidance in 3-4 key points. 
    Focus on: 1) Recommended stream, 2) Key strengths, 3) Next steps, 4) Career outlook.`;

    const guidanceResult = await callOllama(guidancePrompt);
    
    // Fallback guidance if AI fails
    const fallbackGuidance = `Based on your responses, you show strong aptitude for ${analysis.recommendedStream} stream (${analysis.percentages[analysis.recommendedStream]}% match).

Key Strengths:
• Strong analytical and problem-solving skills
• Good foundation in core subjects
• Clear career direction alignment

Next Steps:
• Focus on building expertise in recommended subjects
• Research colleges and specializations
• Gain practical experience through internships

Career Outlook:
• High demand in your chosen field
• Good growth potential and earning opportunities
• Multiple career paths available`;

    res.json({ 
      conclusion: guidanceResult || fallbackGuidance,
      flowchart: interactiveTree,
      analysis: analysis
    });

  } catch (err) {
    console.error('API error:', err);
    
    // Provide fallback response even if everything fails
    const analysis = analyzeAnswers(answers);
    const interactiveTree = createInteractiveTree(analysis.recommendedStream, analysis.percentages);
    
    res.json({ 
      conclusion: `Based on your test responses, you show strong potential for ${analysis.recommendedStream} stream. Focus on building expertise in your chosen field and explore related career opportunities.`,
      flowchart: interactiveTree,
      analysis: analysis
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
