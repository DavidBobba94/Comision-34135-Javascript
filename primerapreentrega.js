// Primera pre entrega "Simulador Interactivo" Realizado por Pedro David Bobba

// Simulador de reservas para un show nocturnpo en un bar.

alert("Reserva tu lugar para esta noche!")
alert("Ingresa tu nombre para reservar. Para finalizar presiona en cancelar o la tecla Esc")

for (let i = 1; i <= 20; i++) {

    let ingresarNombre = prompt("Ingrese su Nombre y Apellido")

    if (ingresarNombre == null) {
        console.log("Finalizaste tus reservas")
        break;
    }
    else if (ingresarNombre == "") {
        console.log("No ingresaste ningun nombre")
        alert("No ingresaste ningun nombre")
        i--;
        continue;
    }
    console.log("Nombre: " + ingresarNombre + ". Su numero de reserva es " + i)
    alert("Nombre: " + ingresarNombre + ". Su número de reserva es " + i)

}
alert("Finalizaste tus reservas!")