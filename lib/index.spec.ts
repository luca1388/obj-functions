import { objFilter } from "./index";

const numbers: {[key in string]: number} = {
  field1: 9,
  field2: 5,
  field3: -4,
  field4: 3,
  field5: 0,
  field6: -1,
};
const objResponse: {[key in string]: number | string} = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body:
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};
const strings: {[key in string]: string} = {
  "message-yes": "Yes",
  "message-no": "No",
  "message-ok": "Ok",
  "error-generic": "Something went wrong",
  "error-unauthorized": "401",
  "message-button": "Button",
  "error-bad-request": "400",
};

type Fruit = {
    "id": number, 
    "description": string
}
const fruits: {[key in string]: Fruit} = {
    "orange": {
        "id": 0,
        "description": "This is an orange"
    },
    "apple": {
        "id": 1,
        "description": "This is an apple"
    },
    "watermelon": {
        "id": 2,
        "description": "This is a watermelon"
    },
    "melon": {
        "id": 3,
        "description": "This is a melon"
    }
};

describe("Filtering tests", () => {
  describe("Basic filtering functionalities", () => {
    test("It should filter out negative numbers in an object of numbers", () => {
      const greaterThanZero = objFilter(numbers, (_key: string, value: number) => value > 0);
      expect(greaterThanZero).toEqual({
        field1: 9,
        field2: 5,
        field4: 3,
      });
    });

    test("It should prune string values", () => {
      const stringOnlyValues = objFilter(
        objResponse,
        (_key: string, value: any) => typeof value !== "string"
      );
      expect(stringOnlyValues).toEqual({ userId: 1, id: 1 });
    });

    test("It should select only a particular key of an object", () => {
      const selectedKeyObject = objFilter(
        objResponse,
        (key:string) => key === "title"
      );
      expect(selectedKeyObject).toEqual({
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      });
    });

    test("It should select keys with given prefix", () => {
      const prefix = "message";
      const prefixedKeys = objFilter(strings, (key:string) =>
        key.toLowerCase().startsWith(prefix)
      );

      expect(prefixedKeys).toEqual({
        "message-yes": "Yes",
        "message-no": "No",
        "message-ok": "Ok",
        "message-button": "Button",
      });
    });

    test('It should search for given token inside key', () => {
        const search = 'melon';
        const searchedObject = objFilter(fruits, (key: string, value: Fruit) => key.indexOf(search) > -1 );
        expect(searchedObject).toEqual({
            "watermelon": {
                "id": fruits['watermelon'].id,
                "description": fruits['watermelon'].description
            },
            "melon": {
                "id": fruits['melon'].id,
                "description": fruits['melon'].description
            }
        });
    });
  });
});
