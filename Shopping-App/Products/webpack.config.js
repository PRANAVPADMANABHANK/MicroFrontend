const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: "development",
    devServer: {
        port: 3001
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }), 
        new ModuleFederationPlugin({
            name: 'products',                      //name of the MFE
            filename: 'remoteEntry.js',            //name of a file which will be imported in container 
            exposes: {                             //code to be exported and can be used in container
                './ProductIndex': './src/index'
            }
        })
    ]
}        