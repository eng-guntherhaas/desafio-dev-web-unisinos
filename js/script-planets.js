let proximoItem = 1;
    
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

  document.addEventListener("click", (event) => {
    if(event.target.matches(".fixed-img")) {
      openModal();
    }
    if (event.target.matches(".close") || event.target.matches(".modal")) {
      closeModal();
    }
  }
  )

  function openModal() {
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      };
  
  function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
  };
  