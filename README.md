# Webpack-1

## 4-Basic-Entry-Output
Let's dive a bit further into configuring out entry(s) and output(s)

## Setup
*You may notice `npm-shrinkwrap.json` this will allow us to run `npm install` and lock the module versions*
1. `npm i`
2. `npm run webpack`
3. Create or copy index.html to the `dist` folder after running webpack

### *- Our bare-bones entry and output:*
```
odule.exports = {
  entry: './src/index.js'
  output: {
    filename: './dist/bundle.js'
  }
};
```

### *- Let's put in some safeguards for our entry an output paths:*
```
const { resolve } = require('path'); // No need to NPM install this module

module.exports = {
  context: resolve(__dirname, src/), // Where webpack will resolve entry path
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'), // 'dist' is now where out public files will be stored
    filename: 'bundle.js'
  }
}
```

### *Finally, after your dist folder is created, move your index.html to that folder and update the file path:*

NOTES:
- Your output will be ./dist/app.js for which you will have to update your `index.html`
- `webpack.config.example.js` is a recommended version of basic entry and output but not a bare-bones implementation
