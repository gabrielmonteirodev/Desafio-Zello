/*
Instruções para realização do Desafio-02

Este desafio irá medir o nivel de conhecimento referente a manipulação de elementos da DOM via JS.

Preparação:
    - Veja o video de explicação que se encontra nessa pasta.
    - Acesse o site http://demo.automationtesting.in/Frames.html

Objetivo: Solicito que seja preenchido o input via JS (Single Iframe).
Objetivo Bonus¹: Solicito que seja preenchido o input via JS (Iframe with in an Iframe).

*/

/* COLOQUE O SEU SCRIPT AQUI EMBAIXO */



var iframe = document.getElementById('singleframe');
var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
var input = iframeDocument.querySelector('input');
input.value = 'Quero ser Zello';



