import parseYaml from './parseYaml.js';
import parseJson from './parseJson.js';

export default function parseFile(filePath) {
  if (filePath.split('.').at(-1) === 'yaml'|| filePath.split('.').at(-1) === 'yml'){
    return parseYaml(filePath);
  } else if (filePath.split('.').at(-1) === 'json') {
    return parseJson(filePath);
  }
}
