
let counter = localStorage.getItem(`counter`) ? Number(localStorage.getItem(`counter`)) : 0;
let counterDomElement = document.querySelector(`#counter`);
let decreaseDomElement = document.querySelector(`#decrease`);
let increaseDomElement = document.querySelector(`#increase`);

counterDomElement.innerHTML = counter;
increaseDomElement.addEventListener("click", clickEvent);
decreaseDomElement.addEventListener("click", clickEvent);
function clickEvent() {
    this.id == "decrease" ?  counter -= 1 : counter += 1
    localStorage.setItem('counter', counter)
    counterDomElement.innerHTML = counter
}




// const clickEvent = () => {
//     console.log(`Counter type = `, typeof (counter))
//     console.log(this.id);
//     this.id == `decrease` ? console.log(`-1`) : console.log(`+1`);
//     localStorage.setItem(`counter`, counter);
//     counterDomElement.innerHTML = counter;
// }

