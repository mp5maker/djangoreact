const path = require('path');

module.exports = {
    entry: "./src/app/controllers/main.js",
    output: {
        path: path.resolve(__dirname, 'src/static'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ]
    }
};