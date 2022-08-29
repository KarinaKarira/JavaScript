const subBtn=document.querySelector('#subBtn')
const inputField=document.querySelector('input')
const resCard=document.querySelector('#resCard')
let result=document.querySelector('.result')

subBtn.addEventListener('click',()=>{
    const inputValue=inputField.value;
    console.log(inputValue);
    result.textContent=`Prime numbers till ${inputValue} are:`
    printPrimeNos(inputValue);
}
)
// result.textContent=`prime numbers till ${inputValue} are:`
function printPrimeNos(num){
    let i=1;
    for(i=1;i<=num;i++){
        res=checkPrime(i)
        // console.log(res)
        if (res){
            result.textContent=result.textContent+' '+i
        }
    }
}
function checkPrime(n){
    let flag=true;
    if (n==1){
        flag=false;
    }
    else{
        let i=2
        while(i<n){
            if(n%i===0){
                flag=false
                break
            }
            i+=1
        }
    }
    return flag;
}
