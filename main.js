var nome = localStorage.getItem("nome")
var email = localStorage.getItem("email")
var dialogo = document.getElementById("login")
if (!nome || !email) {
  
  dialogo.showModal()
  
}

var sobre = document.getElementById("sobre")
sobre.innerHTML = `você está apoiando o jogo de navegador chamado "Avoid the danger", um RPG de decisões. <br> A exatos 2 anos ouve um assassinato, a vítima se chamava ${nome}, e foi encontrado na escada da escola, ${nome} era um estudante do terceiro ano do ensino médio e a polícia não encontrou pistas sobre o que havia acontecido.<br> ${nome} Você ganhou uma nova chance! tome sábias decisões desta vez!`
function ok() {
  // Tab to edit

 email = document.getElementById("email").value
localStorage.setItem("email",email)
nome = document.getElementById("nome").value
localStorage.setItem("nome",nome)
dialogo.close()
}

function doar() {
  window.open("https://livepix.gg/caiomultiversando")
}