



<center>

![](https://i.imgur.com/R81REIK.png)

</center>


### Autoría 
"VITANI" y el contenido de este documento son autoría de Maria Álvarez y Danna Cárdenas



 Validación de tarjeta de crédito
===
El proyecto de validación de tarjeta de crédito es una web app llamada VITANI donde el usuario podrá comprar accesorios para animales. Al momento de elegir el producto y darle click a "comprar" se pide el número de tarjeta de crédito para validar y continuar la compra.






## Interfaz de usuario

La interfaz de usuario es tipo tienda en línea con una paleta de colores agradable a la lista, cuenta con botones funcionales y una oferta de productos limitada. 

![](https://i.imgur.com/vp0iVSW.png)

![](https://i.imgur.com/bcUTHbM.png)

![](https://i.imgur.com/QhBibhM.png)

![](https://i.imgur.com/fAjIVoP.png)

![](https://i.imgur.com/tbdatQU.png)

![](https://i.imgur.com/IVlorXk.png)

![](https://i.imgur.com/JyLpIgs.png)

![](https://i.imgur.com/lMLIdkp.png)


El usuario
--
Pet Lovers interesados en brindarle a sus peludos comodidad y cuidado general.

¿Para qué sirve la app?
--
VITANI es una app diseñada para facilitar las compras online de accesorios para animales mediante el uso de tarjetas de crédito. Al validar las tarjetas de crédito, permite que las compras sean seguras y transparentes, generando confianza en el cliente. 

¿Qué problemas y/o necesidades soluciona?
--
La app VITANI resuelve la incertidumbre para la tienda de mascotas, al saber si las compras que hacen los usuarios son desde tarjetas de crédito válidas y funcionales, para que con seguridad depositen el monto solicitado en la compra. 

Proceso de prototipado 
--
Primer prototipo en papel:
![](https://i.imgur.com/nzglp8i.png)


En el feedback recibido, se hicieron sugerencias como
* Añadir otro panel opcional por si la tarjeta es inválida.
* Añadir imágenes de mascotas felices/tristes si la tarjeta es válida o inválida, respectivamente.
* Añadir un encabezado con el logo y un pie de página con los datos de contacto.

Prototipo final:

![](https://i.imgur.com/zmJbza6.png)

![](https://i.imgur.com/CG5RMoY.png)

![](https://i.imgur.com/chxQWFB.png)

![](https://i.imgur.com/8Uumjqi.png)

![](https://i.imgur.com/1BUwhOJ.png)

![](https://i.imgur.com/AjA2faR.png)

![](https://i.imgur.com/Kl6FLA5.png)


¿Cómo funciona la app?
---
VITANI valida las tarjetas mediante una implementación del algoritmo de Luhn,también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

> Puedes leer más sobre el algoritmo de Luhn en: quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html

Diagramas
---

**Diagrama función Maskify**

![](https://i.imgur.com/DJsos5p.png)


**Diagrama función isValid**

![](https://i.imgur.com/m1pubOe.png)


## Testeo unitario

El proyecto pedía un testeo unitario con Jest de las funciones más importantes isValid y Maskify, así como del objeto Validator.
Se pasaron todos los test en 100%

![](https://i.imgur.com/OQ9h7oZ.png)



## Recursos


* Página de tomada de guía: http://www.furryland.com.co/
* Logo generado en: https://app.brandmark.io
* Código para mostrar 4 caracteres: https://stackoverflow.com/questions/31788647/how-to-display-4-digits-in-the-password-field#comment51507503_31788992
* Código algoritmo de Luhn tomado y modificado de: https://gist.github.com/DiegoSalazar/4075533
* Imágenes: https://imgur.com/gallery/fXIsJgK



###### tags: `algoritmo Luhn` `Card Validation`
