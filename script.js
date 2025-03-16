const menuBar = document.getElementById('list-icon')
const navContainer = document.querySelector('.nav-container')
const nav = document.querySelector('nav')

function handleMenuBar() {

  let isOpen = true

  navContainer.style.left = '-100%'

  menuBar.addEventListener('click', () => {
    if (isOpen) {
      navContainer.style.left = 0
      menuBar.style.position = 'fixed'
    } else {
      navContainer.style.left = '-100%'
      menuBar.style.position = 'absolute'
    }
    isOpen = !isOpen
    }
  )
}

function checkScreenSize() {
  // Pegando todos os elementos que originalmente deveriam ter a classe
  const elements = document.querySelectorAll(".wide-box, .wide-box-removed");

  if (window.matchMedia("(max-width: 1017px)").matches) {
    elements.forEach(element => {
      console.log(element);
      element.classList.remove("wide-box");
      element.classList.add("wide-box-removed"); // Adiciona uma classe temporária para rastrear
    });
  } else {
    elements.forEach(element => {
      element.classList.add("wide-box");
      element.classList.remove("wide-box-removed"); // Remove a classe temporária
    });
  }
  if (window.matchMedia("(max-width: 768px)").matches) {
    handleMenuBar();
  } else {
    navContainer.style.left = '0px'
  }
}

// Executa ao carregar a página
checkScreenSize();

// Executa sempre que a tela for redimensionada
window.addEventListener("resize", checkScreenSize);
