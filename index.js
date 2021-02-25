exports.objectFilter = (object, filterFunction) => {
  return Object.keys(object)
    .filter((key) => filterFunction(key, object[key]))
    .reduce((filteredObject, currentKey) => {
      filteredObject[currentKey] = object[currentKey];
      return filteredObject;
    }, {});
};
