const produtos = [];
let proxId = 0;

const getprodutoIdx = id => produtos.map(l => l.id).indexOf(id);

const produtoRepositorty = {
    adicionar : (produto) => {
       let novo = {
           id: proxId++,
           nomeP: produto.nomeP,
           valor: produto.valor
       }
       produtos.push(novo)
       return novo
    },
    recuperar: id => produto[getprodutoIdx(id)],
    alterar: (id , novo) => {produtos[getprodutoIdx(id)] = novo; novo.id = id; return novo;},
    remover: id => produtos.splice(getprodutoIdx(id),1),
    todos: () => produtos
};

module.exports = produtoRepositorty;