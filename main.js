var nome = localStorage.getItem("nome") || "Thomaz"
var email = localStorage.getItem("email")
var dialogo = document.getElementById("login")
var carregar = document.getElementById("carregar")
if (!nome || !email) {
  
  dialogo.showModal()
  
}

var sobre = document.getElementById("sobre")
sobre.innerHTML = `você está apoiando o jogo de navegador chamado "Avoid the danger", um RPG de decisões. <br> A exatos 2 anos ouve um assassinato, a vítima se chamava ${nome}, e foi encontrado na escada da escola, ${nome} era estudante do terceiro ano do ensino médio e a polícia não encontrou pistas sobre o que havia acontecido.<br> ${nome} Você ganhou uma nova chance! tome sábias decisões desta vez!<br><br>O jogo está sendo desenvolvido por Caio multiversando do CM STUDIO!`
function ok() {
  // Tab to edit

 email = document.getElementById("email").value
localStorage.setItem("email",email)
nome = document.getElementById("nome").value
localStorage.setItem("nome",nome)
dialogo.close()
}

function doar() {
  carregar.showModal()
  setTimeout(()=> {
    window.open("https://livepix.gg/caiomultiversando")
    carregar.close()
    
  },2000)
  
  
}

  
function insta() {
  carregar.showModal()
  
  
  setTimeout(()=> {
    window.open("https://livepix.gg/caiomultiversando")
    carregar.close()
    
  },2000)
  
  
}