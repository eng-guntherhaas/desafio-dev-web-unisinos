const cartaoTitulo = document.querySelector('.cartao-titulo');
    cartaoTitulo.addEventListener('click', () => {
      cartaoTitulo.style.display = 'none';

      const cardPlanets = document.querySelectorAll('.card-planet');
      cardPlanets.forEach((cardPlanet) => {
        cardPlanet.style.display = 'block';
      });
    });
