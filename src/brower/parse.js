/**
 * @description: 
 * @param {*} query
 * @return {*}
 */
const parse = (query = {}) => {
  return Object.keys(query)
    .filter((key) => !isEmpty(query[key]))
    .reduce((result, key) => {
      const value = query[key];
      // in查询特殊处理
      if (Array.isArray(value) && !isEmpty(value)) {
        return `${result}&${value.reduce(
          (val, cVal) => `${val ? `${val}&` : val}${key}=${cVal}`,
          ''
        )}`;
      }

      // between查询做特殊处理
      if (typeof value === 'object' && !isEmpty(value)) {
        const [start, end] = value;
        return `${result}&${key}[]=${start}&${key}[]=${end}`;
      }

      return `${result}&${key}=${value}`;
    }, '')
    .replace(/^&/, '?');
};

module.exports = parse