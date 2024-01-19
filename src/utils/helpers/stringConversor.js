module.exports = (paramsObject) => {
  for (let p in paramsObject) {
    if(/Id|id/.test(p)) {
      paramsObject[p] = Number(paramsObject[p]);
    }
  }
  return paramsObject;
};