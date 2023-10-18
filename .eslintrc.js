module.exports = {
    env: {
        "browser": true,
        "es6": true
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier"
      ],
      parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
      },
      plugins: [
        "spellcheck", "react", "jest", "react-hooks", "prettier"
      ],
    rules: {
        camelcase: 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/function-component-definition': 'off',
        "react/jsx-filename-extension": [1,
          {
            "extensions": [
              ".tsx"
            ]
          }
        ],
        "import/extensions": 'off'
    },
    root: true,
};