// webpack.config.js
export const entry = './src/index.js';
export const module = {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ],
};
