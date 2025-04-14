"use client";
import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  Box,
  TextField,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  CircularProgress,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from "react-i18next";

type Message = {
  text: string;
  sender: "user" | "bot";
};

const GeminiChatbot = () => {
  const { t } = useTranslation("Store");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const genAI = new GoogleGenerativeAI(
    `AIzaSyDqGrvZLvUuMRTLbcdC0ScKsAuVwPZnf0c`
  );
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const result = await model.generateContent(input);
      const response = await result.response;
      const botMessage: Message = {
        text: response.text(),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error calling Gemini:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I encountered an error",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "800px",
        margin: "1rem auto",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          p: 2,
          bgcolor: "background.default",
        }}
      >
        <List>
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              sx={{
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              {msg.sender === "bot" && (
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    <SmartToyIcon />
                  </Avatar>
                </ListItemAvatar>
              )}
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  ml: msg.sender === "bot" ? 0 : 2,
                  mr: msg.sender === "bot" ? 2 : 0,
                  bgcolor:
                    msg.sender === "bot" ? "primary.light" : "secondary.light",
                  color:
                    msg.sender === "bot"
                      ? "primary.contrastText"
                      : "secondary.contrastText",
                }}
              >
                <Typography variant="body1">{msg.text}</Typography>
              </Paper>
              {msg.sender === "user" && (
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "secondary.main" }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
              )}
            </ListItem>
          ))}
          {loading && (
            <ListItem sx={{ justifyContent: "flex-start" }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <SmartToyIcon />
                </Avatar>
              </ListItemAvatar>
              <Paper elevation={1} sx={{ p: 2, bgcolor: "primary.light" }}>
                <CircularProgress size={20} color="inherit" />
              </Paper>
            </ListItem>
          )}
          <div ref={messagesEndRef} />
        </List>
      </Box>

      <Box
        sx={{
          p: 2,
          display: "flex",
          gap: 1,
          borderTop: "1px solid",
          borderColor: "divider",
          paddingBottom: "5rem",
        }}
      >
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("Type your message...")}
          disabled={loading}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <Button
          variant="contained"
          onClick={handleSend}
          disabled={loading}
          endIcon={<SendIcon />}
        >
          {t("Send")}
        </Button>
      </Box>
    </Paper>
  );
};

export default GeminiChatbot;
