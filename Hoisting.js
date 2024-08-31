console.log("Hello JS");

// In javascript - everything happens inside an execution context
// Memory is allocated to each variable and function even before it's execution that's why it is giving undefined 'which is a special keyword when we console before initialization' 

console.log(a); 
// a is giving undefined

fun();
// console statement is printed in output..

console.log(fun);
// function definition is printed inside console...

// fun1();
//print fun1 is not function inside console

// fun2();
//print fun2 is not function inside console

var a=20;

function fun()
{
    console.log("I am inside fun")
}

var fun1 = function()
{
    console.log("I am inside fun1")
}
// special keyword undefined is allocated to this function because jS take it as a variable.

var fun2 = () =>{
    console.log("I am inside fun2")
}
// special keyword undefined is allocated to this function because jS take it as a variable.

fun1();
//print console statement inside output

fun2();
//print console statement inside output
