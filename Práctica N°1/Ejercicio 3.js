//3. Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares e impares.
function devPI(a) {
    let par = [];
    let impar = [];
    console.log("El arreglo",a,"devuelve:");
    
    for (let n of a) {
        if (n % 2 == 0) {
            par[par.length] = n;
        } else {
            impar[impar.length] = n;
        }
    }
    return { pares: par, impares: impar };
}
let pI = devPI([1,2,3,4,5]) 
console.log(pI);