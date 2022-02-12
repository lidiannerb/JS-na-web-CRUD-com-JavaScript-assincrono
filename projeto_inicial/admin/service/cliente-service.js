//abaixo estamos criando um template que vai receber os dados da API, para isso temos que guarda-lo dentro de uma função do JS
// os dois acentos graves indicam um template literals, que tem função de fazer o JS entender que ali é uma string.
const criaNovaLinha = (nome, email) => {
    const linhaNovoCLiente = document.createElement('tr') //aqui estamos criando a linha, pois vamos receber vários clientes com nome e email
    const conteudo = ` 
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html" 
                        class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" 
                        type="button">Excluir</button></li>
                </ul>
            </td>                                                                                                   
            `
linhaNovoCLiente.innerHTML = conteudo
    return linhaNovoCLiente
}  //função já está ok, está inserindo o conteudo dentro da linha e retornando essa linha com o conteúdo

const tabela = document.querySelector('[data-tabela]') //percorrendo o DOM e acessando a tabela de clientes

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest() //XMLHttpRequest é o objeto que fornece os métodos para fazer a comunicação com a API, aqui estamos inicializando dentro de uma constante
        //agora já é possível abrir a comunicação entre a aplicação e a API, com o método open abaixo.
        http.open('GET', 'http://localhost:3000/profile') //abrindo a comunic: arg 1: o que pedir ao servidor e arg 2: endereço para onde vou enviar a requisição
             
        http.onload = () => {  // onload: ao carregar a página
                if (http.status <=400){
                    reject(JSON.parse(http.response))
                }else{
                    resolve(JSON.parse(http.response))
                }
            }
        http.send()   
    })     
    return promise  
}

listaClientes()
.then(data => {    
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
})}) 