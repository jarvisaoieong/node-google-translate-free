Google Translate API client for node.js for free.

Edited from [node-google-translate-skidz](https://github.com/statickidz/node-google-translate-skidz) to support 0.10 for my personal use.

```js
var translate = require('../lib/translate');

translate({
  text: 'text',
  source: 'es',
  target: 'en'
}, function(result) {
  console.log(result);
});
```
