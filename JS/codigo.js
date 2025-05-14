 function verificarResposta() {
      const respostaCorreta = "amor da minha vida";
      const respostaUsuario = document.getElementById("resposta").value.trim();
      const erro = document.getElementById("error");

      if (respostaUsuario === respostaCorreta) {
        document.getElementById("popup").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
      } else {
        erro.textContent = "Resposta incorreta. Tente novamente!";
      }
    }