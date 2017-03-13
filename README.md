#Webpack-1

**First, let's upgrade our reqiure and exports to ES6 syntax**

- `require => import`
- `exports => export`


*Project files:*
- `export const TEST = 'Testing 1..2..3';` =>
- `import { TEST } from './module1.js';` // Via this exports object

- `export default TEST;`
- `import whateverIWantToCallIt from './module1.js';`

*Node Modules:*
- `import React from 'react';` // Resolves node_modules, no relative path necessary

##Setup
*Install Babel dependencies:*
- `npm i -D babel-core`
- `npm i -D babel-loader`
- `npm i -D babel-preset-es2015`
- `npm i -D babel-preset-latest`

###*Add babelrc file:*
- `(root-dir) $ touch .babelrc`

Inside .babelrc add the following:

```
{
  "presets": ["es2015"]
}
```

###*Add the Babel loader to the Webpack config:*
```
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' } // <-- babel loader
    ]
  }
};
```

IMPORTANT NOTE: This is they HIGHLY recommended babel-loader but it's not actually "bare-bones"
`{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }`

####*When finished, rebuild and chaeckout to 3-organize*
