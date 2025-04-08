import { Suspense } from "react";
import EditForm from "./components/FullPage/AddDiscountPage";

export default function AddDiscountPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditForm />
    </Suspense>
  );
}
