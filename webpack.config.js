module.exports = {
    entry: [
        'bootstrap-loader',
        './js/app.js'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!resolve-url-loader!sass-loader'},

            /* Bootstrap Loader */
            {test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery'},

            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader' },
            /* End Bootstrap Loader */
        ]
    }
};
