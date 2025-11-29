import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const chatWithGemini = async (message: string, history: { role: string; text: string }[]): Promise<string> => {
  try {
    const ai = getAIClient();
    
    // Construct a prompt with history and context
    // Ideally we would use the Chat API, but for a simple portfolio stateless wrapper with context often works well 
    // or we can use the Chat API. Let's use the Chat API for better conversation flow.
    
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: RESUME_CONTEXT,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Sorry, I am currently experiencing connection issues. Please try again later.";
  }
};

export const analyzeImageWithGemini = async (base64Image: string, mimeType: string, prompt: string): Promise<string> => {
  try {
    const ai = getAIClient();
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType
            }
          },
          {
            text: prompt || "Analyze this image and tell me what you see, relating it to potential data science applications if possible."
          }
        ]
      }
    });

    return response.text || "No analysis could be generated.";
  } catch (error) {
    console.error("Gemini Vision Error:", error);
    return "Failed to analyze the image. Please try again.";
  }
};