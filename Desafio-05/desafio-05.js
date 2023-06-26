/*
Instruções para realização do Desafio-02

Este desafio irá medir o nivel de conhecimento referente a manipulação de elementos da DOM via JS.

Preparação:
    - Veja o video de explicação que se encontra nessa pasta.
    - Acesse o site http://www.rpachallenge.com/

Objetivo: Solicito que seja preenchido todos os campos (Não clickar no botão "Submit" ou realizar o envio do Formulario),
lembrando que esses campos possuem o "ID" de forma dinamica. 

*/

/* COLOQUE O SEU SCRIPT AQUI EMBAIXO */

var form = document.querySelector("form");
var inputs = form.querySelectorAll("input");
inputs.forEach(function(input) {
    if(input.type !== 'submit'){
    var fieldValue = "Zello ";
    input.value = fieldValue;
    }
});