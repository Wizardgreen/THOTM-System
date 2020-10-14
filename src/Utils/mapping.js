/**
 * @param {string} - key
 * @param {map} - map
 * @return {string} - mapping result
 */
function mapping({ key, map }) {
  return map.get(key).label;
  // return map.find(({ value }) => value === key).label;
}

export default mapping;
