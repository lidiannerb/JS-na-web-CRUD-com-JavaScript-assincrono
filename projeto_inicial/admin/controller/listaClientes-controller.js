//abaixo estamos criando um template que vai receber os dados da API, estamos guardando-o dentro de uma função do JS
// os dois acentos graves indicam um template literals, que tem função de fazer o JS entender que ali é uma string, mas contendo JS
//Esta função está inserindo o conteudo dentro da linha e retornando essa linha com o conteúdo

import { clienteService  } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email) => {
    const linhaNovoCLiente = document.createElement('tr') //criando a linha para receber os clientes
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
}  

//Buscando no HTML o corpo da tabela
const tabela = document.querySelector('[data-tabela]') //percorrendo o DOM e acessando a tabela de clientes

//Executando a listaCLientes, que devolve a resposta, e nisso fazemos a iteração para exibir os dados na tela
//Criamos a const clienteService dentro do arquivo cliente-service.js e colocamos ele na frente aqui da 
//função listaClientes, assim estamos trabalhando com módulos e lá na primeira linha também importamos o clienteService
clienteService.listaClientes()
.then(data => {
        data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.
        email))
})})