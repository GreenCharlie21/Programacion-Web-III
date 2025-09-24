//4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto.
function mmNum(a) {
    let nMay = [0];
    let nMen = [0];
    console.log("El arreglo",a,"tiene como Mayor y Menor:");
    for (let n of a) {
        if (n > nMay) {
            nMay = n;
        }
        if (n < nMen) {
            nMen = n;
        }
    }
    return {mayor: nMay,menor: nMen}
}
let numMM = mmNum([-2,7,-4,21,42,3])
console.log(numMM);