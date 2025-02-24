import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://raw.githubusercontent.com/Arthur-wishup/Ameria.tokens/refs/heads/Demo-Tokens-export/Tokens/Core%20Tokens.json';

const localJsonPath = path.resolve(__dirname,'tokens.json');

const fetchTokens = async () => {
  try {
    const response = await axios.get(url);

    fs.writeFileSync(localJsonPath, JSON.stringify(response.data));
    console.log('✅ Design tokens fetched and saved locally.');
  } catch (error) {

    console.error('❌ Error fetching tokens:', error);
    process.exit(1);
  }
};


(async () => {
  await fetchTokens();
})();
