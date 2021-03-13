module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-mixed-spaces-and-tabs': 'error',
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'template-curly-spacing': 'off',
        indent: 'off'
    },
    ignorePatterns: ['./node_modules/', './.vscode/*', './logs/', './.git/*', './tests/'],

};