import { cincoMinutos } from "./minutos";
import { tempo } from "./seletores";

export let intervalo;

const iniciaTimer = () => {
    let timer = cincoMinutos;
    let minutos = 0;
    let segundos = 0;
    intervalo = setInterval(() =>{
        minutos = parseInt(timer/60, 10);
        segundos = parseInt(timer % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        tempo.textContent = minutos + ":" + segundos;

        if(--timer<0) {
            timer = cincoMinutos;
        }
    }, 1000);
}

export default iniciaTimer;