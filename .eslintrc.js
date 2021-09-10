module.exports = {
  "extends": [
    "aguinaga",
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80,
        "semi": false,
      }
    ],
    'react-hooks/rules-of-hooks': 0
  }
};
