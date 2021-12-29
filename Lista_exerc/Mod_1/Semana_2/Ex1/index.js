var nome = window.prompt("Qual o teu nome?");
var idade = window.prompt("Qual tua idade?");
var esporte = window.prompt("Qual teu esporte favorito?");
var dia = window.prompt("Qual teu dia da semana predileto?");
var alguem = window.prompt("Nome de alguém importante para ti.");
var admira = window.prompt("Nome de alguém que tu admiras.");

var string = `“Hoje, ${dia}, é um dia histórico. Todos os fãs de ${esporte} estão maravilhados com a proeza realizada pelo(a) atleta ${nome}. ${alguem} não conteve as lágrimas ao comentar sobre em uma entrevista e até o(a) ${admira} twittou “é muito bom ver alguém com ${idade} demonstrando tanta habilidade” ”.`;

window.alert(string);