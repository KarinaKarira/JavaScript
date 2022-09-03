// const addBtn=document.querySelector('#addEvent')

// addBtn.addEventListener('click',addTask)
// function addTask(){
//     const taskContent=document.createElement('input')
//     document.body.append(taskContent)

//     taskContent.classList.add('input-group')
//     taskContent.classList.add('my-3')
//     taskContent.style.marginLeft='120px'
//     taskContent.style.width='20%'
//     taskContent.style.borderBlock='black'
//     taskContent.setAttribute('id','taskContent')

//     const addLink=document.createElement('a')
//     addLink.textContent='Add'
//     document.body.append(addLink)
//     addLink.classList.add('btn')
//     addLink.classList.add('btn-warning')
//     addLink.setAttribute('id','addNewEvent')
//     addLink.style.marginLeft='120px'
//     const addNewEventBtn = document.querySelector('#addNewEvent')
//     addNewEventBtn.addEventListener('click',addEventFunc)

// }
// function addEventFunc(){

//     const taskDesc=document.querySelector('#taskContent')
//     const content=taskDesc.value
//     console.log(content)

//     document.body.removeChild(document.querySelector('#addNewEvent'))
//     document.body.removeChild(taskDesc)

//     const elem=document.createElement('p')
//     elem.textContent=content
//     document.body.append(elem)
//     elem.style.marginLeft='120px'
//     elem.style.marginTop='20px'
//     elem.setAttribute('id','paraContent')

//     const delTask=document.createElement('a')
//     delTask.textContent='Done'
//     document.body.append(delTask)
//     delTask.classList.add('btn')
//     delTask.classList.add('btn-warning')
//     delTask.setAttribute('id','delBtn')
//     delTask.style.marginLeft='120px'

//     delTask.addEventListener('click',delEventFunc)
// }
// function delEventFunc(){
//     // console.log('delete button called')
//     const para=document.querySelector('#paraContent')
//     para.classList.add('done')
// }
let count=0
let delBtnArr=[]
let eventsObj={}
const addEventInput=document.querySelector('#eventInput')
const addBtn=document.querySelector('#addBtn')
// const para=document.querySelector('#event')
// const delPara=document.querySelector('#delPara')
const row=document.querySelector('#mainRow')
addEventInput.focus()
addBtn.addEventListener('click',()=>{
    count+=1
   const para=document.createElement('p')
   para.textContent=addEventInput.value
   para.classList.add('col-md-2')
   para.classList.add('col-2')
   row.appendChild(para)

   const delPara=document.createElement('p')
   delPara.classList.add('col-md-10')
   delPara.classList.add('col-10')
   row.appendChild(delPara)
   const btn=document.createElement('button')
   btn.classList.add(count)
   btn.classList.add('btn')
   btn.classList.add('btn-danger')
   btn.textContent='delete'
   delPara.appendChild(btn)

   delBtnArr.push(btn)
   console.log(delBtnArr)
   eventsObj[count]=para
   console.log(eventsObj)

   addEventInput.value=''
   addEventInput.focus()

    for(let delButton of delBtnArr){
        console.log(delButton.classList)
        delButton.addEventListener('click',delEvent)
    }
})
function delEvent(e){
    let classes=e.target.classList
    console.log(classes)
    let idBtnClicked=classes[0]
    console.log(idBtnClicked)
    let eventSelected=eventsObj[Number(idBtnClicked)]
    eventSelected.classList.add('done')
    console.log('delete clicked')
    e.target.disabled=true
}








