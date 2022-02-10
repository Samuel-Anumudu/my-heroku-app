const header = document.querySelector('.header')
let counter = 0
function changeColor() {
  let colors = ['orange', 'greenyellow', 'yellow', 'pink', 'aqua', 'white']
  header.style.color = colors[counter]
  counter = (counter + 1) % colors.length
}

setInterval(changeColor, 1000)
