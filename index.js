const botonFiltrar = document.querySelector('#botonFiltrar');
const divProductos = document.querySelector('#divProductos');
const lista = document.querySelector('#lista');
const finalizarCompra = document.querySelector('#finalizarCompra');
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
  console.log(prodJson);
  prodJson.forEach(prod => {
    const { category, description, id, image, price, title } = prod
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
    const { category, description, id, image, price, title } = prod
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

const prodArray = []

class Producto {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
  }
}

prodArray.push(new Producto(1,'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',109.95))
prodArray.push(new Producto(2,'Mens Casual Premium Slim Fit T-Shirts',22.3))
prodArray.push(new Producto(3,'Mens Cotton Jacket',55.99))
prodArray.push(new Producto(4,'Mens Casual Slim Fit',15.99))
prodArray.push(new Producto(5,'John Hardy Womens Legends Naga Gold Silver Dragon Station Chain Bracelet',695))
prodArray.push(new Producto(6,'Solid Gold Petite Micropave',168))
prodArray.push(new Producto(7,'White Gold Plated Princess',9.99))
prodArray.push(new Producto(8,'Pierced Owl Rose Gold Plated Stainless Steel Double',10.99))
prodArray.push(new Producto(9,'WD 2TB Elements Portable External Hard Drive - USB 3.0',64))
prodArray.push(new Producto(10,'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',109))
prodArray.push(new Producto(11,'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',109))
prodArray.push(new Producto(12,'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',114))
prodArray.push(new Producto(13,'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',599))
prodArray.push(new Producto(14,'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) Super Ultrawide Screen QLED',999.99))
prodArray.push(new Producto(15,'BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats',56.99))
prodArray.push(new Producto(16,'Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket',29.95))
prodArray.push(new Producto(17,'Rain Jacket Women Windbreaker Striped Climbing Raincoats',39.99))
prodArray.push(new Producto(18,'MBJ Womens Solid Short Sleeve Boat Neck V',9.85))
prodArray.push(new Producto(19,'Opna Womens Short Sleeve Moisture',7.95))
prodArray.push(new Producto(20,'DANVOUY Womens T Shirt Casual Cotton Short',12.99))

agregarCarro.forEach(boton =>{
  boton.onclick=()=>{
    console.log(boton.id);
  }
})