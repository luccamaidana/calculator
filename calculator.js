add = (n1,n2)=>{
    return n1 + n2
}

sub = (n1,n2)=>{
    return n1 - n2
}

mult = (n1,n2)=>{
    return n1 * n2
}

div = (n1,n2)=>{
    if(n2 === 0)
        console.log("ERROR YOU CAN NOT DIVIDE BY 0")
    else
        return n1 / n2
}


console.log(add(5,5))
console.log(sub(15,10))
console.log(mult(10,10))
console.log(div(10,5))

