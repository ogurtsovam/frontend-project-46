import fs from 'fs';
import path from 'path';

export default function parseJson(filePath) {
  const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
  const fileData = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileData);
}
