module.exports = {
    extends: 'eslint-config-airbnb-base',
    // plugins:[]
    rules: {
        'no-console': 1,
        eqeqeq: 2
    },
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module'
    },
    globals: {
        document: true,
        alert: true
    }
};