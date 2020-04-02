//Desestruturacao 

const usuario = {

  nome: 'Cristiano',
  idade: 29,
  endereco: {
    cidade: 'Setubal',
    pais: 'Portugal',
  }


};

const { nome, idade, endereco:{cidade} } = usuario;
console.log(nome, idade);
