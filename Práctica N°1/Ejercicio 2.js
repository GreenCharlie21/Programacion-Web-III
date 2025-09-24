//2. Crear una función que invierta el orden de las palabras en una frase.
function invOrden(x) {
    console.log("La palabra",x,"invetida es:");
    let res="";
    for (let i = x.length-1; i >= 0; i--){
    res=res+x[i];
    }
    return res
}
let inv = invOrden("abcd")
console.log(inv);