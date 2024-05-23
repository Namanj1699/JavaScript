// closure is a combination of function along with it's lexical environment wrap/bundled together forms a closure

// Example - 1

function outer() {
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}

// Example - 2

// function outest(){

//     function outer() {
//         var a=10;
//         function inner(){
//             console.log(a);
//         }
//         return inner;
//     }
//     return outer;    
// }

// Example - 3 Data hiding & encapsulation (popular feature of closure)

// function counter (){
//     let count = 6;

//     this.decrement = function()
//     {
//         count--;
//         console.log(count);
//     }

//     this.increment = function()
//     {
//         count++;
//         console.log(count);
//     }

//    // return increment;
// }


const t = outer();  // outest()()(); --> For ex-2
t();        // or outer()(); both works same


// var c = new counter();
// c.increment();
// c.increment();

// c.decrement();



// Imp : Disadvantages of closures

// * Over- Consumption of Memory because variables form closures isn't garbage collected
// * If not handled properly can cause Memory leaks


// garbage collector - it is a programme which freeze up the unutilized memory.
