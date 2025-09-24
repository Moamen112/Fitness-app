// import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request: Request) {
  const { exerciseName } = await request.json();

  if (!exerciseName) {
    return Response.json(
      { error: "Exercise name is required" },
      { status: 404 }
    );
  }
  const prompt = `
    You are a fitness coach.
    You are givin an exercise, provie clear instructions on how to perform the exercise. Include if any equipment is required.
    Explain the xercise in detail and for a beginner.

    The exercise name is: ${exerciseName}

    Keep it short and concise. Use markdown formatting.

    Use the following format:
    ## Equipment Required

    ## Instructions

    ### Tips

    ### Variations

    ### Safety

    keep spacing between the headings and the content.

    Always use headings and subheadings
    `;
  console.log(prompt);

  try {
    // const response = await openai.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   messages: [{ role: "user", content: prompt }],
    // });

    // console.log(response);
    // return Response.json({ message: response.choices[0].message.content });
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log(text);
    return Response.json({ message: text });
  } catch (error) {
    console.error("Error fetching Ai guidance:", error);
    return Response.json(
      { error: "Error fetching AI guidance" },
      { status: 500 }
    );
  }
}
