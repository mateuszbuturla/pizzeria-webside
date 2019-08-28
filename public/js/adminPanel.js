let removeProductButtons = undefined;

function getProducts() {
    fetch('/products', {
        method: 'GET',
    })
        .then(r => r.json())
        .then(products => {
            products.products.forEach((product, index) => {
                let htmlProduct = document.createElement('div');
                htmlProduct.setAttribute('id', `product${index}`);
                htmlProduct.innerHTML = `<p>Id produktu: <span id="productId">${product._id}</span><br> Nazwa produktu: ${product.name} <br> Cena produktu: ${product.price}</p> <a id="removeProduct">Usuń</a>`;
                document.querySelector('#container').appendChild(htmlProduct);
            });
            document.querySelector('#loading').style.display = "none";
            removeProductButtons = document.querySelectorAll('#removeProduct');

            document.querySelectorAll('#removeProduct').forEach((product, index) => {
                product.addEventListener('click', () => {
                    removeProduct(document.querySelector(`#product${index} p span#productId`).innerText);
                })
            })
        });
}

function removeProduct(id) {
    fetch(`/admin/remove/${id}`, {
        method: 'POST',
    })
}

getProducts();