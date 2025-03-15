const form = document.getElementById('form-validacao');
const pontoA = document.getElementById('numero-A');
const pontoB = document.getElementById('numero-B');

function calcular(numeros){
    numeros = pontoA.value > pontoB.value
    return numeros
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var inputNumero1 = document.getElementById("numero-A").value;
    var inputNumero2 = document.getElementById("numero-B").value;

    var numeroA = parseInt(inputNumero1);
    var numeroB = parseInt(inputNumero2);

    const sucesso = `muito bem ${pontoA.value} é menor do que ${pontoB.value}`
    const erro = ` erro o numero ${pontoA.value} é maior do que ${pontoB.value} `

    const menssagemSucesso = document.querySelector('.sucess-message')
    const menssagemErro = document.querySelector('.error-message')

    if (pontoA.value >= pontoB.value) {
        pontoA.style.border = '1px solid red'
        menssagemErro.style.display = 'block'

    } else {

        menssagemSucesso.innerHTML = sucesso
        menssagemSucesso.style.display = 'block'

    }

})

