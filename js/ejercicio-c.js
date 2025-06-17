console.log("funciona el ejercicio C")

var cantidadDeGatos = parseInt(prompt("Ingrese un cantidad de gatos"));
var cantidadDePasos = parseInt(prompt("Ingrese un cantidad de pasos"));

var emoji=" 🐈";
var emoji2=" 🐾"; 
var emoji3=" ⬛";

var patitas= emoji2.repeat(cantidadDePasos);

for (var i = 1; i <= cantidadDeGatos; i++) {    
    if (i % 2 == 0) {
        console.log("Gato #" + i + emoji + emoji3 + patitas)   
    } else console.log("Gato #" + i + emoji + patitas)        
}