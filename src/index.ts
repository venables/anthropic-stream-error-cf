import Anthropic from "@anthropic-ai/sdk";
import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  const anthropic = new Anthropic({
    apiKey: "YOUR API KEY",
  });

  const stream = await anthropic.messages.create({
    max_tokens: 1024,
    messages: [{ role: "user", content: "can you tell me a story" }],
    model: "claude-2.1",
    stream: true,
  });
  for await (const messageStreamEvent of stream) {
    console.log(messageStreamEvent.type);
  }

  return c.json({ ok: true });
});

export default app;
