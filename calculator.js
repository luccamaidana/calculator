const add = (n1,n2)=>{
    return n1 + n2
}

const sub = (n1,n2)=>{
    return n1 - n2
}

const mult = (n1,n2)=>{
    return n1 * n2
}

const div = (n1,n2)=>{
    if(n2 === 0)
        console.log("ERROR YOU CAN NOT DIVIDE BY 0")
    else
        return n1 / n2
}

/* let n1 = Number
let n2 = Number
let oper = String */

const operate = (n1,n2,oper)=>{
    switch (oper) {
        case "+":
            add(n1,n2)
            break;
        case "-":
            sub(n1,n2)        
            break;
        case "*":
            mult(n1,n2)        
            break;
        case "/":
            div(n1,n2)            
            break;    
    }
}

const display = document.getElementById('display')
const buttons = document.querySelectorAll('#buttonBox button')

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(button.id === 'clear')
            display.value = ''
        else if(button.value >= 0 && button.value <= 9)
            display.value += button.value
        else{
            let n1 = button.value
            let oper = button.value
            let n2 = button.value
            /* display.value += button.value */
        }

            
    })
})

/* console.log(add(5,5))
console.log(sub(15,10))
console.log(mult(10,10))
console.log(div(10,5)) */

console.log(operate(1,1,'+'));
