document.getElementById("dniForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Array de letras del DNI
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    // Obtener valores ingresados por el usuario
    const numeroDNI = parseInt(document.getElementById("dniNumber").value);
    const letraDNI = document.getElementById("dniLetter").value.toUpperCase();
    const resultDiv = document.getElementById("result");

    // Validar número de DNI
    if (numeroDNI < 0 || numeroDNI > 99999999) {
        resultDiv.textContent = "Número de DNI no válido. Debe estar entre 0 y 99,999,999.";
        resultDiv.style.color = "red";
        return;
    }

    // Calcular letra correspondiente
    const letraCalculada = letras[numeroDNI % 23];

    // Comparar letra ingresada con calculada
    if (letraDNI !== letraCalculada) {
        resultDiv.textContent = `La letra ingresada no es correcta. La letra correcta es ${letraCalculada}.`;
        resultDiv.style.color = "red";
    } else {
        resultDiv.textContent = `Número y letra de DNI correctos.`;
        resultDiv.style.color = "green";
    }
});
