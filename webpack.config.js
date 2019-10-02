const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const source_path = path.join(__dirname, 'assets');

const plugins = [
  new ExtractTextPlugin({
    filename: 'stylesheets/[name].css',
    allChunks: false,
  }),
  new CopyWebpackPlugin([
    {
      from: path.join(__dirname, 'assets/images'),
      to: path.join(__dirname, '.tmp', 'dist', 'images'),
    },
  ]),
];

const optimization = {
  splitChunks: {
    cacheGroups: {
      chunks: 'async',
    },
  },
  concatenateModules: false,
  minimizer: [],
};

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins,
  optimization,
  context: source_path,
  entry: {
    site: [
      path.resolve(__dirname, 'assets/javascripts/site.js'),
      path.resolve(__dirname, 'assets/stylesheets/site.scss')
    ],
  },
  output: {
    path: path.resolve(__dirname, '.tmp/dist'),
    filename: 'javascripts/[name].js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '/assets'),
      path.resolve(__dirname, '/node_modules'),
    ],
    extensions: ['.js, .scss, .sass, .css'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: [/node_modules/, /\.js$/],
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              query: {
                sourceMap: true,
                importLoaders: 1,
              },
            },
            {
              loader: 'sass-loader?sourceMap',
              options: {
                sourceMap: true,
                includePaths: ['node_modules'],
              },
            },
          ],
        }),
      },
    ],
  },
};
