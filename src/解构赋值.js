{
    let a,b,c,rest;
    // 解构赋值，添加默认值
    [a,b,c=3] = [1,2];
    console.log(a,b,c);
}
{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log(a,b,rest);  //1,2,[3,4,5,6]
}
{
    let a,b;
    ({a,b} = {a:1,b:2});
    console.log(a,b)
}
{
    // 解构赋值，变量交换位置
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b);
}
{
    function f(){
        return [1,2];
    }
    let [a,b] = f();
    console.log(a,b);  //1,2
}
{
    function f(){
        return [1,2,3,4,5];
    }
    let [a,,,b] = f();
    console.log(a,b);  //1,4
}
{
    function f(){
        return [1,2,3,4,5];
    }
    let [a,...b] = f();
    console.log(a,b);  //1,[2,3,4,5]
}
{
    let o = {p:42,q:true};
    let {p,q} = o;
    console.log(p,q);  //42,true
}
{
    let {a=10,b=5} = {a:3};
    console.log(a,b); //3,5
}
{
    let metaData = {
        title:"abc",
        test:[{
            title:"test",
            desc:"desc"
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]} = metaData;
    console.log(esTitle,cnTitle);  //abc,test
}

// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// baz // "aaa"
// foo // error: foo is not defined
// 上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。\


// 如果要将一个已经声明的变量用于解构赋值，必须非常小心。

// // 错误的写法
// let x;
// {x} = {x: 1};
// // SyntaxError: syntax error
// 上面代码的写法会报错，因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。

// // 正确的写法
// let x;
// ({x} = {x: 1});

// 函数的参数也可以使用解构赋值。

function add([x, y]){
  return x + y;
}

add([1, 2]); // 3


// 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。

// const { SourceMapConsumer, SourceNode } = require("source-map");