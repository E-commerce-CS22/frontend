import { Suspense } from "react";
import { MyOrdersPage } from "./components/FullPage/MyOrdersPage";

export default function EditAttributesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyOrdersPage />
    </Suspense>
  );
}
