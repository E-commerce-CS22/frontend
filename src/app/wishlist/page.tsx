import { Suspense } from "react";
import WishListFullPage from "./components/FullPage/WishlistPage";

export default function WishListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WishListFullPage />
    </Suspense>
  );
}
