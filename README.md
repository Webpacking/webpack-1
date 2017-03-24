# Webpack-1

## 7-Webpack-2
Let's migrate to Webpack 2

### Package updates
1. `npm i -D webpack@2.2.1`
2. `npm i -D webpack-dev-server@2.4.1`

### Webpack output
*`output.path` now __requires__ that use an absolute path*
```
...javascript
output: {
  path: `${__dirname}dist`,
  filename: 'bundle.js'
},
...
```

### Loaders
*There are some required changes and some backwards compatible features elements:*
```javascript
...
module: {
  // Becomes 'rules' instead 'loaders' - BACK COMPATIBLE
  rules: [ 
    // 1. Array of 'loaders' array becomes 'use' - BACK COMPATIBLE
    // 2. We must use the complete loader reference, no more ['style', 'css'] - REQUIRED
    { test: /\.css$/, use: ['style-loader', 'css-loader'] }
  ]
}
```

*NOTE:*
1. `json-loader` is no longer necessary
2. `babel-loader` is no longer necessary for a bare-bones config
3. We can also reference loaders as a query string (from Webpack 1):
  - `{ test: /\.css$/, loader: 'style-loader!css-loader' }`

### Finally let's build and serve
*`npm run build:serve` - (notice that we've made some changes to our `npm` scripts)*
*[Migrate to Webpack2](https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules).*

### Finally
*Let's style it up a bit before moving on*
- `npm i -D style-loader`
- `npm i -D css-loader`

*Add the loader to our config (2 options)*
- `{ test: /\.css$/, use: ['style-loader', 'css-loader'] }`
- `{ test: /\.css$/, loader: 'style-loader!css-loader' }` - another method

*Troubleshooting (these are the musts):*
1. Make sure you've NPM installed `webpack@2.2.1`
2. Make sure you've NPM installed `webpack-dev-server@2.4.1`
3. If using `output.path` (we can still just use `filename: ./dist/bundle.js`) make sure it's an absolute path
4. Make sure to reference the entire loader name: `'babel-loader'` instead of `'babel'`

*Also (backwards compatible, for now):*
1. `module.loaders` becomes `module.rules`
2. For and array of `loaders` change to 'use'

#Setup
- Clone this repo
- Install webpack as a dev dependecy: `npm i`
- Open `index.html` in your browser
- Convert this project to Webpack
