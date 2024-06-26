module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/jsx-runtime",
        "plugin:i18next/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "indent": "off",
        "@typescript-eslint/indent": 'off',
        "@typescript-eslint/strict-boolean-expressions": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/prefer-nullish-coalescing": 0,
        "@typescript-eslint/no-unused-vars": 0,
        'react/jsx-indent': 0,
        "no-useless-escape": 'off',
        "@typescript-eslint/no-floating-promises": 0,
        "i18next/no-literal-string": ['error', { markupOnly: true }],
        "import/no-absolute-path": 'off',
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": "off",
        'n/handle-callback-err': 'off',
        "@typescript-eslint/member-delimiter-style": "off",
        'no-trailing-spaces': 'off',
        "@typescript-eslint/semi": "off"

    },
    "globals": {
        'PRODUCTION': true
    }
}
