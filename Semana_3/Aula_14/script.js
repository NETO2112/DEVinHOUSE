let array_enderecos = [];

function salvar() {
    let enderecos = new Object;

    enderecos.nome = document.getElementById("nome").value;

    enderecos.tipo = document.getElementById("tipo").value;

    enderecos.endereco = document.getElementById("endereco").value;

    var iconeLixo = '<i class="fas fa-trash"></i>';

    if (enderecos.tipo=="Residencial") {
        var iconeTipo = '<i class="fas fa-building"></i>';
    }

    else {
        var iconeTipo = '<i class="fas fa-home"></i>';
    }

    var linha = "<tr><td class='nome'>" + enderecos.nome + "</td><td class='endereco'>" + enderecos.endereco + "</td><td class='tipo'>" + iconeTipo + enderecos.tipo + "</td><td class='ação'>" + iconeLixo + "</td></tr>";
    
    var tabela = document.getElementById("tabela");

    tabela.insertAdjacentHTML("beforeend",linha);

}