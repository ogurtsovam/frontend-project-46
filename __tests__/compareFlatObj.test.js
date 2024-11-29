import compareFlatObj from "../src/compareFlatObj";
import { fileURLToPath } from 'url';
import fs from 'fs';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Positive flow', () => {
  const file1 = JSON.parse(readFile('file1.json'));
  const file2 = JSON.parse(readFile('file2.json'));
  const expectedDiff = readFile('test_output.diff').trim();

  const result = compareFlatObj(file1, file2).trim();
  expect(result).toEqual(expectedDiff);
});

test('Invalid JSON input', () => {
  const file1 = '{ key: value }';
  const file2 = '{ key: value }';

  expect(() => {
    compareFlatObj(JSON.parse(file1), JSON.parse(file2));
  }).toThrow(SyntaxError);
});
