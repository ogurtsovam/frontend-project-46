import yaml from 'js-yaml';

export default function parseFile(fileContent, extention) {
    switch (extention) {
    case 'json':
        return JSON.parse(fileContent);
    case 'yml':
    case 'yaml':
        return yaml.load(fileContent);
    default:
        throw new Error(`Unsupported extension - ${extention}`);
    }
}
