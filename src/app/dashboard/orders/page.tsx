import { Suspense } from "react";
import { OrdersPage } from "./components/FullPage/OrdersPage";

export default function EditAttributesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrdersPage />
    </Suspense>
  );
}
