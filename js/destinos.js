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

/* Defino objetos*/
arrayViajes.push(new Destino(1, "Buenos Aires", 9500, "Solo ida", "/assets/img/buenos-aires.jpg", 1));
arrayViajes.push(new Destino(2, "Bariloche", 12000, "Vuelo ida y vuelta", "/assets/img/bariloche.jpg", 1));
arrayViajes.push(new Destino(3, "Córdoba", 5000, "Solo ida", "/assets/img/cordoba.jpg", 1));
arrayViajes.push(new Destino(4, "Salta", 10000, "Vuelo ida y vuelta", "/assets/img/salta.jpg", 1));
arrayViajes.push(new Destino(5, "Iguazú", 15000, "Vuelo ida y vuelta", "/assets/img/iguazu.jpg", 1));


for (let i = 0; i < arrayViajes.length; i++) {

    $("#contenedor-productos").append(`<div class="card" style="width: 18rem;">
                                            <img class="card-img-top" src="${arrayViajes[i].imagen}" alt="Card image cap">
                                            <div class="card-body">
                                                <h3>  ${arrayViajes[i].nombre} </h3>
                                                <p> ${arrayViajes[i].descripcion} </p>
                                                <b> $ ${arrayViajes[i].precio} </b>
                                            </div>
                                            <button id=boton${arrayViajes[i].id} type="button" class="btn btn-primary ">AGREGAR</button>
                                        </div>`);
}
