// rest

const usuario = {

  nome: 'Cristiano',
  idade: 29,
  funcao: 'estudante',


};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);
