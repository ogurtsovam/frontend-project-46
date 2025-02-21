import stylish from './stylish.js';
import plain from './plain.js';

export default function formatData(diffOutput, formatName) {
    switch (formatName) {
    case 'stylish':
        return stylish(diffOutput);
    case 'plain':
        return plain(diffOutput);
    case 'json':
        return JSON.stringify(diffOutput, null, 2);
    default:
        throw new Error(`Output format styling <${formatName}> is not supported`);
    }
}
