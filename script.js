// const catalog = [
//     {
//         img: `https://ae04.alicdn.com/kf/S3ba38a784b95477cbf01dbff3cc147e22.jpg_480x480.jpg`,
//         name: `штаны негр`,
//         oldPrice: 298000,
//         newPrice: 343443,
//     },
//     {
//         img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-HTjxyavoTKBSdrKC2-udb-FzhVIXWhGsQ&s`,
//         name: `Ишак Безмозглый`,
//         oldPrice: 1000000,
//         newPrice: 1450000,
//     },
//     {
//         img: `https://1892746395.rsc.cdn77.org/wa-data/public/shop/products/87/30/3087/images/2239/Napitok_Gazirovannyy_Pepsi_10_l.650@2x.jpg`,
//         name: `Пепси 1литр`,
//         oldPrice: 8000,
//         newPrice: 12000,
//     },
//     {
//         img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-HTjxyavoTKBSdrKC2-udb-FzhVIXWhGsQ&s`,
//         name: `Ишак Безмозглый`,
//         oldPrice: 1000000,
//         newPrice: 1450000,
//     },
//     {
//         img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-HTjxyavoTKBSdrKC2-udb-FzhVIXWhGsQ&s`,
//         name: `Ишак Безмозглый`,
//         oldPrice: 1000000,
//         newPrice: 1450000,
//     },
//       {
//         img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-HTjxyavoTKBSdrKC2-udb-FzhVIXWhGsQ&s`,
//         name: `Ишак Безмозглый`,
//         oldPrice: 1000000,
//         newPrice: 1450000,
//     },
// ]

import "./ProductsData.js";

console.log('ytgfytg');


const wrapper = document.querySelector(`.wrapper`)

const cards = ProductsData.map(card => {
    return `
    <div class="card">
    <img src=${card.imageUrl} alt="sdadsads">
    <h3>${card.name} </h3>
    <p>${card.price} ${card.currency} </p>
    <b>${card.brand} </b>
                </div>
    `
}).join(``)

wrapper.innerHTML = cards