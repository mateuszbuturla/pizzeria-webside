function addProduct() {

    const productNumber = document.querySelector('#productNumber').value;
    const productName = document.querySelector('#productName').value;
    const productComponent = document.querySelector('#productComponents').value;
    const productPrice = document.querySelector('#productPrice').value;
    const productType = document.querySelector('#productType').value;

    fetch(`/admin/add/${productNumber}/${productName}/${productComponent}/${productPrice}/${productType}`, {
        method: 'POST',
    })

}

document.querySelector('#addProduct').addEventListener('click', addProduct);