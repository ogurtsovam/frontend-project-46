export default function compareFlatObj(obj1, obj2) {
  const diff = [];
  const allUniqueKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  for (const key of allUniqueKeys) {
    if (!Object.hasOwn(obj2, key)) {
      diff.push({ action: '-', key, value: obj1[key] });
    } else if (!Object.hasOwn(obj1, key)) {
      diff.push({ action: '+', key, value: obj2[key] });
    } else if (obj1[key] === obj2[key]) {
      diff.push({ action: ' ', key, value: obj1[key] });
    }  else if (obj1[key] !== obj2[key]) {
      diff.push({ action: '-', key, value: obj1[key] });
      diff.push({ action: '+', key, value: obj2[key] });
    }
  }

  return diff;
}