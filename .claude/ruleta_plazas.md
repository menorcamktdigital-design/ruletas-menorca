Necesito que la ruleta funcione en base al **proyecto/plaza seleccionado** por el usuario antes de jugar.

Objetivo:
No usar un premio fijo global. Los premios deben cambiar según el proyecto elegido.

Cómo debe funcionar:

1. El usuario primero selecciona su proyecto o plaza de interés.
2. Cada proyecto tendrá su propia lista de premios.
3. La ruleta cargará solo los premios de ese proyecto.
4. El premio ganado nunca debe superar el tope máximo configurado para ese proyecto.

Cómo definir los premios:
Debemos crear una configuración por proyecto, por ejemplo:

{
"caleta_san_antonio": {
"label": "Caleta San Antonio",
"maxDiscount": 5000,
"prizes": [
{ "label": "Bono S/ 1000", "value": 1000 },
{ "label": "Bono S/ 2000", "value": 2000 },
{ "label": "Bono S/ 3000", "value": 3000 },
{ "label": "Bono S/ 5000", "value": 5000 }
]
},
"proyecto_x": {
"label": "Proyecto X",
"maxDiscount": 3000,
"prizes": [
{ "label": "Bono S/ 500", "value": 500 },
{ "label": "Bono S/ 1000", "value": 1000 },
{ "label": "Bono S/ 2000", "value": 2000 },
{ "label": "Bono S/ 3000", "value": 3000 }
]
}
}

Regla:

* Si el usuario elige “Caleta San Antonio”, solo juega con los premios de Caleta San Antonio.
* Si elige otro proyecto, la ruleta cambia a los premios de ese proyecto.

Qué debe permitir el sistema:

* Agregar o quitar proyectos fácilmente.
* Cambiar premios sin rehacer la ruleta.
* Definir topes distintos por proyecto.
* Mostrar en pantalla el nombre del proyecto seleccionado antes de girar.

UI sugerida:

* Paso 1: selector de proyecto
* Paso 2: botón “Girar ruleta”
* Paso 3: resultado con premio correspondiente al proyecto elegido

Importante:
Usar “proyecto” o “ubicación de interés” en lugar de “plaza” si se quiere que sea más claro para el usuario.
