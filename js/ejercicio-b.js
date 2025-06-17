console.log("Ejercicio B")

var emoji=" 🐈";
var emoji2=" 🐾"; 
var cantidadDeGatos = parseInt(prompt("Ingrese un cantidad de gatos")); 
var cantidadDePasos = parseInt(prompt("Ingrese un cantidad de pasos"));
var patitas= emoji2.repeat(cantidadDePasos);

for (var i = 1; i <= cantidadDeGatos; i++) {    
    console.log("Gato #" + i + emoji + patitas)    
}