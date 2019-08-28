function addProduct() {

    const productName = document.querySelector('#productName').value;
    const productPrice = document.querySelector('#productPrice').value;

    fetch(`/admin/add/${productName}/${productPrice}`, {
        method: 'POST',
    })

}

document.querySelector('#addProduct').addEventListener('click', addProduct);