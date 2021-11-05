/* Modal*/
const carritoAbrir = document.getElementById('boton-carrito');
const carritoCerrar = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
/* Funcion abrir carrito de compras*/
carritoAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
carritoCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation()
})
contenedorModal.addEventListener('click', () => {
    carritoCerrar.click()
})

$("#compra").click(completarCompra);
/* Funcion completar compra y vaciar carrito*/
function completarCompra() {

    swal({
        title: "Se realizó tu compra con éxito!",
        icon: "success",
        button: "Volver",
      });
      vaciarCarrito();
}

function vaciarCarrito () {
    carritoDeCompras = [];  
    contenedorCarrito.innerHTML = ""; 
    actualizarCarrito(); 
}


