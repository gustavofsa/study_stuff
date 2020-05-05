// ==> 1
class User {
  constructor(email, senha) {
    this.email = email;
    this.password = senha;
  }

  isAdmin() {
    if(this.admin) {  
      return true; 
     } else 
      return false;
  }
}

class Admin extends User {
  constructor() {
    super();
    this.admin = true;
  }
}

const User1 = new User("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

console.log(User1);
console.log(Adm1);
console.log(User1.isAdmin())
console.log(Adm1.isAdmin())


// ==> 2 

// 2.1 
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat'  },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const ages = usuarios.map(usuario => usuario.idade);
console.log(ages);

// 2.2
const seniorsRocket = usuarios.filter(usuario => (usuario.idade >= 18 && usuario.empresa == 'Rocketseat'));
console.log(seniorsRocket);


// 2.3
const googleDevs = usuarios.find(usuario => usuario.empresa == 'Google');
console.log(googleDevs);

// 2.4
function doubleAge(usuario) {
  return usuario = {...usuario, idade: usuario.idade * 2};
}

function max50(usuario) {
  return usuario.idade <= 50;
}

const clubeDosNovos = usuarios.map(doubleAge).filter(max50);
console.log(clubeDosNovos);


// ==> 3

//3.1
const arr = [1,2,3,4,5];
const newArr = arr.map(item => item + 10);

//3.2
const usuario = { nome: 'Diego', idade: 23 };
const showAge = (user) => { user.idade };

showAge(usuario);

//3.3
const nome = "Diego";
const idade = 23;

const showUser = ( nome = "Diego", idade = 18 ) => ({ nome, idade });

showUser(nome,idade);
showUser(nome);

//3.4
const promise = () => new Promise((resolve,reject) => resolve());


// ==> 4
function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({nome:'Gustavo', idade: 18}));


// ==> 5

// 5.1
const arr = [1, 2, 3, 4, 5, 6];

const [ x , ...y ] = arr;
console.log(x);
console.log(y);

function soma(...params) {
  return params.reduce((total, next) =>  total + next );
}

console.log(soma(1,2,3));

// 5.2
const user1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const user2 = {...user1, nome: 'Gabriel' };
const user3 = {...user1, endereco: { ...user1, cidade: 'Lontras'} };

console.log(user1);
console.log(user2);
console.log(user3);


// ==> 6
const usuario = 'Diego'
const idade = 23;

console.log(`O usuário ${usuario} possui idade ${idade} anos`);


// ==> 7
const nome = 'Gustavo'
const idade = 18;

const usuario = {
  nome,
  idade,
  cidade: 'Aracaju'
};

console.log(usuario);