import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Use the environment variable
  dangerouslyAllowBrowser: true, // Allow usage in the browser (not recommended for production)
});

export const getOpenAICallback = async (message) => {
  try {
    const prompt = `
      I am Atul Kumar Singh, a passionate software developer.
      Answer questions based my resume. For example, work experience, skills, projects, certifications.

      User Query: ${message}
    `;

    // Use the OpenAI API to generate a response
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use the GPT-3.5-turbo model
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 200, // Limit the response length
      temperature: 0.7, // Control the randomness of the response
    });

    // Return the generated response
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    return "Sorry, I couldn’t process your request.";
  }
};