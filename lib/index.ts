export type GenericObject = {
  [key in string]: any
};

export type FilterFunction = (key: string, value: any) => boolean;

export const objFilter = (object: GenericObject, filterFunction: FilterFunction) => {
  return Object.keys(object)
    .filter((key) => filterFunction(key, object[key]))
    .reduce((filteredObject, currentKey) => {
      filteredObject[currentKey] = object[currentKey];
      return filteredObject;
    }, {} as GenericObject);
};
