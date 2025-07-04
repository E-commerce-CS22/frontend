import { Suspense } from "react";
import GeminiChatbot from "./components/FullPage/ChatbotPage";

export default function ChatbotPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GeminiChatbot />
    </Suspense>
  );
}
