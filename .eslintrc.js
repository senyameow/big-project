module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/jsx-runtime",
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
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/prefer-nullish-coalescing": 0,
        'react/jsx-indent': [2, 4],
        "no-useless-escape": 'off',
        "@typescript-eslint/no-floating-promises": 0,

    },
    "globals": {
        'PRODUCTION': true
    }
}
