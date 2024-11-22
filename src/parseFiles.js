import fs from 'fs';
export default function parseFiles(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileData);
}