//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let colidiu = false;

//Velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raio = diametro / 2;

//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 105 ;
let alturaRaquete = 90;
let comprimentoRaquete = 10;

//Variáveis da Raquete do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
  trilha = loadSound("trilha.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  colisaoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentoRaquete();
  colisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  incluiPlacar();
  marcaPonto();
  
}
function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinha(){
  if(xBolinha+raio> width ||
    xBolinha-raio<0){
    velocidadeXBolinha *= -1;
    
  }
  
  if(yBolinha+raio> height ||
     yBolinha-raio<0) {
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete (x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete)
}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
   if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
}

function movimentoRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 85;
  yRaqueteOponente += velocidadeYOponente
}
function colisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
  if (colidiu){
    velocidadeXBolinha *= -1
    raquetada.play();
  }
}
function incluiPlacar(){
  textAlign(CENTER)
  textSize(20)
  fill(255)
  text(meusPontos, 150, 26)
  text(pontosDoOponente, 450, 26 )
}
function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}


