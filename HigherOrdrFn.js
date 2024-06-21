// function f1()
// {
//     console.log("I am known as call stack function")
// }

// function fun(f)
// {
//     console.log("I am known as Higher Order function")
//     f();
//     f1();
// }

// fun(f1);

// with the help of some circle numerical examples we easily understand the concept of higher order function.

const radius = [6,3,2,1,5]

/** 
 * 
 * This is the bad way of writing code because we breach the DRY Principle here.

function findArea(radius)
{
    const output = []
    for(let i=0;i<radius.length ; i++)
        {
            output.push(Math.PI * radius[i] * radius[i]);
        }
    return output;
}

function findCircumference(radius)
{
    const output = []
    for(let i=0;i<radius.length ; i++)
        {
            output.push(2* Math.PI * radius[i]);
        }
    return output;
}

function findDiameter(radius)
{
    const output = []
    for(let i=0;i<radius.length ; i++)
        {
            output.push(2 * radius[i]);
        }
    return output;
}


console.log(findArea(radius))
console.log(findCircumference(radius))
console.log(findDiameter(radius))

*/

// Here is some best way of writing these codes using higher-order function

const area = function(radius)
{
    return Math.PI * radius * radius;
}

const circumference = function(radius)
{
    return 2 * Math.PI * radius;
}

const diameter = function(radius)
{
    return 2 * radius;
}

const findCircle = function(radius,logic)
{
    const res = [];

    for(let i=0;i<radius.length;i++)
        {
            res.push(logic(radius[i]));           
        }

        return res;
}

console.log(findCircle(radius,area));
console.log(findCircle(radius,circumference))
console.log(findCircle(radius,diameter))