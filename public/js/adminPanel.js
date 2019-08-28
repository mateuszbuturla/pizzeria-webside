function getProducts() {
    fetch('/products', {
        method: 'GET',
    })
        .then(r => r.json())
        .then(products => {
            products.products.forEach(product => {
                let htmlProduct = document.createElement('div');
                htmlProduct.innerText = `Nazwa produktu: ${product.name} | Cena produktu: ${product.price}`;
                document.body.appendChild(htmlProduct);
            });
        });
}

getProducts();