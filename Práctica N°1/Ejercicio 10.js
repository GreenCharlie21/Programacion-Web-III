//10. ¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una promesa?

//Callback
//Conveniente cuando tienes una sola operación asincrónica simple que necesita ejecutarse después de otra.
//Ideal para acciones rápidas o locales, como mostrar un mensaje, leer un archivo pequeño, o ejecutar una función después de un evento.
//Desventaja: si hay muchas operaciones encadenadas, el código puede volverse confuso (“callback hell”).

//Promesa
//Necesaria cuando manejas operaciones asincrónicas que pueden tardar o fallar, y quieres encadenarlas de forma clara.
//Ideal para peticiones a APIs, lectura de archivos grandes, bases de datos, temporizadores largos, o cuando quieres manejar errores con .catch().
//Permite usar async/await para que el código sea más limpio y fácil de mantener.