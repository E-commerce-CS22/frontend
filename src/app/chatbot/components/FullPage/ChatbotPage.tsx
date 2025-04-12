"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";

export default function ChatbotPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { role: "bot", text: data.reply };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" mb={3}>
        Gemini Chatbot
      </Typography>
      <Paper sx={{ p: 2, height: 400, overflowY: "auto", mb: 2 }}>
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              textAlign: msg.role === "user" ? "right" : "left",
              mb: 1,
              color: msg.role === "user" ? "primary.main" : "text.secondary",
            }}
          >
            <Typography>{msg.text}</Typography>
          </Box>
        ))}
        {loading && (
          <Box textAlign="center">
            <CircularProgress size={20} />
          </Box>
        )}
      </Paper>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
        />
        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
