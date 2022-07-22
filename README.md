# nouns-number
### A simple selection of the noun case by number

[![npm](https://badgen.net/npm/v/nouns-number)](https://www.npmjs.com/package/nouns-number)
[![npm](https://badgen.net/npm/dw/nouns-number)](https://www.npmjs.com/package/nouns-number)
[![npm](https://badgen.net/npm/license/nouns-number)](https://www.npmjs.com/package/nouns-number)

#### Syntax
```javascript
getNoun(array, number)
````

#### Params

| Param | Type     | Required | Description                          |
|-------|----------|:--------:|--------------------------------------|
| `array` | `string[]` |   true   | Array with nouns to select           |
| `number` | `number`   |   true   | the number on which the noun depends |

#### Examples
```javascript
import { getNoun } from 'nouns-number'

const array = ['минута', 'минуты', 'минут']

getNoun(array, 1); // -> минута
getNoun(array, 2); // -> минуты
getNoun(array, 5); // -> минут

const count = 2;
const totalMessage = `Прошло всего ${count} ${getNoun(array, count)}`; // -> Прошло всего 2 минуты
```
