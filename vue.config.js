module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: ['@/assets/styles/base/variables.scss', '@/assets/styles/base/function.scss'],
    },
  },
  configureWebpack: config => {
    config.module.rules
      .filter(r => r.test.toString().includes('svg'))
      .forEach(r => {
        r.test = /\.(png|jpe?g|gif)$/; // eslint-disable-line
      });
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-loader',
    });
  },
};
