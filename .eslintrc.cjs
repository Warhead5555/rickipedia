/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended"
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "rules": {
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        "registeredComponentsOnly": true,
        "ignores": []
      }
    ],
    "vue/custom-event-name-casing": [
      "error",
      "kebab-case",
      {
        "ignores": [
          "/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u"
        ]
      }
    ],
    "vue/no-root-v-if": "error",
    "vue/first-attribute-linebreak": [
      "error",
      {
        "singleline": "beside",
        "multiline": "below"
      }
    ],
    "vue/no-static-inline-styles": "error",
    "no-console": "warn",
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "no-trailing-spaces": "error",
    "no-await-in-loop": "error",
    "semi": [
      "error",
      "never"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description"
      }
    ],
    "space-infix-ops": [
      "error",
      {
        "int32Hint": false
      }
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true,
        "exceptions": {
          "Property": true,
          "ImportDeclaration": true
        }
      }
    ]
  }
}
