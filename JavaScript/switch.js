/*1. Crea un programa que solicite al usuario tres notas calcular el promedio. El rango permitido
 es de 0 a 5, incluidos decimales. Utilice una estructura switch para mostrar un mensaje 
 correspondiente a la calificación ingresada, así:

Si saca menos de 2.5 ( 'Insuficiente, has perdido la materia' )
Si saca 2.5 y de menos de 3.5 ( 'Insuficiente, tienes derecho a habilitar' )
Si saca 3.5 y menos de 4.0 ( 'Aceptable' )
Si saca 4.1 y hasta 5.0 ( 'Excelente' ) */

let nota1 =prompt("Ingresa tu primer nota (De 0 a 5)")
let nota2 =prompt("Ingresa tu segunda nota (De 0 a 5)")
let nota3 =prompt("Ingresa tu tercera nota (De 0 a 5)")

nota1=Number(nota1)
nota2=Number(nota2)
nota3=Number(nota3)

let average= (nota1+nota2+nota3)/3

console.log(average)


