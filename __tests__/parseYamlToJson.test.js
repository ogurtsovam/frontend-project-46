import { parseYamlToJson } from "../parsers/parseYamlToJson";
import { fileURLToPath } from 'url';
import fs from 'fs';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Positive flow', () => {
  const file1 = JSON.parse(readFile('file1.json'));
  const expectedDiff = readFile('test_output.diff').trim();

  const result = parseYamlToJson(file1.yaml).trim();
  expect(result).toEqual(expectedDiff);
});