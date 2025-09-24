//5. Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés).
function pal(s) {
    let cad = s.length;
    console.log("La palabra",s,"es Palindromo?");
    for (let i = 0; i < cad / 2; i++) {
        if (s[i] !== s[cad - 1 - i]) {
            return false;
        }
    }
    return true;
}
let esPal = pal("oso")
console.log(esPal);
let esPal2 = pal("adios")
console.log(esPal2);