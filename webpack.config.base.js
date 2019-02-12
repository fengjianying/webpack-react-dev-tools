
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: "[name][hash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {//图片
                test: /\.(png|jpg|gif|svg|ico)$/i,//i不区分大小写
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../static/img/'//图片输出位置
                        }
                    },
                    'image-webpack-loader'//图片压缩工具
                ]
            },
            {//字体图标
                test: /\.(eot|woff|woff2|ttf)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 30000,
                        outputPath: '../static/font/'//图片输出位置
                    }
                }
            },
            {//数据
                test: [/\.json$/i],//i不区分大小写
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../static/data/'//图片输出位置
                        }
                    }
                ]
            },
            {//音乐
                test: [/\.mp3$/i],//i不区分大小写
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../static/music/'//图片输出位置
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader:'css-loader'
                        },
                        {
                            loader:'postcss-loader'
                        },
                        {
                            loader:'less-loader',
                            options: {
                                javascriptEnabled: true
                            }
                        }
                    ]

                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name][hash:8].css',
            allChunks: true
        }),
        new copyWebpackPlugin([{//复制static到public
            from: __dirname + '/static',//打包的静态资源目录地址
            to: './public' //打包到public下面的static
        }]),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),//模板
            filename: 'index.html',
            title:'doucment',//页面标题
            inject: true, //允许插件修改哪些内容，包括head与body
            hash: true, //是否添加hash值
            minify: { //压缩HTML文件
                removeComments: true,//移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            },
            chunksSortMode: 'none' //允许控制在将块包含到HTML之前应如何对块进行排序 如果使用webpack4将该配置项设置为'none'
        })
    ]
};