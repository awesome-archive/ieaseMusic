
import path from 'path';
import config from './index';

export default {

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.html/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader'
            },
        ]
    },

    output: {
        path: config.dist,
        filename: 'bundle.js',

        // https://github.com/webpack/webpack/issues/1114
        libraryTarget: 'commonjs2'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            ui: path.join(config.client, 'js/ui/'),
            utils: path.join(config.client, 'js/utils/'),
            components: path.join(config.client, 'js/components/'),
            stores: path.join(config.client, 'js/stores/'),
        },
    },
};
