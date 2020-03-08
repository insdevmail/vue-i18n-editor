module.exports = {
  plugins: {
    tailwindcss: {},
    'vue-cli-plugin-tailwind/purgecss': {
      whitelistPatterns: [/button--/, /v--modal/, /multiselect/],
    },
    autoprefixer: {},
    'rucksack-css': {},
    'postcss-color-function': {},
  },
};
