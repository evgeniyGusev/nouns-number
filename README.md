## Установка

`npm install --save nouns-number`

## Использование

```
const getNoun = require('nouns-number')

getNoun(['минута', 'минуты', 'минут'], 1) // -> минута
getNoun(['минута', 'минуты', 'минут'], 2) // -> минуты
getNoun(['минута', 'минуты', 'минут'], 5) // -> минут

```
