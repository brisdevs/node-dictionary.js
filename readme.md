# Advanced dictionary module for NodeJS.

## Türkçe;
```js
const dictionary = require('node-dictionary.js');

let kelime = await dictionary.trFindWord("araba");
console.log(kelime)
```
### Çıktı;
```js
{
    kelime: 'araba',
    anlamı: 'iki ya da dört tekerli, hayvan gücüyle çeklilen taşıt',
    örnek: 'Bir at arabası geliyor'
}
```

## English;
```js
const dictionary = require('node-dictionary.js');

let word = await dictionary.enFindWord("hello");
console.log(word)
```
### Output;
```js
{
  word: 'hello',
  meaning: 'Used as a greeting or to begin a phone conversation.',
  example: 'hello there, Katie!'
}
```

## French;
```js
const dictionary = require('node-dictionary.js');

let word = await dictionary.frFindWord("hello");
console.log(word)
```
### Output;
```js
{
  mot: 'bonjour',
  sens: 'Souhait de bonne journée (adressé en arrivant, en rencontrant).',
}
```