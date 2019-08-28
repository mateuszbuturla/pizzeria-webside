function getProducts() {
    fetch('/products', {
        method: 'GET',
    })
        .then(r => r.json())
        .then(r => console.log(r));
}

getProducts();