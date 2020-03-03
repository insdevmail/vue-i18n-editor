module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  fix: true,
  formatter: 'verbose',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
  syntax: 'scss',
};
