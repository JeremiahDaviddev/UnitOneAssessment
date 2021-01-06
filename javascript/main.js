document.addEventListener("DOMContentLoaded", () => {
    console.log ("Dom loaded hell yah!")
}) 

let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let input = document.querySelector(".input")
let totalPrint = document.querySelector(".total")
let equals =0


plus.addEventListener("click", () => {
    
    equals = Number(input.value) + Number(equals)
    
    totalPrint.innerHTML = Number(equals)
    // let lastSum = total + sum
    
   test()
    
    
   
})

minus.addEventListener("click", () =>  {

    equals =  Number(equals) - Number(input.value) 
    
    totalPrint.innerHTML = Number(equals)
    // let lastSum = total + sum
    

}) 


function test() {
// console.log (lastSum)
console.log (equals)
// console.log(totalSum)
console.log(input.value)
}

function updateSum() {
    let total = lastSum
}
