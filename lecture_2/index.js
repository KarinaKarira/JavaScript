collection=[1,2,3,4,5]
for (let num of collection){
    console.log(num)
}

//functions
//declarative function
// function print(param1,param2){
//     console.log(`hi ${param1} ${param2}`);
//     return 4;
// }
// console.log(print(5))

// //expression function
// const square = function(){
//     return 2;
// }
// console.log(square())



// btn.addEventListener('click',sqaure)

// //anonymous function-->anonymous is not a type but a way 
//anonymous can be expression(we use keyword function) or arrow function(no keyword used here)
// btn.addEventListener('click',function(){
//     return 2;
// })


//arrow function(no need to give brackets for a single parameter)
// const square = () => {

// }

// const square = n => {
//     return n*n;
// }
const square = n => n*n
console.log(square(5))
// btn.addEventListener('click',() => 3)

const print = (fname,lname)=>`full name: ${fname} ${lname}`
    // console.log(`full name:${fname} ${lname}`)

// print('karina','karira')
console.log(print('karina','karira'))

const power = (base,pow) => base**pow
console.log(power(2,3))

a=2
b=3
//anonymous arrow function-->we need to call them explicitly using ()
console.log(((a=2,b=3) => a**b)())

//normal way
const lst=[1,2,3,4,5]
let total=0
for (let num of lst){
    total+=num
}
console.log(total)

//anonymous arrow function
console.log(((lst = [1,2,3,4,5]) => {
    let ans=0
    for (let x of lst){
        ans+=x
    }
    return ans
})())

//forEach is a function that runs on collections and takes a function as a parameter.It passes the element to the function one by one
rr=[1,2,3,4,5]
let sumsss=0
rr.forEach(elem => sumsss+=elem)
console.log(sumsss)

arr_of_str=['Python','Is','superfast']
// concatenated_str=''
// arr_of_str.forEach(elem => concatenated_str=concatenated_str+' '+elem)
// console.log(concatenated_str)
console.log(arr_of_str.join(' '))

function add(n){
    return n+n;
}
function square_(n){
    return n*n;
}
function cube(n,callback){
    return n*callback(n)
}
console.log(cube(3,add))
console.log(cube(4,square_))

function hello(){
    console.log('hello')
}
// setInterval(hello,1000) //declaration function
// setInterval(() => console.log('hello'),1000) //anonymous arrow function
// setInterval(function() { return console.log('hello')},1000) //anonymous expression function
// setTimeout(() => console.log('hello'),3000) //anonymous arrow function
//setTimeout is a function that prints after the specified time 3000ms i.e.3 seconds

// function checkScopes(){
//     let i=3
//     if(true){
//         // let j=5; 
//         var j=5;
//     }
//     console.log(j) //this will give an error (if j is defined with the help of let),because scope of let is block-wise while that of var is in the entire function 
// }
// checkScopes()

// function checkScopes(){
//     let i=3
//     if(true){
//         let i=8 //here new variable is created OVERWRITING is not done
//         console.log(i)
//     }
//     console.log(i)
// }
// checkScopes()


function checkScopes(){
    const i=7
    if(true){
        console.log(i)
    }
    // let i=8 //this line gives an error
    console.log(i)
}
checkScopes()
