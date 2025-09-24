//16. Proporcione un ejemplo para migrar una función con promesas a async/await
//Ejemplo funcion con promesas
function sumProm16(a, b) {
    let promesa16a = new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000);
    });
    return promesa16a;
}
let promesa16b = sumProm16(5, 7);
promesa16b.then(resultado => {
    console.log("Resultado con promesa:", resultado,"(16)");
});
//Migramos a async/await
async function sumaAsync(a, b) {
    let promesa16 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000);
    });

    let resultado = await promesa16;
    console.log("Resultado con async/await:", resultado,"(16)");
}
sumaAsync(5, 7);