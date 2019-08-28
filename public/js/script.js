function getProducts() {
    const pizzaContainer = document.querySelector('.pizzaSection .container');
    const drinkContainer = document.querySelector('.drinkSection .container');
    const dumplingContainer = document.querySelector('.dumplingSection .container');
    const salatContainer = document.querySelector('.salatSection .container');

    fetch('/products', {
        method: 'GET',
    })
        .then(r => r.json())
        .then(products => {
            products.products.forEach((product, index) => {
                if (product.type === 'pizza') {
                    let htmlProduct = document.createElement('div');
                    htmlProduct.setAttribute('id', `element${index}`);
                    pizzaContainer.appendChild(htmlProduct);

                    let divTop = document.createElement('div');
                    divTop.setAttribute('class', 'top');
                    document.querySelector(`#element${index}`).appendChild(divTop);

                    let name = document.createElement('h2');
                    name.innerText = `${product.number}) ${product.name}`;
                    document.querySelector(`#element${index} .top`).appendChild(name);

                    let price = document.createElement('p');
                    price.innerText = `${product.price}pln`;
                    document.querySelector(`#element${index} .top`).appendChild(price);

                    let divBottom = document.createElement('div');
                    divBottom.setAttribute('class', 'bottom');
                    document.querySelector(`#element${index}`).appendChild(divBottom);

                    let components = document.createElement('p');
                    components.innerText = `Składniki: ${product.components}`;
                    document.querySelector(`#element${index} .bottom`).appendChild(components);
                }
                else if (product.type === 'salat') {
                    let htmlProduct = document.createElement('div');
                    htmlProduct.setAttribute('id', `element${index}`);
                    salatContainer.appendChild(htmlProduct);

                    let divTop = document.createElement('div');
                    divTop.setAttribute('class', 'top');
                    document.querySelector(`#element${index}`).appendChild(divTop);

                    let name = document.createElement('h2');
                    name.innerText = `${product.number}) ${product.name}`;
                    document.querySelector(`#element${index} .top`).appendChild(name);

                    let price = document.createElement('p');
                    price.innerText = `${product.price}pln`;
                    document.querySelector(`#element${index} .top`).appendChild(price);

                    let divBottom = document.createElement('div');
                    divBottom.setAttribute('class', 'bottom');
                    document.querySelector(`#element${index}`).appendChild(divBottom);

                    let components = document.createElement('p');
                    components.innerText = `Składniki: ${product.components}`;
                    document.querySelector(`#element${index} .bottom`).appendChild(components);
                }
                else if (product.type === 'dumpling') {
                    let htmlProduct = document.createElement('div');
                    htmlProduct.setAttribute('id', `element${index}`);
                    dumplingContainer.appendChild(htmlProduct);

                    let divTop = document.createElement('div');
                    divTop.setAttribute('class', 'top');
                    document.querySelector(`#element${index}`).appendChild(divTop);

                    let name = document.createElement('h2');
                    name.innerText = `${product.number}) ${product.name}`;
                    document.querySelector(`#element${index} .top`).appendChild(name);

                    let price = document.createElement('p');
                    price.innerText = `${product.price}pln`;
                    document.querySelector(`#element${index} .top`).appendChild(price);

                    let divBottom = document.createElement('div');
                    divBottom.setAttribute('class', 'bottom');
                    document.querySelector(`#element${index}`).appendChild(divBottom);

                    let components = document.createElement('p');
                    components.innerText = `Ilość: ${product.components}`;
                    document.querySelector(`#element${index} .bottom`).appendChild(components);
                }
                else if (product.type === 'drink') {
                    let htmlProduct = document.createElement('div');
                    htmlProduct.setAttribute('id', `element${index}`);
                    drinkContainer.appendChild(htmlProduct);

                    let divTop = document.createElement('div');
                    divTop.setAttribute('class', 'top');
                    document.querySelector(`#element${index}`).appendChild(divTop);

                    let name = document.createElement('h2');
                    name.innerText = `${product.number}) ${product.name}`;
                    document.querySelector(`#element${index} .top`).appendChild(name);

                    let price = document.createElement('p');
                    price.innerText = `${product.price}pln`;
                    document.querySelector(`#element${index} .top`).appendChild(price);

                    let divBottom = document.createElement('div');
                    divBottom.setAttribute('class', 'bottom');
                    document.querySelector(`#element${index}`).appendChild(divBottom);

                    let components = document.createElement('p');
                    components.innerText = `Ilość: ${product.components}`;
                    document.querySelector(`#element${index} .bottom`).appendChild(components);
                }
            });
            document.querySelector('#loading').style.display = "none";
        });
}

getProducts();