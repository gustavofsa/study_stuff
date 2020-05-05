// REST

function soma(a, b, ...params) {
  return params;
}

console.log(soma(1, 3, 4, 5, 6, 7));

//SPREAD

const usuario1 = {
  nome: "Gustavo",
  idade: 18,
  empresa: "Workana"
};

const usuario2 = { ...usuario1, nome: "Matheus" };

console.log(usuario2);