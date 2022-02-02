## Install

`npm i nouns-number`

<hr>

## Import

```
const getNoun = require('nouns-number');
```
Or you can use ES Modules syntax:
```
import getNoun from 'nouns-number';
```
<hr>

## Usage
```
getNoun(['минута', 'минуты', 'минут'], 1); // -> минута
getNoun(['минута', 'минуты', 'минут'], 2); // -> минуты
getNoun(['минута', 'минуты', 'минут'], 5); // -> минут
```
