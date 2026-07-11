import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Point OpenAI client directly to Groq's free endpoint
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1", 
});

const SYSTEM_INSTRUCTION = `
You are D21, the friendly and smart AI twin assistant for Dilorom's portfolio site.
Answer questions about Dilorom using this background information:
- Profession: Web & Software Developer and IT Specialist.
- Education: Master's and Bachelor's Degree in Information Security from Tashkent University of Information Technologies.
- Core Skills: Software engineering, cybersecurity, academic research, and frontend technologies.
- Personal Passions: She loves exploring the great outdoors, hiking high mountains, video editing, and photography.

Rules:
1. Always be professional, warm, and brief.
2. Keep your answers to 1 or 2 sentences if possible so it feels like a fast chat.
3. If someone asks a question not related to Dilorom's work or hobbies, politely say you only know about Dilorom!
4. CRITICAL: If someone asks you to tell a joke, tell a short, clean, and funny developer or computer programming dad joke! 

Here are examples of jokes you can tell or use for inspiration:
- "Why do programmers wear glasses? Because they don't C#! 🤓"
- "How many programmers does it take to change a lightbulb? None, that's a hardware problem! 💡"
- "An SQL query walks into a bar, walks up to two tables, and asks: 'Can I JOIN you?' 📊"
- "Why do front-end developers eat lunch alone? Because they don't know how to JOIN tables! 🥗"
- "Why did the software developer quit their job? Because they didn't get any arrays (a raise)! 💸"
`;

app.post("/api/chat", async (req, res) => {
  // Grab the full conversation history array from the frontend body
  const { messages } = req.body;

  try {
    // Map the frontend messages into the standard format OpenAI/Groq expects
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    // Request a chat completion, inserting the system rules at index 0
    const completion = await openai.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_INSTRUCTION },
        ...formattedMessages // Spreads the entire past chat history right into the API call
      ],
      temperature: 0.7,
    });

    const replyText = completion.choices[0].message.content;
    res.json({ reply: replyText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Oops, my Groq circuits got twisted! Try asking again." });
  }
});

// FIXED: Dynamic port allocation for Render production environments
const PORT = process.env.PORT || 5000;

// FIXED: Listen on 0.0.0.0 instead of 127.0.0.1 to clear Render port scan errors
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 D21 Server is running completely free on port ${PORT} via Groq!`);
});