#Webpack-1

##4-Basic-Entry-Output
Let's dive a bit further into configuring out entry(s) and output(s)

*- Our bare-bones entry and output*
```
odule.exports = {
  entry: './src/index.js'
  output: {
    filename: './dist/bundle.js'
  }
};
```

*- Let's put in some safeguards for our entry point*
```
module.exports = {
  context: `${__dirname}/src`, // Where webpack will resolve entry path
  entry: './index.js'
}
```

*- Let's consolidate our public files into the dist/ directory*
```
...
output: {
  path: 'dist',
  filename: 'bundle.js'
}

```

*- A more customized entry/output*
```
module.exports = {
  context: `${__dirname}/src`,
  entry: './index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  }
}
```
NOTE: Your output will be ./dist/app.js for which you will have to update your `index.html`
