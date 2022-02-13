//Fazendo a conexão com a API: pede os dados e devolve uma resposta
//Com o export na frente da função, deixamos o arquivo 'visível' para os outros arquivos que querem usar
//o lista clientes, no caso, o listaClientes-controller 

const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(response =>{
        return response.json() //retornando a resposta e transformando em um js válido
    })
}

export const clienteService = {
    listaClientes
}