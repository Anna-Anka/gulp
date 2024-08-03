module.exports = {
   rules: {
       'block-no-empty': true,
       'at-rule-no-unknown': null,
   },
   extends: [
           'stylelint-config-standard-scss',
       ],
       plugins: ["stylelint-order", "stylelint-scss"]
}
