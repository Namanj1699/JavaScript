//map - we use map for transform the array.

const arr = [3,2,4,5];

function double(x)
{
    return x * 2;
}

const m = arr.map(double);

const m1 = arr.map(x => x * 2);

console.log(m1);

// ************************************************************************************************************

//filter - for filterout things inside array which canbe a list/object or anything!!!!

const f = arr.filter(x => x<3)

console.log(f)

// ************************************************************************************************************

//reduce - opertions where we have find a single element like (Max No in list/sum of array/Min and according to the situtaion..)

//for finding sum of elements
const r = arr.reduce((acc,curr)=>{
    acc = acc + curr;

    return acc;
},0)

//for finding max element in the array
const r1 = arr.reduce((acc,curr)=>{
    if(curr>acc)
        {
            acc = curr
        }

    return acc;
},0)

// for finding min element in the array

const r2 = arr.reduce((acc,curr)=>{
    if(acc>curr)
        {
            acc= curr;
        }

        return acc;
},arr[0])

console.log(r2)




