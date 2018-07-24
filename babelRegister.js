require("babel-register")({ // .babelrc是用来给babel-register用的, 默认不转node_modules，dvax就不兼容了
    ignore: /node_modules\/(?!.*dvax)/ //dvax前面可能有其他字符,.*表示任意个数的任意字符
})