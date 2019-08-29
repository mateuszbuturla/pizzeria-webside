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
                htmlProduct.setAttribute('class', `box`);
                htmlProduct.innerHTML = `<p>Id produktu: <span id="productId">${product._id}</span>
                <br> Numer produktu: ${product.number} 
                <br> Nazwa produktu: ${product.name} 
                <br> Składniki: ${product.components}
                <br> Cena produktu: ${product.price}
                <br> Typ: ${product.type}</p> 
                <div class="actions">
                    <a id="removeProduct">Usuń</a>
                    <a id="editProduct">Edytuj</a>
                </div>`;
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
    window.location.replace('../admin')
}

getProducts();