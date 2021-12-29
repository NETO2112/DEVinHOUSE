let nsatis=0,npart=0;

function participar() {

    var nome = window.prompt("Digite seu nome:");

    var satis = window.prompt("Digite um número de 1 a 10 para expressar sua satisfação");

    satis = parseInt(satis);

    if (Number.isNaN(satis) || satis<1 || satis>10) {
        window.alert("DIGITE UM NÚMERO VÁLIDO");
        return;
    }

    var idade = window.prompt("Digite sua idade");

    idade = parseInt(idade);

    if (Number.isNaN(idade)) {
        window.alert("DIGITE UM NÚMERO");
        return;
    }

    var list = window.confirm("Podemos incluir você na lista de satisfeitos?");

    if (list) {
        nsatis += 1;
    }

    var alerta = window.alert("Salvo com sucesso!");

    npart += 1;

    var tnpart = document.getElementById("npart");

    tnpart(npart);
}