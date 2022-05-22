# bionicreading

A reimplementation of the [bionic-reading.com](https://bionic-reading.com) API, but free, and done locally, instead of sending all your text to their servers and charging you $99+/mo for the privilege. As a tool aimed at accessibility I think this is a scummy business practice. And after a deep analysis and reverse engineering (read: I used some regex & Excel) I have managed to expertly craft a replacement (read: 10 lines of JavaScript) for those who do not want to use said API.

## Usage

### Basic
```js
// CJS
const bionic = require("bionicreading");
// ESM
import * as bionic from "bionicreading";

console.log(bionic("The quick brown fox jumps over the lazy dog"));
```

### Markdown
```js
console.log(bionic("The quick brown fox jumps over the lazy dog",bionic.md));
```

### Custom
```js
function bbcodeFormatter(boldText,regularText) {
    return "[b]" + boldText + "[/b]" + regularText
}

console.log(bionic("The quick brown fox jumps over the lazy dog",bbcodeFormatter));
```

