export default function compareFlatObj(obj1, obj2) {
  const result = [];
  const allUniqueKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  for (const key of allUniqueKeys) {
    if (!Object.hasOwn(obj2, key)) {
      result.push({ attribute: '-', key, value: obj1[key] });
    } else if (!Object.hasOwn(obj1, key)) {
      result.push({ attribute: '+', key, value: obj2[key] });
    } else if (obj1[key] === obj2[key]) {
      result.push({ attribute: '', key, value: obj1[key] });
    }  else if (obj1[key] !== obj2[key]) {
      result.push({ attribute: '-', key, value: obj1[key] });
      result.push({ attribute: '+', key, value: obj2[key] });
    }
  }

  return resultToString(result);
}

function resultToString(result) {
  return result
    .map(({ attribute, key, value }) => {
      const prefix = attribute === '' ? ' ' : attribute;
      return `  ${prefix} ${key}: ${value}`;
    })
    .join('\n');
}