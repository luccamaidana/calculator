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
        return (n1 / n2).toFixed(4)
}

/* let n1 = Number
let n2 = Number
let oper = String */

const operate = (num1,num2,oper)=>{
    switch (oper) {
        case "+":
            return add(num1,num2)
            break;
        case "-":
            return sub(num1,num2)        
            break;
        case "*":
            return mult(num1,num2)        
            break;
        case "/":
            return div(num1,num2)            
            break;    
    }
}

const calculator = () =>{
    const display = document.getElementById('display')
    const buttons = document.querySelectorAll('#buttonBox button')
    
    n1 = ""
    n2 = ""
    op = null

    buttons.forEach(button =>{
        button.addEventListener('click', ()=>{
            if(button.id === 'clear'){
                display.value = ''
                n1 = ""
                n2 = ""
                op = null
            }
            else if (button.id === 'equals'){
                display.value = operate(parseInt(n1),parseInt(n2),op)
            } else if (button.id === 'del') {
                display.value = display.value.slice(0, -1);
                if (op === null) {
                    n1 = n1.slice(0, -1);
                } else {
                    n2 = n2.slice(0, -1);
                } }
            else {
                display.value += button.value
                
                if(n1 != "" && op != null)
                    n2 += parseInt(button.value)
                else if(op === null && button.value != "*" && button.value != "/" && button.value != "+" && button.value != "-")
                    n1 += parseInt(button.value)
                else if(button.value == "*" || button.value == "/" || button.value == "+" || button.value == "-")
                    op = button.value
            }                
        })
    })
}

calculator()

/* console.log(add(5,5))
console.log(sub(15,10))
console.log(mult(10,10))
console.log(div(10,5)) */
a = 10
b = 10
c = "+"
console.log(operate(a,b,c));
