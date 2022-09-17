const addBtn=document.querySelector('#addBtn')
const inputField=document.querySelector('#inputField')
const mainRow=document.querySelector('#mainRow')
const eventsObj={}
const delIconArr=[]
// const delBtnArr=[]
let count=0


{/* <div class="col-md-10 bg-primary my-3 p-1" style="border-radius:0.375rem;">
<p style="display:inline;vertical-align:super;" class="mx-2">cycling</p>
<span id="delBtn"><i class="fas fa-trash fa-2x p-2" style="position:relative;left:435px;background-color: black;color:white;border-radius: 50%;"></i></span>
</div> */}

inputField.focus()

addBtn.addEventListener('click',()=>{
    count+=1
    const division=document.createElement('div') 

    // creating a division
    division.classList.add('col-md-10','bg-primary','my-3','p-3') //adding classes to div
    division.style.position='relative'
    division.style.borderRadius='0.375rem' //styling the div
    mainRow.appendChild(division) //appending the div

    const para=document.createElement('p') //creating para inside the div
    const val=inputField.value
    if (val !==null){
        console.log(inputField.value)
        para.textContent=inputField.value
    }
    para.classList.add('mx-2')
    para.style.display='inline'
    // para.style.verticalAlign='super'
    para.setAttribute('id','event')
    division.appendChild(para) //appending para to the div
    eventsObj[count]=para //appending event in the object
    console.log(eventsObj)

    const spanElem=document.createElement('span')
    // // spanElem.setAttribute('id','delIcon')
    // spanElem.classList.add(count)
    // console.log(spanElem.classList)
    // const icon=document.createElement('i')
    // // icon.classList.add(count)
    // icon.classList.add('fas','fa-trash','fa-2x','p-2')
    // icon.style.position='absolute'
    // icon.style.right='20px'
    // icon.style.backgroundColor='black'
    // icon.style.color='white'
    // icon.style.borderRadius='50%'
    // spanElem.appendChild(icon)
    spanElem.innerHTML = `<i class="fas fa-trash fa-2x p-2"></i>`
    division.appendChild(spanElem)
    console.log(spanElem.childNodes)
    for (elem of spanElem.childNodes)
    {
        elem.classList.add(count)
    }
    // console.log(icon.classList)
    delIconArr.push(spanElem)
    console.log(delIconArr)


    // const delBtn=document.createElement('button')
    // delBtn.classList.add(count,'btn','bg-dark')
    // delBtn.style.position='relative'
    // delBtn.style.left='435px'
    // delBtn.style.color='white'
    // delBtn.style.borderRadius='50%'
    // division.appendChild(delBtn)
    // const icon=document.createElement('i')
    // icon.classList.add('fas','fa-trash',"fa-2x",'p-2')
    // delBtn.appendChild(icon)
    // delBtnArr.push(delBtn)
    // console.log(delBtnArr)


    for (let delIcon of delIconArr){
        console.log(delIcon)
        delIcon.addEventListener('click',delEvent)
    }

    inputField.value=' '
    inputField.focus()
})
function delEvent(e){

    console.log(e.target)
    console.log(e.target.classList)
    // e.target.disabled=true
}