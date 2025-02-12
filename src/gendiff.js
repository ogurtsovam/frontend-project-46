import fs from 'fs';
import * as path from 'path';
import compareData from './compareData.js';
import styling from './formatters/index.js';
import parseFile from './parseFile.js';

const getFilePath = (fileName) => path.resolve(process.cwd(), fileName);
const getFileExtension = (fileName) => fileName.split('.')[1].trim();
const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');

export default function gendiff(filePath1, filePath2, formatName = 'stylish') {
  const dataFile1 = getFilePath(filePath1);
  const dataFile2 = getFilePath(filePath2);

  const dataParsedFile1 = parseFile(readFile(dataFile1), getFileExtension(dataFile1));
  const dataParsedFile2 = parseFile(readFile(dataFile2), getFileExtension(dataFile2));

  const diffOutput = compareData(dataParsedFile1, dataParsedFile2);

  return styling(diffOutput, formatName);
};