/*FORMULARIO*/
$("#contactForm").submit(enviar);
let formulario = [];
const URLPOST   = "https://jsonplaceholder.typicode.com/posts"


function enviar(e) {
    e.preventDefault();
    /*capturando valores del input*/
    let nombre= $("#name").val();
    let email = $("#email").val();
    let celular = $("#phone").val();
    let mensaje = $("#message").val();

    console.log(nombre);
    console.log(email);
    console.log(celular);
    console.log(mensaje);

    let contacto = {
        nombre,
        email,
        celular,
        mensaje
    }

    if (localStorage.getItem('contacto') === null) {
        formulario.push(contacto)
        localStorage.setItem('contacto', JSON.stringify(formulario));
    } else {
        let contacto = JSON.parse(localStorage.getItem('contacto'));
        formulario.push(contacto)
        localStorage.setItem('contacto', JSON.stringify(formulario));
    };
    
    $.post(URLPOST, formulario ,(respuesta, estado) => {
        if(estado === "success"){
            alert("Tu consulta se ha enviado correctamente");
     };
    });
    

    $("#contactForm").trigger("reset");
}

