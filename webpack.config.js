module.exports = {
    entry: {
        main: './main.js'
    },
    mode: "development",
    optimization: {         // 不压缩成一行
        minimize: false
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [[
                            "@babel/plugin-transform-react-jsx",
                            {
                                pragma:"ToyRact.createElement"
                            }
                        ]]
                    }
                } 
            }
        ]
    }
}