const inputField=document.querySelector('input')
const subBtn=document.querySelector('button')
const reqBtn=document.querySelector('#xhr')

// subBtn.addEventListener('click',()=>{
//     num=inputField.value
//     calculateFact(num)
// })
// function calculateFact(num){
//     let i=1;
//     let fact=1;
//     console.log('factorial is')
//     for(i=1;i<=num;i++){
//         fact=fact*i;
//     }
//     console.log(fact)
// }
// setTimeout(()=>{console.log('hi')},4000) //example of asynchronous application,the below lines are executed and after 4 seconds hi is printed
// console.log('hello')
// console.log(Number.MAX_VALUE)

reqBtn.addEventListener('click',()=>
{
    const xhr=new XMLHttpRequest();
// we can add event to XMLHttpRequest object that's the beauty here,loadend is the event of loading first and then doing the task later
    xhr.addEventListener('loadend',()=> 
    console.log('ended request with status',xhr.status));
    xhr.open("GET","https://api.publicapis.org/categories"); //open sets the environment with request and all
    xhr.send(); //send() is a method that actually sends it
    console.log('started with the request'); //this may get printed first if loading of data from API takes time
}
)
function fetchUser(result,callback){
    result+=1;
    callback(result);
}
function fetchSupervisor(result,callback){
    result+=2;
    callback(result);
}
function fetchProfile(result,callback){
    result+=3;
    callback(result)
}
//this is called a callback hell/pyramid of doom where multiple callbacks are called,not a good idea
function callOperation(){
    fetchUser(1,(result)=>{
        fetchSupervisor(result,(result)=>{
            fetchProfile(result,(result)=>{
                console.log(result)
            })
        })
    })
}
// callOperation()