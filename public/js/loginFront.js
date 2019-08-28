document.querySelector('#accept').addEventListener('click', (event) => {
    let login = document.querySelector('#login').value;
    let password = document.querySelector('#password').value;

    if (login === '' || password === '') {
        return;
    }
    fetch(`/admin/login/${login}/${password}`, {
        method: 'POST',
    })
        .then(r => r.json())
        .then(r => {
            if (r.correct) {
                window.location.replace('../admin')
            }
        });
})