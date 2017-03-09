#Webpack-1

##6-Dev-Server
We want to tell the dev where our html lives

###Setup
- `npm i -D webpack-dev-server@1.16.3`

*- This will allow us quickly make use of Hot Module Replacement*
- First method is create an npm script:
`webpack-dev-server --hot --inline --content-base dist/`

```
module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  }
};
```

*- Another method is add the `devServer` object to our config*

```
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

NOTE: There is also Node middleware for the dev server which we'll get to if
we have time

*For now, let's create some VanillaJS components and really make use of HMR*
