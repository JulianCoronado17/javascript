/*Ejercicio donde se simule una carrera de caballos

cantidad de caballos = usuario elige

a partir de caballos se le pide nombre a cada caballo

se le asigna aleatoriamente a cada caballo entre 1 y 10 segundos completando el recorrido

cuando el usuario seleccione la opcion “empezar carrera”

el programa tiene que ir poniendo el orden de que caballo llega en cada posicion
según los segundos establecidos (settimeout)*/




function registrarcaballo(){
    var contador = 0
    var caballos= []
    var cantidad_caballos=Number(prompt("Ingrese el número de caballos que van a competir"))
    while(contador != cantidad_caballos){
        var nombre_caballo=prompt("Ingrese el nombre del caballo")
        caballos[contador]=nombre_caballo
        contador++
    }
}
function llegada(){
    
}



while(true){
    var opc=Number(prompt("1.Registrar caballos\n2.Iniciar Carrera\n\nEscoja una opcion"))
    if(opc === 1){
        registrarcaballo()
    }
}
