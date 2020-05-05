//dependencias necessárias:
// @babel/plugin-transform-async-to-generator 
// @babel/polyfill


const minhaPromise = () => new Promise((resolve,reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

// async function executarPromise() {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// }

const executarPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executarPromise();