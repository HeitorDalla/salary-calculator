"use strict"

document.querySelector("#btnCalcular").addEventListener("click", (e) => {
    e.preventDefault();

    const salarioAntigo = document.querySelector("#salarioAntigo");
    const salarioNovo = document.querySelector("#salarioNovo");

    const aumento = document.querySelector("#aumento");
    const percentualAumento = document.querySelector("#percentualAumento");

    const validacao = validarCampos(salarioAntigo, salarioNovo);
    if (!validacao.isValid) {
        salarioAntigo.value = '';
        salarioNovo.value = '';

        alert(validacao.message);

        return;
    }

    aumento.textContent = `Valor do Aumento: ${salarioNovo.value - salarioAntigo.value}`;

    percentualAumento.innerHTML = `Percentual do Aumento: ${((salarioNovo.value * 100) / salarioAntigo.value) - 100}`;
})

function validarCampos (...values) {
    const validation = {
        isValid: true,
        message: null
    }

    for (const v of values) {
        const valor = v.value;

        if (valor === '') {
            validation.isValid = false;
            validation.message = 'Preencha os campos corretamente!';
            return validation;
        }

        const numero = Number(valor);
        if (Number.isNaN(numero)) {
            validation.isValid = false;
            validation.message = 'Os valores devem ser numéricos!';
            return validation;
        }
    }

    return validation;
}