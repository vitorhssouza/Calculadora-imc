/* Utilizando o prompt  

let nome, peso, altura, idade; 

nome = prompt('Informe seu nome: ');
peso = prompt(`${nome}, informe seu peso: `);
altura = prompt(`${nome}, informe sua altura: `);
idade = prompt(`${nome}, informe sua idade: `);

imc = peso / (altura ** 2)

if (imc < 18.5){
    console.log(`${nome} você encontra-se abaixo do peso.`)
    alert(`${nome} você encontra-se abaixo do peso.`)
}else if (imc >= 18.5 && imc < 25){
    console.log(`${nome} você encontra-se no peso ideal`) 
    alert(`${nome} você encontra-se no peso ideal`)
} else if (imc >= 25 && imc < 30){
    console.log(`${nome} você encontra-se com sobrepeso.`)
    alert(`${nome} você encontra-se com sobrepeso.`)
}else if (imc >= 30 && imc < 35){
    console.log(`${nome} você encontra-se com obesidade grau 1.`)
    alert(`${nome} você encontra-se com obesidade grau 1.`)
}else if (imc >= 35 && imc <= 40){
    console.log(`${nome} você encontra-se com obesidade grau 2.`)
    alert(`${nome} você encontra-se com obesidade grau 2.`)
} else{
    console.log(`${nome} você encontra-se com obesidade grau 3.`)
    alert(`${nome} você encontra-se com obesidade grau 3.`)
}       */ 

// Utilizando direto o js direto no script do html do projeto 

const nome = document.querySelector('#nome')
const idade = document.querySelector('#idade')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const resultado = document.querySelector('#resultado')


const imc = () => {

if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classificacao = ''

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso'
    } else if (imc < 25) {
        classificacao = 'Peso normal'
    } else if (imc < 30) {
        classificacao = 'Acima do peso'
    } else if (imc < 35) {
        classificacao = 'Obesidade Grau I'
    } else if (imc < 41) {
        classificacao = 'Obesidade Grau II'
    } else {
        classificacao = 'Obesidade Grau III'
    }
    
    resultado.innerHTML = `${nome.value} seu imc é: ${imc} (${classificacao})`
} else {
    resultado.innerHTML = 'Preencha os campos'
}
}
