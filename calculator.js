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
    if(n2 === 0) { 
        return display.value = 'Math Error'
    }
    else
        return parseFloat(n1 / n2).toFixed(2)
}

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
                display.value = operate(parseFloat(n1),parseFloat(n2),op)
                n1 = parseFloat(display.value)
                op = null
                n2 = ""
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
                    n2 += parseFloat(button.value)
                else if(op === null && button.value != "*" && button.value != "/" && button.value != "+" && button.value != "-")
                    n1 += parseFloat(button.value)
                else if(button.value == "*" || button.value == "/" || button.value == "+" || button.value == "-")
                    op = button.value
            }                
        })
    })
}


calculator()