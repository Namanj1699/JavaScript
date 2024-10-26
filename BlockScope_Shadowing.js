//block / compound statement --> group multiple statement together in a block so that we use where JS expect only one.

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// output : 10,20,30,10

// let and const are block scoped because we can't access let and const var outside the block
    
//shadowing

// var a = 10;
// {
//     var a=100;
    // a is shadowed with the new value 100 it changes globally.
//     console.log(a);
// }

// console.log(a);

// output : 100,100

// let a = 10;
// {
//     let a=100;
//     console.log(a);

// as we know let and const is also hoisted but in different memory space generally we call as temporal dead zone so in the case of shadowing let is created inside block scope and the let which we declare outside block is the other so both output is different!
// }

// console.log(a);

// Same happen in the case of const!!

// var a = 10;
// {
//     let a = 100;
// }
//It is working because let doesn't cross it's boundaries as it is in block scope and var is inside global

// let a=10;
// {
//     var a=100;
// }
// throws errors because let has it's boundaries that we can't re declare let

// console.log(a)