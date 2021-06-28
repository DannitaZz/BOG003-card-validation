import validator from "./validator.js"; //conexión con validator.js

const inicio = () => {

  let paginaInicio = document.getElementById("pagina-inicio");
  let paginaProductos = document.getElementById("pagina-productos");
  let paginaCompra = document.getElementById("pagina-compra");
  let paginaComprobacion = document.getElementById("pagina-comprobacion");
  let paginaValida = document.getElementById("pagina-valida");
  let paginaNoValida = document.getElementById("pagina-no-valida");

  paginaInicio.style.display = "block";
  paginaProductos.style.display = "none";
  paginaCompra.style.display = "none";
  paginaComprobacion.style.display = "none";
  paginaValida.style.display = "none";
  paginaNoValida.style.display = "none";
}

const productos = () => {

  let paginaInicio = document.getElementById("pagina-inicio");
  let paginaProductos = document.getElementById("pagina-productos");
  let paginaCompra = document.getElementById("pagina-compra");
  let paginaComprobacion = document.getElementById("pagina-comprobacion");
  let paginaValida = document.getElementById("pagina-valida");
  let paginaNoValida = document.getElementById("pagina-no-valida");

  paginaInicio.style.display = "none";
  paginaProductos.style.display = "block";
  paginaCompra.style.display = "none";
  paginaComprobacion.style.display = "none";
  paginaValida.style.display = "none";
  paginaNoValida.style.display = "none";
}

const compra = () => {

  let paginaInicio = document.getElementById("pagina-inicio");
  let paginaProductos = document.getElementById("pagina-productos");
  let paginaCompra = document.getElementById("pagina-compra");
  let paginaComprobacion = document.getElementById("pagina-comprobacion");
  let paginaValida = document.getElementById("pagina-valida");
  let paginaNoValida = document.getElementById("pagina-no-valida");

  paginaInicio.style.display = "none";
  paginaProductos.style.display = "none";
  paginaCompra.style.display = "block";
  paginaComprobacion.style.display = "none";
  paginaValida.style.display = "none";
  paginaNoValida.style.display = "none";
}

const comprobacion = () => { 

  let paginaInicio = document.getElementById("pagina-inicio");
  let paginaProductos = document.getElementById("pagina-productos");
  let paginaCompra = document.getElementById("pagina-compra");
  let paginaComprobacion = document.getElementById("pagina-comprobacion");
  let paginaValida = document.getElementById("pagina-valida");
  let paginaNoValida = document.getElementById("pagina-no-valida");

  paginaInicio.style.display = "none";
  paginaProductos.style.display = "none";
  paginaCompra.style.display = "none";
  paginaComprobacion.style.display = "block";
  paginaValida.style.display = "none";
  paginaNoValida.style.display = "none";
}

const pValida = () => {

  let paginaInicio = document.getElementById("pagina-inicio");
  let paginaProductos = document.getElementById("pagina-productos");
  let paginaCompra = document.getElementById("pagina-compra");
  let paginaComprobacion = document.getElementById("pagina-comprobacion");
  let paginaValida = document.getElementById("pagina-valida");
  let paginaNoValida = document.getElementById("pagina-no-valida");

  paginaInicio.style.display = "none";
  paginaProductos.style.display = "none";
  paginaCompra.style.display = "none";
  paginaComprobacion.style.display = "none";
  paginaValida.style.display = "block";
  paginaNoValida.style.display = "none"; 
}

const pNoValida = () => {

  let paginaInicio = document.getElementById("pagina-inicio");
  let paginaProductos = document.getElementById("pagina-productos");
  let paginaCompra = document.getElementById("pagina-compra");
  let paginaComprobacion = document.getElementById("pagina-comprobacion");
  let paginaValida = document.getElementById("pagina-valida");
  let paginaNoValida = document.getElementById("pagina-no-valida");

  paginaInicio.style.display = "none";
  paginaProductos.style.display = "none";
  paginaCompra.style.display = "none";
  paginaComprobacion.style.display = "none";
  paginaValida.style.display = "none";
  paginaNoValida.style.display = "block";
}

const extraeNumero = () => {
  // manipula las variables globales
  // creditNumber
  // etc.
  let creditCard = document.getElementById('pass'); //creando variable que me trae el ID del html "pass"
  
  creditCardNumber = creditCard.value; //se trae el valor de la variable creditCardNumber para extraer el numero
  
};

const cubreNumero = () => {

  let newpass = validator.maskify(creditCardNumber);
  let passField = document.getElementById('pass');
  
  passField.type = "text";
  document.getElementById("pass").value= newpass;

};

const alertaValida = () => {

  let validacion = validator.isValid(creditCardNumber);
  if (creditCardNumber==="") {
    alert("Llena el campo");
  } else {
    if (validacion == true) {
      pValida();
    } else  {
      pNoValida();
    }
  }
}

inicio();
let botonProductos = document.getElementById("boton-productos");
botonProductos.addEventListener("click", productos);
let botonDetalles = document.getElementById("boton-detalles");
botonDetalles.addEventListener("click", compra);
let botonCompra = document.getElementById("boton-compra");
botonCompra.addEventListener("click", comprobacion);


let creditCardNumber = ""; 

let cajita = document.getElementById('pass');
cajita.setAttribute("required", "");
cajita.addEventListener("change", extraeNumero);
cajita.addEventListener("change", () => validator.maskify(creditCardNumber));
cajita.addEventListener("change", cubreNumero);

let boton = document.getElementById('boton-validar');
boton.addEventListener("click", () => {
  
  if (creditCardNumber==="") {
    document.getElementById("advertencia").innerHTML="*Este campo es obligatorio";  // Párrafo o span
    
  
  } else {
    validator.isValid(creditCardNumber)
  }

});
boton.addEventListener("click",  alertaValida);

let botonSeguir = document.getElementById("boton-seguir");
botonSeguir.addEventListener("click", productos);
let botonVolver = document.getElementById("boton-volver");
botonVolver.addEventListener("click", comprobacion);




