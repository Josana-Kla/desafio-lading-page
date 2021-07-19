const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome, 
        email,
    }

    if(nome == '') {
        alert("Preencha o campo nome");
        document.getElementById('nome').focus();
        return false;
    }

    if(email == '' || email.indexOf('@') == -1) {
        alert("Preencha o campo e-mail");
        document.getElementById('email').focus();
        return false;
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)
    
    let content = document.getElementById('content')

    let carregando = `<p>Carregando...</p>`

    let pronto = `<p>Obrigado por se cadastrar! Enviaremos promoções quentinhas para você! ;) </p>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    },1000)
})