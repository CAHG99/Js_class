function agregarClientes(){
    //Inicializacion del programa
    console.log("¡Bienvenido al Sistema Interactivo de Mensajes!");

    //Captura de datos del programa
    let nombre = prompt("Por favor, Ingresa tu nombre:");
    let edad = prompt("Por favor, Ingresa tu edad:");

    //Convertir edad a numero
    edad = parseInt(edad);

    //Codigo para Validacion y Mensajes:
    if (isNaN(edad)){ // NAN -> not a number
        console.error("Error: Por favor, ingresa una edad valida en numeros");
    } else if (edad < 18){
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!`);
    } else {
        alert(`Hola ${nombre}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`);
    }
}
