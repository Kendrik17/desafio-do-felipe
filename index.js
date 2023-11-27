let nome = "kendrik hero"
let xp = 1
let nivel

for (xp = 1; nivel < 1.000; xp+= 1000 ){
    console.log("voce assisstiu todas as aulas R: Sim" + xp)
}
for (xp = 1.000; nivel < 2.000; xp+=1000 ){
    console.log("voce assisstiu todas as aulas R: Sim" + xp)
}
for (xp = 2.000; nivel < 5.000; xp+=3.000 ){
    console.log("voce assisstiu todas as aulas R: Sim" + xp)
}
for (xp = 5.000; nivel < 7.000; xp+=2.000 ){
    console.log("voce assisstiu todas as aulas R: Sim" + xp)
}
for (xp = 7.000; nivel < 8.000; xp+=1000 ){
    console.log("voce assisstiu todas as aulas R: Sim" + xp)
}
for (xp = 8.000; nivel < 9.000; xp+=1000 ){
    console.log("voce assisstiu todas as aulas R: Sim" + xp)
}

if (xp < 1.000) {
  nivel = "Ferro";
} else if (xp >= 1.001 && xp <= 2.000) {
  nivel = "Bronze";
} else if (xp >= 2.001 && xp <= 5.000) {
  nivel = "Prata";
} else if (xp >= 6.001 && xp <= 7.000) {
  nivel = "Ouro";
} else if (xp >= 7.001 && xp <= 8.000) {
  nivel = "Platina";
} else if (xp >= 8.001 && xp <= 9.000) {
  nivel = "Ascendente";
} else if (xp >= 9.001 && xp <= 10.000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Exibir a mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nome + " está no nível de " + nivel);