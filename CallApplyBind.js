// "use strict"

console.log("call apply bind");

// console.log(this) //this will return window object in non-strict mode

function fun()
{
    console.log(this);
}

fun();

//In non-strict mode function fun will return window object and in strict mode it will return 'undefined'


const obj1 = {
    name : "naman",
    age : 25,

    obj1fun : function(a,b)
    {
        console.log(a+b,this)       
    }
}

const obj2 = {
    name : "deepak",
    age : 28,

    obj2fun : function(a,b)
    {
        console.log(a+b,this)       
    }
}

const newobj = obj1.obj1fun;

newobj(); //return window object (Non-Strict Mode)
//return undefined in strict mode

obj1.obj1fun.call(obj2,2,4); // now it will refer to object2

obj2.obj2fun.apply(obj1,[4,8]); // it will refer to obj1

// the main diff bw call and apply is just minimal syntax change we passed arguments in array format.


// bind -- refers to binding the value at creation time when using arrow function

console.log("new new new new");


let obj3 = {
    name : "abc",
    age : 11,
    value : 28,
    
    obj3fun : function(){
        console.log(this.value)
        setTimeout(function(){
            console.log("obj3fun internal "+this.value)
        },1000)
    },

    obj3fun_arrow : function()
    {
        setTimeout(()=>{
            console.log("obj3fun arrow internal "+this.value);
        },1000)
    }
}

// Async callback get executed wrt Global Object (Crush)

obj3.obj3fun();

// At the creation time arrow function bind with the husband (not crush :: if not understand go watch YT video of chirag goel)
obj3.obj3fun_arrow();