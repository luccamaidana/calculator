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
            return add(n1,n2)
            break;
        case "-":
            return sub(n1,n2)        
            break;
        case "*":
            return mult(n1,n2)        
            break;
        case "/":
            return div(n1,n2)            
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
            else{
                display.value += button.value
                
                if(n1 != "" && op != null)
                    n2 += `${parseInt(button.value)}`
                else if(op === null && button.value != "*" && button.value != "/" && button.value != "+" && button.value != "-")
                    n1 += `${parseInt(button.value)}`
                else if((button.value == "*" || button.value == "/" ||button.value == "+" ||button.value == "-"))
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

/* console.log(operate(5,0,'/')); */
