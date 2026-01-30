function cruzamento(){

const verde1 = document.getElementById("luz-verde1")
const amarelo1 = document.getElementById("luz-amarelo1")
const vermelho1 = document.getElementById("luz-vermelho1")

const verde2 = document.getElementById("luz-verde2")
const amarelo2 = document.getElementById("luz-amarelo2")
const vermelho2 = document.getElementById("luz-vermelho2")

 function apagar() {
    verde1.style.opacity = "0.3";
    amarelo1.style.opacity = "0.3";
    vermelho1.style.opacity = "0.3";
  }

  function ciclo() {
    // VERDE
    apagar();
    verde1.style.opacity = "1";

    setTimeout(() => {
      // AMARELO
      apagar();
      amarelo1.style.opacity = "1";

      setTimeout(() => {
        // VERMELHO
        apagar();
        vermelho1.style.opacity = "1";

        setTimeout(ciclo, 2000); 
      }, 1000);

    }, 3000);
  }

  ciclo();
}

