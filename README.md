#Webpack-1

##4-Basic-Entry-Output
Let's dive a bit further into configuring out entry(s) and output(s)

###*- Our bare-bones entry and output:*
```
odule.exports = {
  entry: './src/index.js'
  output: {
    filename: './dist/bundle.js'
  }
};
```

###*- Let's put in some safeguards for our entry an output paths:*
```
const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, src/), // Where webpack will resolve entry path
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'), // 'dist' is now where out public files will be stored
    filename: 'bundle.js'
  }
}
```

NOTE: Your output will be ./dist/app.js for which you will have to update your `index.html`
