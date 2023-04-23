import dotenv from "dotenv"
import { OpenAIApi, Configuration } from "openai";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


dotenv.config({
    path: __dirname + "/.env",
});

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {OpenAIApi
    console.error("OPENAI_API_KEY is not set.");
    process.exit(1);
}

const configuration = new Configuration({
    apiKey: openaiApiKey,
});

const openAIClient = new OpenAIApi(configuration);

export default openAIClient;
