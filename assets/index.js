const numeroProductos = document.querySelector("#cantidad-productos");
const colorProducto = document.querySelector("#color-producto");
const precioProducto = document.querySelector("#precio-producto");
const totalProducto = document.querySelector("#total-producto");
const botonProducto = document.querySelector(".btn");
const contenedorDeTotales = document.querySelector(".contenedor-oculto");
const mostrarCostoTotal = document.querySelector("#mostrar-costo-total");
const mostrarCantidadProductos = document.querySelector("#mostrar-cantidad-productos");
const mostrarColorProducto = document.querySelector("#mostrar-color-producto");
const ocultarIcon = document.querySelector("#icon");


botonProducto.addEventListener("click", () => {
    //console.log(numeroProductos.value);
    //console.log(colorProducto.value);
    //totalProducto.style.color = colorProducto.value;
    //totalProducto.textContent = "El valor total es: $" + parseInt(precioProducto.textContent) * parseInt(numeroProductos.value);
    ocultarIcon.style.display = "none";
    contenedorDeTotales.style.display = "block";
    mostrarCostoTotal.textContent = `Total: $${parseInt(precioProducto.textContent) * parseInt(numeroProductos.value)}`;
    mostrarCantidadProductos.textContent = `Cantidad: ${numeroProductos.value}`;
    mostrarColorProducto.style.backgroundColor = colorProducto.value;
});
