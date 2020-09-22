{
    var str = "abc";
    console.log(str.charAt(0));  //a
    console.log(str.charCodeAt(0));  //97
}
{
    let str = "xyz";
    // 字符串遍历
    for (const s of str) {
        console.log(s);
    }
}
{
    let str = "string";
    // 包含
    console.log(str.includes("r"));  //true
    // 起始
    console.log(str.startsWith("str"));  //true
    // 结尾
    console.log(str.endsWith("ng"));  //true
}
{
    let str = "abc";
    // 字符串重复
    console.log(str.repeat(2));  //abcabc
}
{
    // 模板字符串
    let name = "jack";
    let info = "hello";
    console.log(`字符拼接name:${name}+info:${info}`)
}
{
    var str = "a"
    // 字符串补白，参数1要求字符串的长度，如果不满足填充第二个参数
    console.log(str.padStart(2,"0"));  //0a
    var str2 = "b";
    console.log(str2.padEnd(2,"0")); //b0
}
{
    // 标签模板
    let user = {
        name:"list",
        info:"hello world"
    };
    abc`i am ${user.name},${user.info}`;
    function abc(s,v1,v2){
        console.log(s,v1,v2);
    }
}
{
    console.log(String.raw`hi\n${1+2}`);  //  使用raw时，\n不会换行
    console.log(`hi\n${1+2}`);
}