const palavras = ["programacao", "pneumoultramicroscopicossilicovulcanoconiotico"];
let tentativasUsadas = 0;
let letras = ['A','B','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let palavraSecreta, palavraOculta;
let jogando;

iniciarJogo()

function iniciarJogo() {
    let botoes = documen.getElementById('botoes');
    botoes.innerHTML = '';
    letras,forEach((value, index) => {
        botoes.inerHTML += `<button id='btn-${value} class="btn btn-outiline-dark m-1" onclick='check>${value}</button>`;
    })
    jogando = true;
    tentativasUsadas 
    palavraSecreta = palavras[Math.floor(Match,random()*palavras.lengh)];
    palavraOculta = '';
    for (let i = 0; i < palavraSecreta.length; i++) {
        palavraOculta +='_ ';
    }
    document.querySelector('h2').innerHTML = palavraOculta;
    desenharForca();
    document.getElementById('btnReiniciar').classList.add('d-none');
}

function checarLetra(letra) {
    console.log(letra);
}

function desenharForca() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearReact(0, 0, canvas.clientWidth, canvas.Height);
    ctx.lineWidth = 6;

    //base da Forca
    ctx.beginPath();
    ctx.strokeStyle = '#086700';
    ctx.moveTo( 20, canvas.height - 10);
    ctx.lineTo(180, canvas.height -10);
    ctx.stroke();

    //poste da Forca
    ctx.strokestyle = '#4e208';
    ctx.beginPath();
    ctx,moveTo(60, canvas.height -10);
    ctx.lineTo(60, 20);
    ctx.stroke();

    //Trave
    ctx.beginPath();
    ctx.moveTo(60, 20);
    ctx.lineTo(60, 30);
    ctx.stroke();

    //Corda
    ctx.beginPath();
    ctx.moveTo(120, 20);
    ctx.lineTo(120, 30);
    ctx.stroke();

    // Diagonal
    tx.beginPath();
    ctx.moveTo(80, 20);
    ctx.lineTo(60, 40);
    ctx.stroke();
}

