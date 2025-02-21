import _ from 'lodash';

export default function compareData(data1, data2) {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  const getDiff = Array.from(keys).map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { type: 'nested', key, value: compareData(data1[key], data2[key]) };
    }

    if (!Object.hasOwn(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (!Object.hasOwn(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {type: 'changed', key, value1: data1[key], value2: data2[key]};
    }

    return { type: 'unchanged', key, value: data2[key] };
  });

  return getDiff;
}
