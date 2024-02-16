import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import type { ChatCompletion } from 'openai/resources/index.mjs';
import { transformAITextToJSON } from '@/lib/transformAITextToJSON';
 
export const runtime = 'edge';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export type ImageMessage = {
  type: "image_url";
  image_url: {
    url: string;
  };
};
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt, images, system } = await req.json() as { prompt: string, images: ImageMessage[], system: string};
 
  // Request the OpenAI API for the response based on the prompt
  const response: ChatCompletion = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    max_tokens: 250,
    messages: [
      {
        role: "system",
        content: system,
      },
      {
        role: "user",
        content: [
          { type: "text", text: prompt },
          ...images,
        ],
      },
    ]
  });

  if (response?.choices.length === 0) {
    return Response.error();
  }

  const cleanData = transformAITextToJSON(response?.choices[0]?.message?.content ?? '');

  return NextResponse.json(cleanData);
};