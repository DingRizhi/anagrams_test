// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));

//console.log("hello world!!!");

// function isLeapYear(n){
//     if(n % 400 ==0){
//         return true
//     }

//     if(n % 4 == 0 && n % 100 != 0){
//         return true
//     }

//     return false 
// }
// console.log("2000:" + isLeapYear(2000));
// console.log("1900:" + isLeapYear(1900));
// console.log("2008:" + isLeapYear(2008));
// console.log("2009:" + isLeapYear(2009));


// function fn(n){
//     if(n==1|n==2){
//     return 1;}
//     //因为斐波那契数列格式为：1、1、2、3、5、8、13、21、34、......,n=1和n=2的时候都是输出1
//     return fn(n-1)+fn(n-2);
//     //不断调用自身函数，n-1是穿进去的参数的前一次，就是最后n的前一个数字。所以n-2是最后传入参数的前两个数字。
//     }
//     //用函数写出斐波那契数列
    
//     var n=10;
//     var a1=1;
//     var a2=1;
//     var a3=0;
//     console.log(a1);
//     console.log(a2);
//     for(var i=2;i<=n;i++){//因为前两个数都是1，所以要从i=2开始，就是前两个数的1+1=2，i的初始值其实是第三个数
//     a3=a1+a2;//第三个数等于第一个数加上第二个数
//     console.log(a3);
//     a1=a2;//第一个数就变成了之前的第二个数
//     a2=a3;//第二个数就变成了刚刚的第三个数
//     }
//     //console.log(a3);
//     //使用for循环写出斐波那契数列

const fibonacci = require('./lib/fibonacci')

for(var i=1; i<=20; i++){
    console.log(fibonacci(i));
}