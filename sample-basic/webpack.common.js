const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.jsx",
        vendor: "./src/vendor.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env','@babel/preset-react'],
                    cacheDirectory: true,
                  }
                }
            },
            {
                test: /\.(htm|html)$/,
                use: ['html-loader'],
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: "static/media/[name].[hash:8].[ext]",
                    }
                }
                    
            },
        ],
        
    },
};