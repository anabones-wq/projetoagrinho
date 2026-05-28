function mostrarCuriosidade(){

  const curiosidades = [
    "A capivara consegue nadar muito bem.",
    "A onça-pintada possui uma das mordidas mais fortes entre os felinos.",
    "O tucano usa o bico para regular a temperatura do corpo.",
    "O Paraná possui áreas importantes de preservação da Mata Atlântica."
  ];

  const sorteio = Math.floor(Math.random() * curiosidades.length);

  document.getElementById("textoCurioso").innerHTML =
    curiosidades[sorteio];
}
