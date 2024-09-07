
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const genAI = new GoogleGenerativeAI("AIzaSyCH_5l-aFZVZNAt1DqrYQMB_9PT8c5cEW8");
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are a tutor that is helping high schoolers learn more about the topic they need help in. Please reply in Markdown code and make sure that the explanations are easy to understand. Also have the full content provided in the module and sprinkle practice questions in between. Do not make it too long and limit the explanations to 150 words. Keep the practice questions one sentence long. "

});

var resp;

async function AIGenerate() {
    const prompt = "I need help creating a lesson plan for a high schooler who needs help with Algebra 2 (Math). In the lesson plan, please split it up into modules and include practice questions in each one. Also include the answers to the questions and explanations to the answers. Additionally, I also needed it formatted in Markdown.";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    resp = text;
    // console.log(text);

}

export default function Results() {

    AIGenerate();
    

    // console.log(aiResp);
    return (
        <>
            <h2>
                {resp}
            </h2>
        </>
    )
}

