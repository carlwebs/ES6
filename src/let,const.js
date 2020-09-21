function test(){
    for (let i = 0; i < 3; i++) {

    }
    // let命令在块作用域中有效，在外部访问不到
    // let命令不能重复声明变量
    // console.log(i); 报错
}
function last(){
    const PI = 3.14;
    console.log(PI);
    // const定义不能修改,const声明的时候必须赋值
    // 下面这种是可以的，因为引用地址没有变
    const k = {
        a:1
    }
    k.a = 2;
    console.log(k);
}
test();
last();
// 下面的代码如果使用var，最后输出的是10。

// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); // 10
// 上面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。
// 也就是说，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10。

// 如果使用let，声明的变量仅在块级作用域内有效，最后输出的是 6。

// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); // 6
// 上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。

// 另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

// for (let i = 0; i < 3; i++) {
//   let i = 'abc';
//   console.log(i);
// }
// // abc
// // abc
// // abc
// 上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。

// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;


var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
// 上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

// ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

// 总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）

// “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。

// typeof x; // ReferenceError
// let x;
// 上面代码中，变量x使用let命令声明，所以在声明之前，都属于x的“死区”，只要用到该变量就会报错。因此，typeof运行时就会抛出一个ReferenceError。

// ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
// 上面代码的原意是，if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。但是，函数f执行后，输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。


// const的作用域与let命令相同：只在声明所在的块级作用域内有效。

if (true) {
  const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined
// const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。


// const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

// const foo = {};

// // 为 foo 添加一个属性，可以成功
// foo.prop = 123;
// foo.prop // 123

// // 将 foo 指向另一个对象，就会报错
// foo = {}; // TypeError: "foo" is read-only
// 上面代码中，常量foo储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。

// 下面是另一个例子。

// const a = [];
// a.push('Hello'); // 可执行
// a.length = 0;    // 可执行
// a = ['Dave'];    // 报错
// 上面代码中，常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错。