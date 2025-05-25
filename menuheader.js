const toggle = document.querySelector('.toggle')
const side_bars = document.querySelector('.side_bars')
const background = document.querySelector('.background')
// tralala(() =>{}) (esse é um comando para executar uma function sem ficar abrindo ela inteira.)
toggle.addEventListener('click', () => {
  toggle.classList.toggle('ativo')
  background.classList.toggle('ativo')
  side_bars.classList.toggle('ativo')}
)
background.addEventListener('click',()=>{
  background.classList.remove('ativo')
  side_bars.classList.remove('ativo')
  toggle.classList.toggle('ativo')
})