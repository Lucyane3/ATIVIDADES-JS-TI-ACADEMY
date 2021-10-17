import {dadosCep} from './script.js';

const btnAcharCep = document.querySelector("#btnAcharCep");
const NumeroCep = document.querySelector("#NumeroCep");

btnAcharCep.addEventListener('click', function(){
    dadosCep(NumeroCep.value);
});