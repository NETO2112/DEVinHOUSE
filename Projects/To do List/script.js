let dados; //matriz que salvará os dados

carregar();
mostrar();

//função que adiciona os inputs ao local storage
function adicionar() {
    let entrada = document.getElementById("input").value; //pega a entrada enviada
 
    carregar(); //chama a função que carrega os dados salvos no local storage

    let tarefa = new Object(); //criando um objeto para armazenar os dados
    tarefa.input = entrada; //armazena a tarefa digitada
    tarefa.check = false; //armazena se está checked ou não (por padrão, não está)

    dados.push(tarefa); //armazena o objeto com os dados na matriz
    
    salvar(dados); //chama a função que salvará os dados no local storage
    limpar(); //chama a função que limpará o campo de texto
    mostrar(); //chama a função que fará aparecer as tarefas na tela
    ativar();
}

//função que limpa o campo de texto
function limpar() {
    document.getElementById("input").value=""; //limpa o campo de texto
}

//função que carrega os dados no local storage
function carregar() {
    let dadosLocais = localStorage.getItem("Lista"); //chama a lista armazenada

    if (dadosLocais != null) {
        dados = JSON.parse(dadosLocais);
    }
    else {
        dados = [];
    }
}

//função que salva os dados no local storage
function salvar(input) {
    localStorage.setItem("Lista",JSON.stringify(input));
}

//função que mostra as tarefas na tela
function mostrar() {
    let novaLI = "";
    dados.forEach((element,index) => { //cria as li's baseado no checkbox true/false
        if(dados[index].check == true) {
            novaLI += `<li class="check"><input type="checkbox" id="cb${index}" class="cb" onchange="checar(${index})" checked>${dados[index].input}<button class="lixo" onclick="deletar(${index})"><i class="fas fa-trash"></i></button></li>`;
        }
        else {
            novaLI += `<li><input type="checkbox" id="cb${index}" class="cb" onchange="checar(${index})">${dados[index].input}<button class="lixo" onclick="deletar(${index})"><i class="fas fa-trash"></i></button></li>`;
        }
    });

    let lista = document.getElementById("lista"); //pega a ul
    lista.innerHTML = novaLI; //injeta a li criada no html
}

//função para deletar a tarefa
function deletar(index){
    let confirma = window.confirm("Certeza que queres excluir a tarefa?");
    if (confirma) { //se a pessoa confirmar, a li será excluída
        dados.splice(index, 1); //deleta a li
        salvar(dados);
        mostrar();
    }
}

//função para salvar o check do checkbox
function checar(index) {
    if(dados[index].check == true) {
        dados[index].check = false;
    }
    else {
        dados[index].check = true;
    }
    document.getElementById(`cb${index}`).parentElement.classList.toggle("check");
    salvar(dados);
}

//função para ativar o botão adicionar
function ativar() {
    let entrada = document.getElementById("input").value;
    let btnadicionar = document.getElementById("btnadd");
    if (entrada.trim()!=0) {
        btnadicionar.classList.add("ativado");
    }
    else {
        btnadicionar.classList.remove("ativado");
    }
}