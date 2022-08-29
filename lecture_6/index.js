const start=document.querySelector('#start')
function startRequest(){
    const xhr=new XMLHttpRequest();
    xhr.addEventListener("loadend",()=>{
        console.log('ended with first request')
        const xhr2=new XMLHttpRequest();
        xhr2.addEventListener('loadend',()=>{
            console.log('ended with last request')
        })
        xhr2.open('GET','https://ipinfo.io/161.185.160.93/geo');
        xhr2.send();
        console.log('started with second request')
    });
    xhr.open('GET','https://catfact.ninja/fact')
    xhr.send()
    console.log('started with the first request')
}
start.addEventListener('click',startRequest)

//promises
//only fetch function returns a promise of response
const promiseResponse = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.js')
console.log(promiseResponse)

// promiseResponse.then((response)=>{
//     console.log(promiseResponse)
//     console.log(response)
//     response.json().then((res)=>console.log(res))
//     //.json() is a method of class Response that is used to decode the data and get meaningful data
//     //.json method returns a promise again i.e. it will have state and result now result is of type Object(dict in javascript which is readable)
// })

//PROMISE CHAINING
promiseResponse
    .then((response)=>{
        //ok is a property of response class.If we have an error the value of ok is false
        //since fetch() wala 404 and 500 error code par khud nahi jata catch mein we need to manuaaly check it using the ok property as done below
        if(!response.ok){
             throw new Error(`HTTP error: ${response.status}`);
        }
        // throw new Error(`HTTP error: ${response.status}`);
    }
    )
    .then((res)=>console.log(res))
    .catch((error)=>console.log('ERROR KARINA',error));


function returnPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(5),4000)
    })
}
const obj=returnPromise()
console.log(obj)
obj.then((result)=>console.log(result))
console.log(obj)