const formulario = (async () => {

  const { value: formValues } = await Swal.fire({
    title: 'Nombre y Apellido',
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Ingrese su nombre">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Ingrese su apellido">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })

  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
    localStorage.setItem('nombre y apellido', `${formValues}`)
  }
})()

const botonFiltrar = document.querySelector('#botonFiltrar');
const divProductos = document.querySelector('#divProductos');
const lista = document.querySelector('#lista');
const agregarCarro = document.querySelector('.botonAgregar');

const mostrarCat = async () => {
  const categoriasFetch = await fetch('https://fakestoreapi.com/products/categories')
  const categoriasJson = await categoriasFetch.json()
  categoriasJson.forEach(cat => {
    const option = document.createElement('option')
    option.innerText = `${cat}`
    lista.append(option)
  })
};

const buscarProductos = async () => {
  const prodFetch = await fetch('https://fakestoreapi.com/products')
  const prodJson = await prodFetch.json()
  prodJson.forEach(prod => {
    const { description, id, image, price, title } = prod
    divProductos.innerHTML += `
        <div class="card" style="width: 15rem;">
        <img src="${image}" class="card-img-top">
        <div class="card-body">
          <h2 class="card-title">${title}</h2>
          <p class="card-text">${description}</p>
          <p>${price}</p>
          <button id="${id}" class="btn btn-dark botonAgregar">Agregar</button>
        `
  });
};

const buscarProductosCat = async () => {
  divProductos.innerHTML = ''
  const catElegida = lista.value
  const prodFetch = await fetch(`https://fakestoreapi.com/products/category/${catElegida}`)
  const prodJson = await prodFetch.json()
  prodJson.forEach(prod => {
    const { description, id, image, price, title } = prod
    divProductos.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${image}" class="card-img-top">
    <div class="card-body">
      <h2 class="card-title">${title}</h2>
      <p class="card-text">${description}</p>
      <p>${price}</p>
      <button id="${id}" class="btn btn-dark botonAgregar">Agregar</button>
    `
  })
};

buscarProductos()
mostrarCat()
botonFiltrar.onclick = buscarProductosCat

