// SIMULADOR INTERACTIVO: PROMEDIO DE NOTAS ESCOLARES
// El usuario ingresara notas de distintas asignaturas escolares, de las cuales se les sacara promedio.

// VARIABLES
let nota;
let asignatura;
let sumaNotas;
let promedio = 0;
let cantidad
let decision;

// MENSAJE DE BIENVENIDA AL SIMULADOR
alert("CALCULEMOS TUS PROMEDIOS!")

do {
    cantidad = 0;
    asignatura = prompt("Ingrese la asignatura");


    nota = Number(prompt("Ingrese su nota"))

    while (nota <= 0 || nota > 10 || isNaN(nota)) {
        alert("NOTA INVALIDA!")
        nota = Number(prompt("Por favor, ingrese una nota valida!"))
    }

    cantidad++;
    sumaNotas = nota

    decision = prompt("Desea ingresar otra nota? Si / No")

    while (decision == "Si" || decision == "si" || decision == "SI") {
        nota = Number(prompt("Ingrese otra nota"))

        while (nota <= 0 || nota > 10 || isNaN(nota)) {
            alert("NOTA INVALIDA!")
            nota = Number(prompt("Por favor, ingrese una nota valida!"))
        }

        sumaNotas = sumaNotas + nota
        cantidad++;

        decision = prompt("Quiere seguir ingresando notas? Si / No")
    }

    promedio = sumaNotas / cantidad

    alert(`Su promedio en ${asignatura} es ${promedio}`)

    decision = prompt("Quiere ingresar notas de otra asignatura? Si / No"); 

} while (decision == "Si" || decision == "si" || decision == "SI");

alert("GRACIAS POR USAR EL SIMULADOR!")






   

 













