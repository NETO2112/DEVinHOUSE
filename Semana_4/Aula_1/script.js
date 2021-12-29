function adiciona() {

    let nbox = document.getElementsByClassName("flex-item").length + 1;

    let string = '<li class="flex-item">'+nbox+'</li>';
    
    let itens = document.getElementsByClassName("flex-container")[0].innerHTML;

    itens += string;

    document.getElementsByClassName("flex-container")[0].innerHTML = itens;
}

function retira() {

    let container = document.getElementsByClassName("flex-container")[0];

    container.removeChild(container.lastChild);

}

let invertido = true;

function inverte() {

    let container = document.getElementsByClassName("flex-container")[0];

    if(invertido) {
        /*document.getElementsByClassName("flex-container")[0].style.flexDirection = "row";
        document.getElementsByClassName("flex-container")[0].style.flexWrap = "wrap";*/
        container.style.flexDirection = "row";
        container.style.flexWrap = "wrap";
        invertido = false;
    }

    else {
        document.getElementsByClassName("flex-container")[0].style.flexDirection = "row-reverse";
        document.getElementsByClassName("flex-container")[0].style.flexWrap = "wrap-reverse";
        invertido = true;
    }
}

function justify() {

    let container = document.getElementsByClassName("flex-container")[0];

    let jus = document.getElementById("selecionado").value;

    console.log(jus);

    container.style.justifyContent = jus;

}