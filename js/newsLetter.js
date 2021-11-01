/* Suscripcion a newsletter*/
$("#newsLetter").submit(suscribirse);

function suscribirse(e) {
    e.preventDefault();
    swal("¡Gracias por suscribirte a nuestro Newsletter!");
    $("#newsLetter").trigger("reset");
}