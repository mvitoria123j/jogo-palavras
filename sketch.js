let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
  
}

function palavraAleatoria(){
 palavras = ["Anime", "One Piece","Kimetsu", "Jujutsu", " MHA","jojo"];
return random(palavras); 
}

function inicializaCores(){
 background("black");
  fill("crimson");
  textSize(68);
  textAlign(CENTER, CENTER); 
}
function palavraParcial(minimo, maximo){
 let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}
function draw() {
  inicializaCores();
 
  let texto= palavraParcial(0, width);
  text(texto, 200, 200);
  
  /*(mouseX < 50){
    let palavra = "A";
    text(palavra, 200, 200);
  } else if (mouseX < 100){
    let palavra = "An"
    text(palavra, 200, 200);
  } else if (mouseX < 150){
    let palavra = "Ani"
    text(palavra, 200, 200);
  } else if (mouseX < 200){
    let palavra = "Anim"
    text(palavra, 200, 200);
  } else if (mouseX < 250){
    let palavra = "Anime"
    text(palavra, 200, 200);
  } */
  
} 
