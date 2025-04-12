import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini error:", error);
    return NextResponse.json(
      { reply: "Oops! Something went wrong." },
      { status: 500 }
    );
  }
}
