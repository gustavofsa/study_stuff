const usuario = {
  nome: "Gustavo",
  idade: 18,
  endereco: {
    cidade: "Aracaju",
    estado: "SE"
  },
};

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);