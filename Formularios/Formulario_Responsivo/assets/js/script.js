
const form = document.getElementById('formcontato');
const campos = document.querySelectorAll("[required]");
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const inputName = document.querySelector("#name");
const inputNumber = document.querySelector("#number");
const inputDate = document.querySelector("#date");

inputNumber.addEventListener("keypress", function(e){
    
    if(!checkChar(e)) {
        e.preventDefault();
    }

});

inputDate.addEventListener("keypress", function(e){
    
    if(!checkChar(e)) {
        e.preventDefault();
    }

});

function checkChar(e){

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(char.match(pattern)) {
        console.log(char);
        return true;
    }

}

inputName.addEventListener("keypress", function(e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    console.log(keyCode);

    if(keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
});


function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }else{
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }else{
        removeError(1);
    }
}

function emailConfirmValidate(){
    if(!emailRegex.test(campos[2].value)){
        setError(2);
    }else{
        removeError(2);
    }
}

function phoneNumber(){
    if(campos[3].value.length < 13){
        setError(3);
    }else{
        removeError(3);
    }
}

function dateNumber(){
    if(campos[4].value.length < 10){
        setError(4);
    }else{
        removeError(4);
    }
}

function formatar(mascara, documento){
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i);

    if(texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1);
    }
}


