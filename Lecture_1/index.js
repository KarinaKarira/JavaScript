// console.log('Hi')
let x=10
console.log(x)
let arr=[1,2,3,4,5]
console.log(arr)
arr[2]=50
console.log(arr)
// let arr2=[1,2,3,4,5]
let arr2=arr
console.log(arr2==arr)
// alert("karina")

let obj1={
    name:'ABC',
    rollno:12
}
console.log(obj1.name)
// let obj2={
//     name:'ABC',
//     rollno:12
// }
let obj2=obj1
console.log(obj1==obj2)

obj2.name='karina'
console.log(obj1,obj2)

let check="hello \"world\""
console.log(check)

// let a=2
// let b=3
// console.log(`The sum of ${a} and ${b} is ${a+b}`)
// console.log("the value "+a)

let a ="checking"
console.log(a.length)
console.log(a[0])


let abc='5'
// let abcInt=parseInt(abc)
// console.log(abcInt,typeof abcInt)

// let abcInt=Number(abc)
// console.log(abcInt,typeof abcInt)
let abcInt= + abc
console.log(abcInt,typeof abcInt)

// let blog=select * from blogs where id=3
// if(blog){
//     (blog.name)
// }

//blog?.name -->new method of defining if(blog) exists then console name
//blog hai toh hi uska name le kr aao
//if blog is not null print its name

//== !=
//=== !==

//ternary operator
5>3?console.log('yes'):console.log('no')
//mull colaecing operator

