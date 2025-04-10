//generated with GPT

const OpenAI = require('openai').default;

const translatorApi = module.exports;

translatorApi.translate = async function (postData) {
  try {
    // 1) Initialize the OpenAI client
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await client.responses.create({
      model: 'gpt-4o-mini',
      instructions: `
        You are a helpful translator.
        1) Detect if the text (provided in "input") is English or not.
        2) If not English, translate to English. 
        3) Respond with two lines:
           is_english: true/false
           translated_content: <the result in English or original if already English>`,
      input: postData.content
    });

    // `response.output_text` contains the model's text
    const assistantReply = response.output_text || '';

    // 3) Parse the GPT output for isEnglish + translatedContent
    let isEnglish = true;
    let translatedContent = postData.content || '';
    const lines = assistantReply.split('\n').map(l => l.trim());

    for (const line of lines) {
      if (line.toLowerCase().startsWith('is_english:')) {
        isEnglish = line.split(':')[1].trim().toLowerCase() === 'true';
      } else if (line.toLowerCase().startsWith('translated_content:')) {
        translatedContent = line.split(':')[1].trim();
      }
    }

    // Return the same structure you had before
    return [isEnglish, translatedContent];

  } catch (error) {
    // 4) On error, log and return the fallback
    console.error('Error translating content:', error);
    return [true, postData.content || ''];
  }
};
