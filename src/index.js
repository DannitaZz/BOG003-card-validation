import validator from "./validator.js"; //conexión con validator.js

const inicio = () => {

  /* Permite ver solo una pantalla en este caso pagina de bienvenida con display block, 
  trae documentos del DOM para decidir qué ocultamos y que no*/

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

    /* Permite ver solo una pantalla en este caso pagina de productos con display block, 
  trae documentos del DOM para decidir qué ocultamos y que no*/

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

      /* Permite ver solo una pantalla en este caso pagina de compra con display block, 
  trae documentos del DOM para decidir qué ocultamos y que no*/

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

      /* Permite ver solo una pantalla en este caso pagina de comprobación con display block, 
  trae documentos del DOM para decidir qué ocultamos y que no*/

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

      /* Permite ver solo una pantalla en este caso pagina válida con display block, 
  trae documentos del DOM para decidir qué ocultamos y que no*/

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

      /* Permite ver solo una pantalla en este caso pagina no válida con display block, 
  trae documentos del DOM para decidir qué ocultamos y que no*/

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
  /* 
   crea variable que me trae el elemento del DOM a tráves del ID "pass"
  y extrae el string y lo asigna a la variable creditCardNumber*/
 
  let creditCard = document.getElementById('pass'); 
  
  creditCardNumber = creditCard.value; 
  
};

const cubreNumero = () => {

  /* la variable newpass trae el string cubierto con numerales y este se reemplaza en el value
  del elemento del DOM cuyo id es "pass" */ 

  let newpass = validator.maskify(creditCardNumber);
  let passField = document.getElementById('pass');
  
  passField.type = "text";
  document.getElementById("pass").value= newpass;

};

const alertaValida = () => {

  /*Esta funcion nos trae el boolean que retorna isValid, después verifica que el campo este lleno y luego por medio de 
  un condicional me lleva a pagina valida si es true o pagina no valida si es false */

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

inicio();//se llama la función página de inicio//
let botonProductos = document.getElementById("boton-productos");//traemos el botón productos//
botonProductos.addEventListener("click", productos);//por medio de listener el botón me muestra pag de productos al dar click//
let botonDetalles = document.getElementById("boton-detalles");
botonDetalles.addEventListener("click", compra);
let botonCompra = document.getElementById("boton-compra");
botonCompra.addEventListener("click", comprobacion);


let creditCardNumber = ""; //asignamos creditCardNumber como variable global//

let cajita = document.getElementById('pass');//la variable cajita me trae el elemnto del DOM por medio de su id //
cajita.addEventListener("change", extraeNumero);//listener para llamar la función que extrae el numero cuando cambie el input//
cajita.addEventListener("change", () => validator.maskify(creditCardNumber));//listener para llamar funcion que cubre con "#" los dígitos//
cajita.addEventListener("change", cubreNumero);//listener que reemplaza el número por los digitos cubiertos//

/*la variable trae el elemento del DOM con el id "boton-validar" para 
que al dar click ,con el listener, se ejecute la siguiente función */
let boton = document.getElementById('boton-validar');
boton.addEventListener("click", () => {
  /* si creditCardNumber esta vacio, trae el elemento mediante el id "advertencia" del DOM para añadir en este caso
  el span "este campo esta vacío" */
  if (creditCardNumber==="") {
    document.getElementById("advertencia").innerHTML="*Este campo es obligatorio";  // Párrafo o span
    
  /*Si no esta vacío se ejecuta la funcion isValid*/ 
  } else {
    validator.isValid(creditCardNumber)
  }

});
boton.addEventListener("click",  alertaValida);//al dar click se ejecuta la función alertaValida//
//la variable me trae el elemento del id "boton-seguir" y con un click me lleva a la pag productos//
let botonSeguir = document.getElementById("boton-seguir");
botonSeguir.addEventListener("click", productos);
//la variable me trae el elemento del id "boton-volver" y con un click me lleva a la pag comprobación//
let botonVolver = document.getElementById("boton-volver");
botonVolver.addEventListener("click", comprobacion);




