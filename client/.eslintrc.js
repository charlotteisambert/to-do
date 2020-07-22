module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never"
      }
    ],
    "max-len": 0,
    "no-console": 0,
    "indent": [2, 2],
    "react/no-array-index-key": 1,
    "camelcase": 0,
    "import/prefer-default-export": 0,
    "no-control-regex": 1,
    "jsx-a11y/click-events-have-key-events": 1,
    "no-use-before-define": ["error", { "functions": false, "classes": true, "variables": true }],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    "react/jsx-filename-extension": [2, { "extensions": [".tsx", ".jsx"] }],
    "import/no-extraneous-dependencies": [1, { "devDependencies": false, "optionalDependencies": false, "peerDependencies": false }],
    "jsx-a11y/media-has-caption": [1, { "audio": ["Audio"], "video": ["Video"], "track": ["Track"] }],
    "quotes": ["error", "double"],
    "no-shadow": 0,
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
};
