function Convertir(e) {
  let num = parseInt(e.target.value)
  let spans = document.querrySelecasetorAll('span')
  for(let s of spans) {
    s.textContent = num.toString(parceInt(s.dataset.base)).toUpperCase();
  }
}
