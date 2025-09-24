//14. Proporcione un ejemplo para convertir una promesa en un callback.
//Ejemplo de promesa
let promesa14 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5 + 7)
    }, 1000);
});
//Lo convertimos en un callback
function funProm14(callback) {
    promesa14.then(resultado => {
        callback(resultado)
    });
}
funProm14(resultado => {
    console.log("Convetido a callback", resultado,"(14)"); 
});