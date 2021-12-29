const $circuloPrincipal = document.querySelector("#circuloPrincipal");
let _tamanhoDaDiminuicao = 0;
let _perdeu = false;
setInterval(()=>{
    //let largura = parseInt(getComputedStyle($circuloPrincipal).width);
    //let largura = $circuloPrincipal.getBoundingClientRect().width;
    //let altura = $circuloPrincipal.getBoundingClientRect().height;
    const size = recuperaDimensaoDoCirculo();
    let altura = size.largura;
    let largura = size.altura;

    $circuloPrincipal.style.height = (altura - _tamanhoDaDiminuicao) < 0 ? 0 : (altura - _tamanhoDaDiminuicao) + "px";
    $circuloPrincipal.style.width = (largura - _tamanhoDaDiminuicao) < 0 ? 0 : (largura - _tamanhoDaDiminuicao) + "px";
    gameOver();
},100);

$circuloPrincipal.addEventListener("click", e =>{
    const size = recuperaDimensaoDoCirculo();
    let altura = size.largura;
    let largura = size.altura;
    $circuloPrincipal.style.height = (altura + 15) + "px";
    $circuloPrincipal.style.width = (largura + 15) + "px";
    _tamanhoDaDiminuicao += 0.2;
    gameOver();
})

function gameOver() {
    const ObjetoComDimensoes = recuperaDimensaoDoCirculo();
    if(ObjetoComDimensoes.altura <1 || ObjetoComDimensoes.altura > 500) {
        const result = confirm("Game-Over meu patrão ou minha patroa. Deseja jogar novamente?");
        if(result) {
            window.location.reload();
        }
    }
}

function recuperaDimensaoDoCirculo() {
    return {
        largura: $circuloPrincipal.getBoundingClientRect().width,
        altura: $circuloPrincipal.getBoundingClientRect().height}
}