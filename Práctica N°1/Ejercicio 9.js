//9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.
let promesa9 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Exito en 3 seg. (9)")
    }, 3000);
})
promesa9.then((msj) => {
    console.log(msj);
});