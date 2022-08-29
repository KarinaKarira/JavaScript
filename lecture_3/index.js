// console.log('hi')

//FETCHING MULTIPLE ELEMENTS
// const headingsTN=document.getElementsByTagName('h1');
// console.log(headingsTN)

// //below gives an error because getElementsByTagName returns a HTMLCollection that is not iterable,so we need to first convert it into array using Array.from()
// // headingsTN.forEach(elem => {
// //     console.log(elem)
// // });

// Array.from(headingsTN).forEach(elem => {
//     console.log(elem)
// });

// const headingsCN=document.getElementsByClassName('title')
// Array.from(headingsCN).forEach(element => {
//     console.log(element)
// })

// //there is no method as getElementsById,getElementByClassName,getElementByTagName

//FETCHING SINGLE ELEMENT THAT IS ONLY POSSIBLE WITH THE HELP OF ID.
// const elemT=document.getElementById('first-title')
// console.log(elemT)

// //querySelector returns a NodeList which can be iterated with the help of forEach function
// const elemCN=document.querySelector('.title')
// console.log(elemCN)

// const elemID=document.querySelector('#first-title')
// console.log(elemID)

//querySelector fetches the first element that matches the parameter.If we want all the elements in return we use querySelectorAll
// const elemTag=document.querySelector('h1')
// console.log(elemTag)

// const elemsClass=document.querySelectorAll('.title')
// console.log(elemsClass)

// elemsClass.forEach(val => console.log(val))


// //we can get any attribute using element.attribute.For class attirbute we need to access it using 'className'
// //setTimeOut function is used just to differentiate,there wasn't any need of it
//But this method overwrites the classes,if we want to preserve the previous ones too we use classList.add()
// const ft = document.querySelector('#first-title')
// console.log(ft.classList)
// setTimeout(() => {ft.className='red',console.log(ft.classList)},4000)

// //setAttribute is a function used when we don't know the attribute given to the element ans we want to change it
// const elemstn = document.querySelectorAll('h1')
// elemstn[3].setAttribute('id','fourth-title')
// elemstn[3].setAttribute('class','title')

// //agar class ko override nahi but add karna hai toh we do it with classList
// elemstn[3].classList.add('red')
// //remove bhi ho skta hai


// //dynamically content ko add karma 
// //textContent is a property which takes only TEXT
// // setTimeout(()=>{elemstn[3].textContent='helllloooo'},4000)
// //textContent mein HTML parse nahi hoga

// //innerHTML mein HTML CODE parse ho skta hai(put the code preferrably in backticks)
// setTimeout(()=>{elemstn[3].innerHTML=`<i>helllooo</i>`},4000)

// //body ko hum document.querySelector se bhi access kar skte hai but hume direct access hota hai body ka as in document.body
// setTimeout(()=>{document.body.innerHTML=``},8000)

// //EVENTS
// const clickbtn=document.querySelector('.clickbtn')
// clickbtn.addEventListener('click',(e)=>{
//     // const elemstn = document.querySelectorAll('h1')
//     // elemstn[3].innerHTML=`<i>helllooo</i>`
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.textContent)
// })

// clickbtn.addEventListener('dblclick',(e)=>{
//     // const elemstn = document.querySelectorAll('h1')
//     // elemstn[3].innerHTML=`<i>helllooo</i>`
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.textContent)
// })


// mouseenter gives 
// clickbtn.addEventListener('mouseenter',(e)=>{
//     // const elemstn = document.querySelectorAll('h1')
//     // elemstn[3].innerHTML=`<i>helllooo</i>`
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.textContent)
// })

// const ip=document.querySelector('#name')
// clickbtn.addEventListener('click',()=>{
//     console.log(ip.value)
// })

const ip=document.querySelector('#name')
// ip.addEventListener('input',(e)=>{
//     const para=document.querySelector('#para')
//     para.innerHTML=e.target.value
// })
ip.addEventListener('change',(e)=>{
    const para=document.querySelector('#para')
    para.innerHTML=e.target.value
})