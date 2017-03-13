#Webpack-1

##3-Organize
###*Let's clean-up organize our project into directories*

src/
- app/
  - module1
- stylesheets/
  - styles.css
- index.js

###*Let's update our Webpack config:*
```
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js' // On build, will create dist folder
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
};

```

###*Update `index.html`:*
- `<script src="dist/bundle.js">`

###*Update `.gitignore`:*
- `dist`

####*Build, make it work, rebuild and chackout to `4-basic-entry-output`*
