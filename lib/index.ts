type GenericObject = {
  [key in string]: any
};

type FilterFunctionType = (key: string, value: any) => boolean;

export const objectFilter = (object: GenericObject, filterFunction: FilterFunctionType) => {
  return Object.keys(object)
    .filter((key) => filterFunction(key, object[key]))
    .reduce((filteredObject, currentKey) => {
      filteredObject[currentKey] = object[currentKey];
      return filteredObject;
    }, {} as GenericObject);
};
