//1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el resultado en un objeto.
function contV(x) {
    console.log("La palabra",x,"tiene el siguiente número de vocales:");
    let voc = {
        a:0,
        e:0,
        i:0,
        o:0,
        u:0
    };
    for (let i of x){
        switch (i) {
            case "a": case "A":
                voc.a++
                break;
            case "e": case "E":
                voc.e++
                break;
            case "i": case "I":
                voc.i++
                break;
            case "o": case "O":
                voc.o++
                break;
            case "u": case "U":
                voc.u++
                break;
        }
    };

    return voc;
}
let cont1 = contV("Pikachu")
console.log(cont1);