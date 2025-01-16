import yaml from 'js-yaml';
import fs from 'fs';

export default function parseYamlToJson(filepath) {
  const fileContents = fs.readFileSync(filepath, 'utf8');
  return yaml.load(fileContents);
}
