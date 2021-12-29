import iniciaTimer from './modules/iniciaTimer.js';
import paraTimer from './modules/paratimer.js';
import { botaoIniciar, botaoParar } from './modules/seletores.js';

botaoIniciar.addEventListener('click', iniciaTimer);
botaoParar.addEventListener('click', paraTimer);