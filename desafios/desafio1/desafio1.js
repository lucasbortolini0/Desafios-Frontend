// function de pesquisa de usurios
function buscarUsuario(usuarios, valorPesquisa) {
  return new Promise((resolve, reject) => {
    for (const usuario of usuarios) {
      if (Object.values(usuario).some(propriedade => propriedade === valorPesquisa)) {
        resolve(usuario);
        return;
      }
    }
    reject("Usuário não encontrado");
  });
}

// Array utilizado
const arrayUsuarios = [
  { nome: "Luiz", idade: 22, email: "luiz@email.com" },
  { nome: "Bob", idade: 26, email: "bob@email.com" },
  { nome: "Vanessa", idade: 22, email: "vanessa@email.com" }
];

// pode valor de pesquisa pode ser: nome, idade ou email...
const valorPesquisa = "Vanessa"; 

buscarUsuario(arrayUsuarios, valorPesquisa)
  .then(usuarioEncontrado => console.log("Usuário encontrado:", usuarioEncontrado))
  .catch(erro => console.error(erro));
