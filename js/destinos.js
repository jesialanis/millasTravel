let arrayViajes = [];
class Destino {

    constructor(id, nombre, precio, descripcion, imagen, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.cantidad = cantidad;

    }

};
const URLGET = "datos/destinos.json"
$.getJSON(URLGET, function (respuesta, estado) {
    let destinos = respuesta;

    if (estado === "success") {
        for (const destino of destinos) {
            arrayViajes.push(new Destino(destino.id, destino.nombre, destino.precio, destino.descripcion, destino.imagen, destino.cantidad));
        }
    }
})

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        for (let i = 0; i < arrayViajes.length; i++) {

            $("#contenedor-productos").append(`<div class="card" style="width: 18em;">
                                                    <img class="card-img-top" src="${arrayViajes[i].imagen}" alt="Card image cap">
                                                    <div class="card-body">
                                                        <h3>  ${arrayViajes[i].nombre} </h3>
                                                        <div class= texto-card>
                                                        <p> ${arrayViajes[i].descripcion} </p>
                                                        <p> $     ${arrayViajes[i].precio} </p>
                                                        </div>
                                                    </div>
                                                    <div class="contenedorBoton">
                                                    <button id=boton${arrayViajes[i].id} onclick="agregarAlCarrito(${arrayViajes[i].id})" type="button" class="botonComprar" > <i class="fas fa-plane"></i>
                                                    </button>
                                                    </div>
                                                </div>`);
        };
    }
    xhttp.open("GET", "datos/destinos.json", true);
    xhttp.send();
}
loadDoc();