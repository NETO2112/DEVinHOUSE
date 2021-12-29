const $superior = document.getElementById("superior");
const $inferior = document.getElementById("inferior");

$superior.addEventListener("keyup", reloadMeme);
$inferior.addEventListener("keyup", reloadMeme);

function reloadMeme(){
    //recuperar valores
    const textoSup = document.getElementById("superior").value;
    const textoInf = document.getElementById("inferior").value;
    const valorMarcado = document.querySelector("input[name='qualMeme']:checked").value;

    //montar url
    const urlAfraid = `http://apimeme.com/meme?meme=${valorMarcado}&top=${textoSup}&bottom=${textoInf}`;

    //exibir imagem
    const $footer = document.querySelector("footer");

    const imagemExibidaParaOUsuario = document.createElement("img");
    imagemExibidaParaOUsuario.src = urlAfraid;

    $footer.innerHTML="";
    $footer.appendChild(imagemExibidaParaOUsuario)
}

