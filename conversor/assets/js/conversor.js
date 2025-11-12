
    document.getElementById("formulario").addEventListener("submit", function (e) {
      e.preventDefault();

      const valor = parseFloat(document.getElementById("valor").value);
      const tipo = document.getElementById("conversion").value;
      const tasa = 940; // ejemplo: 1 USD = 940 CLP

      let resultadoTexto = "";

      if (tipo === "clpToUsd") {
        const resultado = (valor / tasa).toFixed(2);
        resultadoTexto = `${valor} CLP = ${resultado} USD`;
      } else {
        const resultado = (valor * tasa).toFixed(2);
        resultadoTexto = `${valor} USD = ${resultado} CLP`;
      }

      document.getElementById("resultado").innerText = resultadoTexto;
    });
  