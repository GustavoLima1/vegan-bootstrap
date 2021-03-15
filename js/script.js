let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let areaDeTexto = document.querySelector("#areaDeTexto")

let nomeOK = false
let emailOk = false
let areaDeTextoOk = false

let nome1 = window.document.getElementById("nome1")
let email1 = document.querySelector("#email1")
let areaDeTexto1 = document.querySelector("#areaDeTexto1")

let nomeOK1 = false
let emailOk1 = false
let areaDeTextoOk1 = false

function validaNome() {

    if (nome.value.length > 2) {
        nomeOK = true
    } else {
  
    }
 }

function validaEmail() {

    if(!(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)) {
        emailOk = true
    } else{

        emailOk = false
    }
}
function validaAreaDeTexto() {

    if (areaDeTexto.value.length >= 250) {

       txtAssunto.style.display = 'block'
    } else {
        areaDeTextoOk = true
    }
 }
 
 function enviar() {

    if (nomeOK == true && emailOk ==true && areaDeTextoOk == true) {
       alert ("Formulário enviado com sucesso!")
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }

//  Model contato
 function validaNome1() {

    if (nome1.value.length > 2) {
        nomeOK1 = true
    } else {
  
    }
 }

function validaEmail1() {



    if(!(email1.value.indexOf('@') == -1 || email1.value.indexOf('.') == -1)) {

        emailOk1 = true
    } else{

        emailOk1 = false
    }
}

function validaAreaDeTexto1() {

 
    if (areaDeTexto1.value.length >= 250) {

       txtAssunto.style.display = 'block'
    } else {

        areaDeTextoOk1 = true
    }
 }
 
 function enviar1() {

    if (nomeOK1 == true && emailOk1 ==true && areaDeTextoOk1 == true) {
       alert ("Formulário enviado com sucesso!")
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }