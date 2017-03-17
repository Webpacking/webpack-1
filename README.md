# Webpack-1

## 5-Dynamic-Entry-Output
Let's dive a bit further into configuring out entry(s) and output(s)

## Setup
1. `npm i`
2. `npm run webpack`
3. Create `index.html` in the dist directory

### *- This is a more dynamic version of entry point which allow*
```
module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  }
};
```
Output filename will be `./dist/app.js`

### *- Our application may require multiple entry points at times*
```
module.exports = {
  entry: {
    app: './src/index.js',
    module1: './src/app/module1.js',
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  }
};
```
Will output 2 files in ./dist, app.js and module1.js

### *- TEN points to the person who can figure out what this does*
```
module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'lodash', ...]
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  }
};
```
Will output 2 files in ./dist, app.js and vendor.js
