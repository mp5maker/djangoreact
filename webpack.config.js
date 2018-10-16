const path = require('path');

module.exports = {
    entry: "./src/app/scripts/main.js",
    output: {
        path: path.resolve(__dirname, 'src/static'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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