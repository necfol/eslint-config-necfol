module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        //指定要使用的ECMAScript版本，默认值5
        ecmaVersion: 2018,
        //设置为script(默认)或module（如果你的代码是ECMAScript模块)
        sourceType: "module",
        //这是个对象，表示你想使用的额外的语言特性,所有选项默认都是false
        ecmaFeatures: {
            jsx: true
        }
    },
    //extends属性值可以是一个字符串或字符串数组
    //数组中每个配置项继承它前面的配置
    extends: ["standard"],

    //ESLint支持使用第三方插件
    //在使用插件之前，你必须使用npm安装它
    //全局安装的ESLint只能使用全局安装的插件
    //本地安装的ESLint不仅可以使用本地安装的插件还可以使用全局安装的插件
    //plugin与extend的区别：extend提供的是eslint现有规则的一系列预设
    //而plugin则提供了除预设之外的自定义规则，当你在eslint的规则里找不到合适的的时候
    //就可以借用插件来实现了
    plugins: ["babel", "standard"],

    //具体规则配置
    //off或0--关闭规则
    //warn或1--开启规则，警告级别(不会导致程序退出)
    //error或2--开启规则，错误级别(当被触发的时候，程序会退出)
    rules: {
        "quotes": ["error", "double"],
        "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-args": 2,//函数参数不能重复
        "no-duplicate-case": 2,//switch中的case标签不能重复
        "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
        "no-empty": 2,//块语句中的内容不能为空
        "no-eval": 1,//禁止使用eval
        "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
        "no-use-before-define": 2,//未定义前不能使用
        "no-void": 2,//禁用void操作符
        "no-var": 1,//禁用var，用let和const代替
        "eqeqeq": 2,//必须使用全等
        "indent": [2, 4],//缩进风格
        "babel/object-curly-spacing": 2,
        "computed-property-spacing": 2,
        "generator-star-spacing": [2, "after"],
        "max-nested-callbacks": [2, { max: 5 }],
        "max-params": [2, { max: 5 }],
        "prefer-const": [2, {
            destructuring: "all"
        }],
        "space-before-function-paren": [2, {
            anonymous: "always",
            named: "never",
            asyncArrow: "always"
        }],
        "standard/no-callback-literal": 0
    }

};
