// let x=10_536
// // let a=9,b=0
// console.log(x)
// // function returnTest(){
// //     return [1,2];
// // }
// // returnValue=returnTest()
// // console.log(a,b)
// function checkPrime(n){
//     let flag=true;
//     if (n==1){
//         flag=false;
//     }
//     else{
//         let i=2
//         while(i<n){
//             if(n%i===0){
//                 flag=false
//                 break
//             }
//             i+=1
//         }
//     }
//     return flag
// }
// console.log(checkPrime(5))
// function printLoop(){
//     let i;
//     for(i=1;i<=5;i++){
//         console.log(i)
//     }
// }
// printLoop()

const fetchBtn=document.querySelector('button')
function fetchCatFact(callback){
    const xhr=new XMLHttpRequest();
    xhr.addEventListener('loadend',()=>console.log('data fetched'));
    xhr.open("GET","https://catfact.ninja/fact");
    xhr.send();
    callback();
}

function fetchIPInfo(callback){
    const xhr=new XMLHttpRequest();
    xhr.addEventListener('loadend',()=>console.log('data fetched'));
    xhr.open("GET","https://ipinfo.io/161.185.160.93/geo");
    xhr.send();
    callback();
}

function fetchData(){
            fetchCatFact(()=>{
                console.log('catFactData fetched');
                fetchIPInfo(()=>{
                    console.log('IpInfo fetched');
        })
})
}
// fetchData()
fetchBtn.addEventListener('click',()=>{
    fetchData()
    // console.log('hi')
    // fetchCatFact()
    // console.log('button clicked')
})
