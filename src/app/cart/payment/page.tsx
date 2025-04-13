import { Suspense } from "react";
import PaymentPage from "./components/FullPage/PaymentPage";

export default function EditAttributesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentPage />
    </Suspense>
  );
}
