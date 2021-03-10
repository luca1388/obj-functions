# objFilter

Implementation of the array-like function `filter()` for regular javascript objects. With this tool it's possible to create a new object containing only a subset of the given object key-value pairs without using a for loop. It behaves in the same way of the native array [filter function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

## Getting Started
### Installing
```
npm install obj-functions
```

### Usage
Import `objFilter` function from the package:
```js
import { objFilter } from "obj-functions";

const numbers = {
  field1: 9,
  field2: 5,
  field3: -4
}

const negativeNumbers = objFilter(numbers, (field, value) => value < 0);

console.log(negativeNumbers); // will print { field3: -4 }

```
`objFilter(obj, callback)` accepts 2 parameters:
- `obj` is the object to filter
- `callback` is the function used to filter the object and that loops through all object fields. It accepts 2 parameters, the generic object key and the relative value: `callback(key, value)`. Callback should return `true` whenever current (key: value) pair should be kept in the returned object result.


### Developing
Install all the dependencies:
```
npm install
```
Build it: 
```
npm run build
```
To run the tests:
```
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details