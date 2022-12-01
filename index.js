const inputBuscar = document.querySelector('#buscar');
const botonBuscar = document.querySelector('#botonBuscar');
const botonFiltrar = document.querySelector('#botonFiltrar');
const divProductos = document.querySelector('#divProductos');


const buscarProductos = async () => {
    const prodFetch = await fetch('https://fakestoreapi.com/products')
    const prodJson = await prodFetch.json()
    console.log(prodJson);
    prodJson.forEach(prod => {
        const { category, description, id, image, price, title } = prod
        divProductos.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top">
        <div class="card-body">
          <h2 class="card-title">${title}</h2>
          <p class="card-text">${description}</p>
          <p>${price}</p>
          <button id="${id}" class="btn btn-dark">Agregar</button>
        `

    });
}

buscarProductos()