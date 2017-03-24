# Webpack-1

## 6-Dev-Server
We want to tell the dev-server where our html lives so it can serve it. Note that moving forward we will be using recommended Webpack configurations

## Setup
- `npm i -D webpack-dev-server@1.16.3`

### *- This will allow us quickly make use of Hot Module Replacement*
1. Create an npm script in package.json, 

```javascript
"scripts": {
  ...
  "build:dev": "webpack && webpack-dev-server --hot --inline --content-base dist/"
  ...
}
```

2. `npm run dev:build`

3. open browser to `localhost:8080`

```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  }
};
```

### *- Another method is add the `devServer` object to our config*

```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    inline: true // Then we set the content base to our public folder
  }
};
```

### *For now, let's create some VanillaJS components and really make use of HMR*
(Reference module1.js and index.js for examples)
