// rest

function soma(a, b, ...params) {
  return params;
}


console.log(soma(1, 3, 4, 5, 6, 7));


// spread

const usuario1 = {
  nome: 'Cristiano',
  idade: '29',
  cargo: 'Estudante',

};

const usuario2 = {...usuario1, nome: 'Diego'}; 

console.log(usuario2);
