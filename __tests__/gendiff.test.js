import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFilePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const getExpectedResult = (fileName) => fs.readFileSync(getFilePath(fileName), 'utf-8');
const fileFormat = ['json', 'yml'];

test.each(fileFormat)('compare files', (format) => {
  const file1 = getFilePath(`file1.${format}`);
  const file2 = getFilePath(`file2.${format}`);

  expect(genDiff(file1, file2, 'stylish')).toEqual(getExpectedResult('expected_result_stylish.txt'));
  expect(genDiff(file1, file2, 'plain')).toEqual(getExpectedResult('expected_result_plain.txt'));
  expect(genDiff(file1, file2, 'json')).toEqual(getExpectedResult('expected_result_json.json'));
});
