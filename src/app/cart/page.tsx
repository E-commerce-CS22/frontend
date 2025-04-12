import { Suspense } from "react";
import CartPage from "./components/FullPage/CartPage";

export default function EditAttributesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartPage />
    </Suspense>
  );
}
