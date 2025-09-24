//15. Proporcione un ejemplo para convertir un callback en una promesa
//Ejemplo de callback
function sumCall(a, b, callback) {
    setTimeout(() => {
        let res15 = a + b;
        callback(res15);
    }, 1000);
}
sumCall(5, 7, resultado => {
    console.log("Resultado con callback:", resultado,"(15)");
});
//Lo convertimos a una promesa
function sumProm15(a, b) {
    let promesa15a = new Promise((resolve) => {
        sumCall(a, b, resultado => {
            resolve(resultado)
        });
    });
    return promesa15a;
}
let promesa15b = sumProm15(5, 7);
promesa15b.then(resultado => {
    console.log("Resultado con promesa:", resultado,"(15)");
});