var alunos = ["João","Maria","Pedro"];

var objeto = JSON.stringify(alunos);

var alunosObjetosNovamente = JSON.parse(objeto);

document.getElementById("resultado").innerText = alunosObjetosNovamente[0];