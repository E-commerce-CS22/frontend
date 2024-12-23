"use client";
// import { i18n } from "@/shared/utils/i18next";
// import { Stack, Button } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import Layout from "@/shared/components/Layout/Layout";

export default function Home() {
  const formAction = (formData) => {
    const newPost = {
      title: formData.get("title"),
      body: formData.get("body"),
    };
    console.log(newPost);
  };

  return (
    <div>
      <form action={formAction}>
        <input name="title" type="text" placeholder="title" />
        <textarea name="body" placeholder="body" />
        <button>Submit</button>
      </form>
    </div>
  );
}
