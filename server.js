import Anthropic from '@anthropic-ai/sdk';
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();
const port = 33787;


const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});


app.use(express.static('public'));

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const client = new Client(apiKey);
   /* const response = await client.completions.create({
      model: 'claude-3-sonnet-20240229',
      prompt: 'Generate an uplifting response based on the provided image',
      upload: { file: req.file.path },
    });
    */
    const upliftingResponse = response.completion.result;
    res.json({ upliftingResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});