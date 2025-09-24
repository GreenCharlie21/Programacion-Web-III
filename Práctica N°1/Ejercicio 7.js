//7. Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros elementos de un arreglo, mediante desestructuración.
let arr7 = ["Lapiz",30,"Gnar",42,27,"Estuchera"]
let [,, ...sobra] = arr7;
console.log("El arreglo",arr7,"sin tomar en cuenta los dos primeros elementos es:",sobra);