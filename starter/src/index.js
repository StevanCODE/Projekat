// nav


const navSel = document.getElementById("nav")
navSel.innerText = "Dostupan budzet u Avgustu 2020:"
const navPar = document.createElement("p")
navSel.appendChild(navPar)

const divSel = document.getElementById("div1")
const p1 = document.createElement("p")
p1.innerText = "Prihod: "
const p2 = document.createElement("p")
p2.innerText = "Rashod: "
divSel.append(p1,p2)
const input1 = document.getElementById("input1")
input1
const input2 = document.getElementById("input2")
const select = document.getElementById("select")
let prihod = 0
let rashod = 0
let prihodList = []
let rashodList = []
let space = "\xa0".repeat(40)
let budzet = prihod - rashod
navPar.innerText = budzet
navPar.id = "navPar"



// Donja lista

const div2 = document.getElementById("div2")
const p3 = document.createElement("p")
div2.appendChild(p3)

const div3 = document.getElementById("div3")
const p4 = document.createElement("p")
div3.appendChild(p4)
p1.id = "prihod"
p2.id = "rashod"
p3.id = "prihod1"
p4.id = "rashod1"



// Button 
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click",el =>{
    el.preventDefault()
    if(select.value === "prihod" && parseInt(input2.value) > 0 && input1.value != ""){
        prihod += parseInt(input2.value)
        p1.innerText = `Prihod: + ${prihod} RSD`
        console.log(`Prihod :${prihod}`)
        prihodList.push((`${input1.value} ${space} +${input2.value} \n`))
        
        p3.innerText = `${prihodList.join("")} \n`
        budzet = prihod - rashod
        if(budzet >= 0){
            navPar.innerText = `+ ${budzet}`
        }
        else if(budzet < 0){
            navPar.innerText = `${budzet}`
        }

    }
    else if (select.value === "prihod" || parseInt(input2.value) <= 0 || input1.value == ""){
        p3.innerText = "Polja ne smeju biti prazna,  Iznos mora biti pozitivan"
    }
    else if(select.value === "rashod" && parseInt(input2.value) > 0 && input1.value != ""){
        rashod += parseInt(input2.value)
        
        console.log(`Rashod: ${rashod}`)
        if(prihod != 0){
            let procenat = (rashod/prihod*100).toFixed(1)
            rashodList.push((`${input1.value}  ${space} - ${input2.value} \xa0\xa0 ${procenat}% \n`))
            p2.innerText = `Rashod: - ${rashod} RSD ${procenat}%`
        }
        else if(prihod == 0){
            rashodList.push((`${input1.value}  ${space} - ${input2.value}\n`))
            p2.innerText = `Rashod: - ${rashod} RSD`
        }
        p4.innerText = rashodList.join("")
        budzet = prihod - rashod
        if(budzet >= 0){
            navPar.innerText = `+ ${budzet}`
        }
        else if(budzet < 0){
            navPar.innerText = `${budzet}`
        }
        
        
    }
    else if (select.value === "rashod" || parseInt(input2.value) <= 0 || input1.value == ""){
        p4.innerText = "Polja ne smeju biti prazna, Iznos mora biti pozitivan"
    }

})


const rmvBtn = document.createElement("button")
rmvBtn.id = "rmvBtn"
rmvBtn.innerText = "X"

const rmvBtn2 = document.createElement("button")
rmvBtn2.id = "rmvBtn2"
rmvBtn2.innerText = "X"





p3.addEventListener("mouseover",el=>{
    el
    console.log("m")
    p3.appendChild(rmvBtn)
    
})
p3.addEventListener("mouseout",el=>{
    el
    if(p3.firstChild){
        setTimeout(() =>{
            p3.removeChild(rmvBtn)
        },2000)
    }

})

p4.addEventListener("mouseover",el=>{
    el
    console.log("m")
    p4.appendChild(rmvBtn2)
    
})
p4.addEventListener("mouseout",el=>{
    el
    if(p4.firstChild){
        setTimeout(() =>{
            p4.removeChild(rmvBtn2)
        },2000)
    }



})

rmvBtn.addEventListener("click",()=>{
    let novac = prihodList.pop()
    p3.innerText = prihodList.join("")

})



rmvBtn2.addEventListener("click",()=>{
    rashodList.pop()
    p4.innerText = rashodList.join("")
})

