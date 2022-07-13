
    
    const  pizza  =  [
    {  id : 1 ,  nombre : "MUZZARELLA" ,  ingredientes : [ "salsa" ,  "muzzarela" ,  "oregano" ] ,  precio : 1500  } ,
    {  id : 2 ,  nombre : "NAPOLITANA" ,  ingredientes : [ "salsa" ,  "muzzarela" ,  "tomate" ,  "ajo" ] ,  precio : 1800  } ,
    {  id : 3 ,  nombre : "MORRON" ,  ingredientes : [ "salsa" ,  "muzzarela" ,  "jamon" ,  "morron" ] ,  precio : 1600  } ,
    {  id : 4 ,  nombre : "FUGAZZETA" ,  ingredientes : [ "muzzarela" ,  "cebolla" ,  "aceite de oliva" ] ,  precio : 1600  } ,
    {  id : 5 ,  nombre : "CALABRESA" ,  ingredientes : [ "salsa" ,  "muzzarela" ,  "longaniza" ] ,  precio : 2050  } ,
    {  id : 6 ,  nombre : "ANANA" ,  ingredientes : [ "salsa" ,  "muzzarela" ,  "ananá" ] ,  precio : 1800  } ,
]


const input = document.getElementById ("input");
const button = document.getElementById("boton");
const h2 = document.getElementById ("h2");
const h4 = document.getElementById ("h4");


button.addEventListener("click", llamador );
function llamador(){
    const gpsPizza = parseInt (input.value);
   for (let i = 0 ; i < pizza.length ; i++) {
    if (pizza [ i ] . id === gpsPizza)  {
        h2.innerHTML = pizza[i].nombre;
        h4.innerHTML = pizza[i].precio;
     return
    }
    else{
        h2.innerHTML = "no hay pizzas con este id";
        h4.innerHTML = "";
    }
   }


}