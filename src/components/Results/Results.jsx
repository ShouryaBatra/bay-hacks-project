import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import katex from "katex";
import "./Results.css";

const genAI = new GoogleGenerativeAI("AIzaSyCH_5l-aFZVZNAt1DqrYQMB_9PT8c5cEW8");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a tutor that is helping high schoolers learn more about the topic they need help in. Please reply in Markdown code and make sure that the explanations are easy to understand. Make the titles like week 1 and day 1 different sizes (ALL SHOULD BE H1, H2, H3, or p tags). But, DO NOT return KaTeX of any kind. Also have the full content provided in the module and sprinkle practice questions in between. Do not make it too long and limit the explanations to 150 words. Keep the practice questions one sentence long. ",
});

// const [aiResp, setAiResp] = useState("");

export const Results = ({ subject, subModule, duration, grade }) => {
  const [generatedItem, setGeneratedItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const AIGenerate = async () => {
    try {
      const prompt = `I need help creating a lesson plan for a high schooler who needs help with learning the ${subModule}. In the lesson plan, please split it up by week/day (5 day weeks) and include practice questions in each one. Have 6 practice questions and answers for each module. The lesson plan needs to be enough for ${duration}. Have a lot of information to read. The reading material must be a paragraph at least for each point. For each key concept, include a three sentence explanation of the concept. Also explain the objective of the module. Also include the answers to the questions and explanations to the answers. Additionally, I also needed it formatted in Markdown.`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();
      // setAiResp(text);
      setGeneratedItem(text);
      console.log(text);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    AIGenerate();
  }, []);

  return (
    <>
      <ReactMarkdown>{generatedItem}</ReactMarkdown>
    </>
  );
};
