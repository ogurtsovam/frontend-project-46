import _ from 'lodash';

export default function compareData(data1, data2) {
  const keys = new Set([...Object.keys(data1), ...Object.keys(data2)]);

  const getDiff = Array.from(keys).map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, action: 'nested', value: compareData(data1[key], data2[key]) };
    }

    if (!Object.hasOwn(data1, key)) {
      return { key, action: 'added', value: data2[key] };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, action: 'deleted', value: data1[key] };
    }
    if (data1[key] !== data2[key]) {
      return {
        key, action: 'changed', value1: data1[key], value2: data2[key],
      };
    }

    return { key, action: 'unchanged', value: data2[key] };
  });

  return getDiff;
};