module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        //指定要使用的ECMAScript版本，默认值5
        ecmaVersion: 2018,
        //设置为script(默认)或module（如果你的代码是ECMAScript模块)
        sourceType: 'module',
        //这是个对象，表示你想使用的额外的语言特性,所有选项默认都是false
        ecmaFeatures: {
            jsx: true
        }
    },
    //extends属性值可以是一个字符串或字符串数组
    //数组中每个配置项继承它前面的配置
    // extends: ['eslint:recommended', 'standard'],
    extends: [
        'eslint:recommended',
        'standard',
        'plugin:prettier/recommended',
        'prettier/standard',
    ],
    //ESLint支持使用第三方插件
    //在使用插件之前，你必须使用npm安装它
    //全局安装的ESLint只能使用全局安装的插件
    //本地安装的ESLint不仅可以使用本地安装的插件还可以使用全局安装的插件
    //plugin与extend的区别：extend提供的是eslint现有规则的一系列预设
    //而plugin则提供了除预设之外的自定义规则，当你在eslint的规则里找不到合适的的时候
    //就可以借用插件来实现了
    plugins: ['babel', 'standard', 'prettier'],

    //具体规则配置
    //off或0--关闭规则
    //warn或1--开启规则，警告级别(不会导致程序退出)
    //error或2--开启规则，错误级别(当被触发的时候，程序会退出)
    rules: {
        'comma-dangle': 0,
        'prettier/prettier': ['error', {
            'semi': false,
            'singleQuote': true,
            'trailingComma': 'all',
            'tabWidth': 4
        }],
    }
};
