document.addEventListener("DOMContentLoaded", function () {
    const tipoDoacao = document.getElementById("tipoDoacao");
    const btnBuscar = document.getElementById("btnBuscar");
    const locaisDoacao = document.getElementById("locaisDoacao");
    const pixSection = document.getElementById("pixSection");

    btnBuscar.addEventListener("click", function () {
        const tipo = tipoDoacao.value;

        // Esconde ambas as seções antes de decidir qual mostrar
        locaisDoacao.classList.add("hidden");
        pixSection.classList.add("hidden");

        if (tipo === "dinheiro") {
            pixSection.classList.remove("hidden");
        } else if (tipo === "roupa" || tipo === "alimentos" || tipo === "higiene" || tipo === "racao") {
            locaisDoacao.classList.remove("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tipoDoacao = document.getElementById("tipoDoacao");
    const btnBuscar = document.getElementById("btnBuscar");
    const locaisDoacao = document.getElementById("locaisDoacao");
    const pixSection = document.getElementById("pixSection");
    const cepInput = document.getElementById("cep");

    btnBuscar.addEventListener("click", function (event) {
        const tipo = tipoDoacao.value;
        const cep = cepInput.value.trim();
        const cepValido = /^[0-9]{5}-?[0-9]{3}$/.test(cep);

        if (!cepValido) {
            alert("Por favor, insira um CEP válido no formato 00000-000.");
            cepInput.focus();
            return;
        }

        locaisDoacao.classList.add("hidden");
        pixSection.classList.add("hidden");

        if (tipo === "dinheiro") {
            pixSection.classList.remove("hidden");
        } else if (tipo === "roupa" || tipo === "alimentos" || tipo === "higiene") {
            locaisDoacao.classList.remove("hidden");
        }
    });
});

