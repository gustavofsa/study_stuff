// ==> 1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay(); 
  console.log('1s');
  await delay(); 
  console.log('2s');
  await delay(); 
  console.log('3s');
}

umPorSegundo();


// ==> 2
import axios from 'axios';

async function getUserfromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  } catch (err) {
    console.log('Usuário não existe');
  }
}

getUserfromGithub('gustavofsa');
getUserfromGithub('diego3g123456');

// ==> 3
// A URL da api do github pode nao estar ativa mais chegar depois... 
// import axios from "axios";

// class Github {
//   static async getRepositories(repo) {
//     try {
//       const response = await axios.get(`https://api.github.com/repos/${repo}`);
//       console.log(response);
//     } catch (err) {
//       console.log('Repositorio não existe');
//     }
//   }
// }

// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');


// ==> 4
import axios from 'axios';

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
};

buscaUsuario('gustavofsa');

