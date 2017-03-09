#Webpack-1

##7-Webpack-2
Let's migrate to Webpack 2

###First
1. `npm i -D webpack@2.2.1`
2. `npm run webpack`

*Right about now we have some interesting stuff happening with our loaders. Let's fix it!*

###Second
1. `npm run build:serve`
2. Run our app from localhost, make some changes and check to see that HMR is working

*It's not working anymore so let's fix it*
3. `npm i webpack-dev-server@2.4.1`

*We're back!!!*

*So we're noticing that the Webpack team has made migration easy enough and they've even given us some default features. But there are still a few things we need to change to REALLY [migrate to Webpack2](https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules).*

###Finally
*Let's style it up a bit before moving on*
- `npm i -D style-loader`
- `npm i -D css-loader`

*Add the loader to our config (2 options)*
- `{ test: /\.css$/, use: ['style-loader', 'css-loader'] }`
- `{ test: /\.css$/, loader: 'style-loader!css-loader' }`
