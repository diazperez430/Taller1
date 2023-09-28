/*1. Crea un programa que solicite al usuario tres notas calcular el promedio. El rango permitido
 es de 0 a 5, incluidos decimales. Utilice una estructura switch para mostrar un mensaje 
 correspondiente a la calificación ingresada, así:

Si saca menos de 2.5 ( 'Insuficiente, has perdido la materia' )
Si saca 2.5 y de menos de 3.5 ( 'Insuficiente, tienes derecho a habilitar' )
Si saca 3.5 y menos de 4.0 ( 'Aceptable' )
Si saca 4.1 y hasta 5.0 ( 'Excelente' ) */

// let nota1 =prompt("Ingresa tu primer nota (De 0 a 5)")
// let nota2 =prompt("Ingresa tu segunda nota (De 0 a 5)")
// let nota3 =prompt("Ingresa tu tercera nota (De 0 a 5)")

// nota1=parseFloat(nota1)
// nota2=parseFloat(nota2)
// nota3=parseFloat(nota3)

// let suma=nota1+nota2+nota3
// let average=suma/3
// console.log(average)

// switch(true){
    
//     case average<2.5:
//     alert("Insuficiente, has perdido la materia");
//     break;
    
//     case average >=2.5 && average < 3.5:
//     alert("Insuficiente, tienes derecho a habilitar");
//     break;
    
//     case average >= 3.5 && average < 4:
//     alert("Aceptable");
//     break;

//     case average >= 4 && average <= 5:
//     alert("Excelente");
//     break;
    
//     default:
//     alert("Ingrese un valor válido")

// }

/* 2. Usa el prompt para solicitar un número que representará el mes del año (por ejemplo, 1 para enero, 2 para febrero,
 etc.). Utiliza una estructura switch para mostrar cuántos días tiene ese mes. */

//  let mesnumber=prompt("Ingresa el número del mes del año 2023")

//  mesnumber=Number(mesnumber)

// switch(mesnumber){

//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:

//     alert("El mes tiene 31 dias");
//     break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     alert("El mes tiene 30 días");
//     break;

//     case 2:
//     alert("El es tiene 28 días");
//     break;

//     default:
//     alert("Ingrese el número en formato 1 2 3 ...");
// }

/* 3. Usa el prompt para que tome un valor numérico del 1 al 12 (representando un mes) como argumento y devuelva el
 nombre del mes utilizando una estructura switch. */

// let = numeromes = prompt("Ingresa el número del mes")
// numeromes = Number(numeromes)

// switch(numeromes){

//     case 1:
//         alert("Enero");
//         break;
//     case 2:
//         alert("Febrero");
//         break;
//     case 3:
//         alert("Marzo");
//         break;
    
//     case 4:
//         alert("Abril");
//         break;
//     case 5:
//         alert("Mayo");
//         break;
//     case 6:
//         alert("Junio");
//         break;
    
//     case 7:
//         alert("Julio");
//         break;
//     case 8:
//         alert("Agosto");
//         break;
//     case 9:
//         alert("Septiembre");
//         break;

//     case 10:
//         alert("Octubre");
//         break;
//     case 11:
//         alert("Noviembre");
//         break;
//     case 12:
//         alert("Diciembre");
//         break;
    
//     default:
//         alert("Ingrese un número de 1 a 12")
// }

/* 4. Crea un programa que solicite al usuario una opción de menú (por ejemplo, 1 para "Ver perfil", 2 para "Editar
 configuración", etc.) y utilice una estructura switch para realizar la acción correspondiente. */

//  let message =prompt("Elije una opción del menú (1 2 3 ...")
//  let menu = prompt("1.Ver perfil   2.Configuración     3.Bloquear")

//  menu=Number(menu)

// switch(menu){

//     case 1:
//         prompt("Cambia tu foto");
//         break;
//     case 2:
//         prompt("Cambia tu contraseña");
//         break;
//     case 3:
//         prompt("Quien te fastidia");
//         break;
    
//     default:
//         prompt("Elije una opción correcta")
// }


/* 5. Usa el prompt para capturar un numero que representará una dirección cardinal (Norte, Sur, Este, Oeste). Utiliza
 una estructura switch para determinar en qué dirección se encuentra un punto cardinal opuesto (por ejemplo, 
Norte-opuesto es Sur). */

// let direccion = prompt("Ingresa una de las direcciónes cardinales y te diré su opuesta")

// direccion= direccion.toLowerCase()

// switch(direccion){

//     case "norte":
//         alert("Su opuesta es Sur")
//         break;
    
//     case "este":
//         alert("Su opuesta es Oeste");
//         break;

//     case "oeste":
//         alert("Su opuesta es Este");
//         break;
    
//     case "sur":
//         alert("Su opuesta es Norte")
//         break;
    
//         default:
//         alert("Ingresa una de estas direacciones (Norte, Sur, Este u Oeste.")
// }






