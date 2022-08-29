// const btn=document.querySelector('button')

const response=fetch('https://jsonplaceholder.typicode.com/posts')
console.log(response)
result=response.then((response)=>response.json()).then((records)=>{

    for (record of records){
        const elem=document.createElement('p')
        document.body.append(elem)
        elem.textContent=record.userId
        elem.textContent+=' '+record.id
        elem.textContent+=' '+record.title
        elem.textContent+=' '+record.body
    }
    // console.log(records)
})