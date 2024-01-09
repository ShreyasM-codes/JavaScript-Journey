const counterEl=doc.querySelector('counter')
const incrementBtn = doc.querySelector('#Increment')
const decrementBtn = doc.querySelector('#Decrement')

let counter=0
function incrementCounter(){
    counter++
    counterEl.innerText=counter
}
incrementBtn.addEventListener("click",incrementCounter)