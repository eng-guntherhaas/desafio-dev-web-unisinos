let proximoItem = 1;

const cartaoTitulo = document.querySelector('.cartao-titulo');
    cartaoTitulo.addEventListener('click', () => {
      cartaoTitulo.style.display = 'none';

      const cardPlanets = document.querySelectorAll('.card-planet');
      cardPlanets.forEach((cardPlanet) => {
        cardPlanet.style.display = 'block';
      });
    });

    
    function mostrarProximo() {
      const lista = document.getElementById("lista");
      const proximoLi = lista.querySelector(`li:nth-child(${proximoItem})`);
      if (proximoLi) {
        proximoLi.style.display = "list-item";
        proximoItem++;
        if (!proximoLi.nextElementSibling) {
          document.querySelector("button").style.display = "none";
        }
      }
    }