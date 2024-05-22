function calcular(operacao) {
    const num1Input = document.getElementById("valor1");
    const num2Input = document.getElementById("valor2");
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let resultado;

    if (num1Input.value.trim() === "" || num2Input.value.trim() === "") {
        resultado = "Dados em branco, favor digitar algo!";
    } else if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira números válidos.";
    } else if (operacao === 'dividir' && num2 === 0) {
        resultado = "Não há divisão por zero.";
    } else {
        switch (operacao) {
            case 'somar':
                resultado = num1 + num2;
                break;
            case 'subtrair':
                resultado = num1 - num2;
                break;
            case 'dividir':
                resultado = num1 / num2;
                break;
            case 'multiplicar':
                resultado = num1 * num2;
                break;
            default:
                resultado = "Operação desconhecida.";
        }
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}