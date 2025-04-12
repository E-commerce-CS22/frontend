import { Suspense } from "react";
import CartPage from "./components/FullPage/ChatbotPage";

export default function ChatbotPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartPage />
    </Suspense>
  );
}
