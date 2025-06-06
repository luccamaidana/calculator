let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);



const display = document.getElementById('display')
const buttons = document.querySelectorAll('#buttonBox button')

const div = (n1,n2)=>{
    if(n2 === 0) { 
        return display.value = 'Math Error'
    }
    else if(n1 % n2 === 0){
        return n1 / n2
    }
    else {
        return (n1 / n2).toFixed(2)
    }
}

const operate = (num1,num2,oper)=>{
    switch (oper) {
        case "+":
            return num1 + num2
            break;
        case "-":
            return num1 - num2       
            break;
        case "*":
            return num1 * num2        
            break;
        case "/":
            return div(num1,num2)            
            break;    
    }
}

const validate = (e) => {
    if (e.startsWith('+') || e.startsWith('-') || e.startsWith('*') || e.startsWith('/')) {
        del(e)
        return ''
    }
    else return e
}

const separate = (exp) => {
    let n1 = ''
    let n2 = ''
    let op = null

    exp = validate(exp)

    for(let char of exp){
        if('+-/*'.includes(char)){
            op = char
        }
        else if(op === null){
            n1 += char
        }
        else {
            n2 += char
        }
    }
    
    return {n1, n2, op}
}

const displays = (btn)=>{
    if(btn == '*'){
        display.value += '×'
    }
    else if(btn == '/'){
        display.value += '÷'
    }
    else display.value += btn
        
}

const clearDisplay = ()=>{
    display.value = ''

}

const equals = (a,b,op)=>{

    let {n1, n2} = parseToNumber(a,b) 
    let res = operate(n1,n2,op)
    res = formatToString(res)
    n1 = res
    n2 = ''
    op = null

    clearDisplay()
    displays(n1)    
    return {n1,n2,op}
}

const del = (a) =>{
    display.value = display.value.slice(0,-1)
    return a.slice(0,-1)
}

const parseToNumber = (a,b)=>{
    let n1 = parseFloat(a)
    let n2 = parseFloat(b)
    return {n1, n2}
}

const formatToString = (a)=>{
    return `${a}`
}

const calculator = () =>{

    let exp = ''

    buttons.forEach(button =>{
        button.addEventListener('click', ()=>{

            exp += button.value
            displays(button.value)
            console.log(exp);

            let {n1,n2,op} = separate(exp)

            switch (button.id) {
                case 'clear':
                    clearDisplay()
                    exp = ''
                    n1 = ''
                    n2 = ''
                    op = null
                    break;
                case 'equals':
                    if(n1 !== '' && n2 !== '' && op !== null){
                        ({n1,n2,op}=equals(n1,n2,op))
                        exp = n1
                    }
                    break;
                case 'del':
                    exp = del(exp)
                    break;
            }
        })
    })
}


calculator()