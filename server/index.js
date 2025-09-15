import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('CareerGuide API is running');
});

app.post('/api/ollama-conclusion', async (req, res) => {
  const { answers } = req.body;
  if (!answers) {
    return res.status(400).json({ error: 'Missing answers' });
  }

  const prompt = `Given these career test answers: ${JSON.stringify(answers)}, provide a professional career guidance conclusion for a student.`;

  try {
    const ollamaRes = await fetch('http://localhost:11434/api/generate', {
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
          console.error('Stream parse error:', err.message, line);
        }
      }
    }

    if (result) {
      res.json({ conclusion: result });
    } else {
      console.error('Ollama returned empty response');
      res.status(500).json({ error: 'Empty response from Ollama' });
    }
  } catch (err) {
    console.error('Ollama API error:', err);
    res.status(500).json({ error: 'Ollama API error', details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`CareerGuide server running on port ${PORT}`);
});
app.post('/api/ollama-conclusion', async (req, res) => {
  const { answers } = req.body;
  if (!answers) {
    return res.status(400).json({ error: 'Missing answers' });
  }

  const prompt = `Given these career test answers: ${JSON.stringify(answers)}, 
  provide a professional career guidance conclusion for a student.`;

  try {
    const ollamaRes = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama3:8b', prompt })
    });

    let result = '';

    // Stream and collect response
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

    if (result) {
      res.json({ conclusion: result });
    } else {
      res.status(500).json({ error: 'Empty response from Ollama' });
    }

  } catch (err) {
    res.status(500).json({ error: 'Ollama API error', details: err.message });
  }
});
