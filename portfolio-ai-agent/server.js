import express from "express";
import OpenAI from "openai";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
You are a portfolio assistant for Dilorom.

About:
- Front-end developer
- Skills: HTML, CSS, JavaScript, Tailwind
- Interested in AI and automation
- Enjoys math problem solving and hiking

Answer professionally and briefly.
`
      },
      { role: "user", content: userMessage }
    ]
  });

  res.json({ reply: response.choices[0].message.content });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));