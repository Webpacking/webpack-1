#Webpack-1

##1-commonjs
*CommonJS is essentialy making use of the Node module system to share dependencies:*
- `module.exports` or `exports.dependency` // Give the application access
- `const greeting = require('./greetingFile.js');` // access the export dependency

Essentially, these are precursors of the ES6, `import` and `export` now made available, client-side, via Webpack

##Setup
- `npm i -D webpack@1.14.0`




*Let's add some code to our `index.js` and `module1.js` files:*
```
// module1.js
const TEST = 'Testing 1..2..3';

// We can export whatever value/type we like
module.exports = {
  TEST: TEST
};

// or exports.TEST = TEST;

// index.js
const { TEST } = require('./module1.js');

console.log(TEST);
```


*In our package.json, let's create a new NPM script:*
(no comments in the actual `package.json`)
```
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "webpack": "webpack" // Use Webpack from our local project
},
...
```

*Let's add the 'entry' point and `output.filename' to our config:*

// webpack.config.js
```
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  }
};

```

*Finally, update the `<script>` element with relative path to our output file*

##Execute
1. From our terminal, `npm run webpack` // NOTE: custom NPM scripts requrie the `run`
2. Open the `index.html` in the browser and open the developer console to see our logged output
