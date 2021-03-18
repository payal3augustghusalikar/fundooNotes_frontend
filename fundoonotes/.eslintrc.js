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
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'no-mixed-spaces-and-tabs': 'warn',
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'template-curly-spacing': 'off',
        indent: 'off'
    },
    ignorePatterns: ['./node_modules/', './.vscode/*', './logs/', './.git/*', './tests/'],

};