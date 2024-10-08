// SECCION DEL NAVBAR: Completo

const navEmail = document.querySelector('.nav-email');
const mobileMenuWeb = document.querySelector('.mobileMenuWeb');
const imgCarrito = document.querySelector('.added');


const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const detailsProduct = document.querySelector('.details');

const cardsContainer = document.querySelector('.cards-container');
const productImgContainer = document.querySelector('#individualDetails');
const productImgCloseIcon = document.querySelector('.closeIcon');

// Mostrar funcion y quitar 

navEmail.addEventListener('click', toogleDesktopMenu);
menuIcon.addEventListener('click', toogleMobileMenuWeb);
imgCarrito.addEventListener('click', toogleDetailProd);
productImgCloseIcon.addEventListener('click', closeProductImg);

function toogleDesktopMenu() {

    // Cerrar detalle de producto

    const isDetailProdClosed = detailsProduct.classList.contains('inactive');

    if (!isDetailProdClosed) {
        detailsProduct.classList.add('inactive');
    }

    closeProductImg();

    desktopMenu.classList.toggle('inactive');
};

function toogleMobileMenuWeb() {

    // Cerrar detalle de producto

    const isDetailProdClosed = detailsProduct.classList.contains('inactive');

    if (!isDetailProdClosed) {
        detailsProduct.classList.add('inactive');
    }

    closeProductImg();

    mobileMenuWeb.classList.toggle('inactive');
};

function toogleDetailProd() {

    // Cerrar menú mobile

    const isMobileMenuClosed = mobileMenuWeb.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenuWeb.classList.add('inactive');
    }

    // Cerrar menú desktop

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    //Cerrar detalle de imagen si abrimos carrito
    const isProductImgContainerClosed = productImgContainer.classList.contains('inactive');

    if (!isProductImgContainerClosed) {
        productImgContainer.classList.add('inactive');
    }


    detailsProduct.classList.toggle('inactive');
};


//Abrir detalle de imagen
function openProductImg() {

    detailsProduct.classList.add('inactive');

    productImgContainer.classList.remove('inactive');
};

//Cerrar detalle de imagen
function closeProductImg() {

    productImgContainer.classList.add('inactive');
};


// SECCION DEL HOME: Con productos 

const productList = [];

productList.push({
    name: 'Antivirus industrial: Symantec™ Critical System Protection',
    price: 200,
    image: './products/1.jpg',
});

productList.push({
    name: 'Firewall industrial Stratix 5950 de Rockwell Automation',
    price: 8000,
    image: './products/2.png',
});

productList.push({
    name: 'Firewall industrial ISA 300 de Cisco',
    price: 10000,
    image: './products/3.jpg',
});

productList.push({
    name: 'Protección de End point Umbrella y AMP de Cisco',
    price: 100,
    image: './products/4.jpg',
});

productList.push({
    name: 'Servicios de Consultoría en Seguridad informática',
    price: 500,
    image: './products/5.png',
});

productList.push({
    name: 'Industrial Visibility de Tripwire',
    price: 150,
    image: './products/6.jpg',
});

productList.push({
    name: 'Firewall PortMaster',
    price: 200,
    image: './products/7.jpeg',
});

productList.push({
    name: 'Proton VPN',
    price: 100,
    image: './products/8.jpeg',
});

productList.push({
    name: 'Proxy',
    price: 80,
    image: './products/9.jpg',
});

productList.push({
    name: 'Router',
    price: 300,
    image: './products/10.jpg',
});

productList.push({
    name: 'Shadowsocks Proxy',
    price: 200,
    image: './products/11.jpg',
});

productList.push({
    name: 'Proxy',
    price: 100,
    image: './products/12.jpg',
});

productList.push({
    name: 'Firewall',
    price: 200,
    image: './products/13.jpg',
});

productList.push({
    name: 'ProxyChain',
    price: 350,
    image: './products/14.jpg',
});

productList.push({
    name: 'Gestor de Contraseñas',
    price: 1438,
    image: './products/15.png',
});

productList.push({
    name: 'Cable Ethernet CAT-8 60MTS',
    price: 800,
    image: './products/16.png',
});

productList.push({
    name: 'Cisco Catalyst 3850',
    price: 20000,
    image: './products/17.png',
});

productList.push({
    name: 'Cisco Firepower',
    price: 25000,
    image: './products/18.png',
});

productList.push({
    name: 'Cisco Nexus 9000',
    price: 20000,
    image: './products/19.png',
});

productList.push({
    name: 'Cradlepoint IBR900',
    price: 25000,
    image: './products/20.png',
});

productList.push({
    name: 'Office Home & Business 2024',
    price: 1500,
    image: './products/21.png',
});

productList.push({
    name: 'Palo-Alto-GP-1',
    price: 5000,
    image: './products/22.png',
});

productList.push({
    name: 'Sophos XGS 6500',
    price: 15000,
    image: './products/23.png',
});

productList.push({
    name: 'XGS 5500',
    price: 9000,
    image: './products/24.png',
});


function renderProducts(productList) {

    //Recorrer el array de productos
    for (product of productList) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');


        //product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.classList.add('product');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductImg);

        const productInfo = document.createElement('div');
        productInfo.classList.add('info');


        const productInfoDiv = document.createElement('div');


        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);


        const productFigure = document.createElement('figure');
        const imgAddToCar = document.createElement('img');
        imgAddToCar.setAttribute('src', './icons/addtocar.png');


        productFigure.appendChild(imgAddToCar);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);