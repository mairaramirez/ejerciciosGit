console.log("Ejercicio A")

var emoji=" 😹"
var emoji2=" 😺"
var emoji3=" 😸"
var cara;

var cantidadDeGatos= parseInt(prompt("Ingrese un número"));
var i=1;


while (i <= cantidadDeGatos) {
    if(i % 3 == 0 ){
        cara = emoji
    }else if (i % 3 == 1){
        cara = emoji2
    }else {
        cara = emoji3
    }
    console.log("Gato #"+ i + cara);
    i++;
}