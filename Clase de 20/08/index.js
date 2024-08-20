


localStorage.setItem("profe", "Juankis");
const estudiante = {
    nombre: "Mariana Grande",
    edad: "23 casi 24"
}
localStorage.setItem("estudiante", JSON.stringify(estudiante));
const resultado = JSON.parse(localStorage.getItem("estudiante"));
localStorage.setItem("abc", "123")
console.log(localStorage);

const carrito = {
    productos: ["323232","2424242"],
    fecha: new Date()
}
const warzone = {
    lujos : {Blackcell:["Operadores", "Varientes de armas","Remates","Reckorner"],
        bundles : ["Skins", "Mastercrafts", "Remates"]
    },
    operadores :["Ghost","Price","Soap"],
    best_gun : "STG"
}
localStorage.setItem("carrito", JSON.stringify(carrito));

localStorage.setItem("warzone", JSON.stringify(warzone));
