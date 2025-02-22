import _ from 'lodash';

const getOffset = (level, replacer = ' ', setGap = 4) => replacer.repeat(level * setGap);

function stringify(value, level) {
  if (!_.isObject(value)) {
    return `${value}`;
  }

  const offset = getOffset(level);
  const bracketOffset = getOffset(level - 1);

  const rows = Object.entries(value).map(([key, val]) => `${offset}${key}: ${stringify(val, level + 1)}`);

  return [
    '{', ...rows, `${bracketOffset}}`,
  ].join('\n');
}

function formatStylish(diffOutput, level = 1) {
  const offset = getOffset(level).slice(0, -2);
  const bracketOffset = getOffset(level - 1);
  const rows = diffOutput.map((node) => {
    switch (node.type) {
      case 'nested':
        return `${offset}  ${node.key}: ${formatStylish(node.value, level + 1)}`;
      case 'added':
        return `${offset}+ ${node.key}: ${stringify(node.value, level + 1)}`;
      case 'deleted':
        return `${offset}- ${node.key}: ${stringify(node.value, level + 1)}`;
      case 'changed':
        return [
          `${offset}- ${node.key}: ${stringify(node.value1, level + 1)}`,
          `${offset}+ ${node.key}: ${stringify(node.value2, level + 1)}`,
        ].join('\n');
      case 'unchanged':
        return `${offset}  ${node.key}: ${stringify(node.value, level + 1)}`;
      default:
        throw new Error(`Received node type <${node.type}> is unknown.`);
    }
  });
  return [
    '{', ...rows, `${bracketOffset}}`,
  ].join('\n');
}

export default function stylish(diffOutput) {
  return formatStylish(diffOutput, 1);
}
