module.exports = {
  entry: __dirname + '/client/src/components/index.jsx',
  module: {
    rules: [
      { 
        test: [/\.jsx/, /\.css$/],
        exclude: /node_modules/,
        use: {
          loader:  'babel-loader',
          options: {presets: ['@babel/preset-react', '@babel/preset-env']}
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist/'
  }
};
