import fs from 'fs';
import path from 'path';

export default function parseFile(filePath) {
  const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }

  try {
    const fileData = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(fileData);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new Error(`Invalid JSON format in file: ${absolutePath}`);
    }
  }
}