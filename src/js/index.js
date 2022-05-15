// uma linha de comentario
/* comentario texto
*/

/*Lógica do Código:
Objetivos:
1 - quando passar o mouse em cima do personagem temos que:
    - colocar a classe selecionada no personagem que passamos o mouse, para adicionar a animação;
    - retirar nesse momento a classe selecionado do personagem que está selecionado

2 -  quando passar o mouse em cima de um personagem da listagem mudar a imagem grande e o seu nome quando selecionar o personagem:
    - alterar a imagem do personagem do jog. 1
    - alterar o nome do jogador 1
*/


// Objetivo 1:
// acesso ao objeto document --> 
// () => arrow function 
//console.log(document)  

// const homemDeFerro = document.getElementById('homem-de-ferro') 
// homemDeFerro.addEventListener('mouseenter', () => {
//     console.log('mouse passou')
//      acessando a classe do personagem no html
//     console.log(homemDeFerro.classList)
//      adicionando a nova classe ao elemento
//     homemDeFerro.classList.add('selecionado')
// })

// const hulk = document.getElementById('hulk')

// hulk.addEventListener('mouseenter', () => {
//     hulk.classList.add('selecionado')
// })


// Objetivo 1:
//refatorando o código
//selecionado os elementos da list com a classe personagem, afim de poder iterar sobre os elementos da lista
const personagens = document.querySelectorAll('.personagem')
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
        if (idSelecionado === 'ultron') return;
        
        // Objetivo 1:
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')        
    personagem.classList.add('selecionado') 
    
    // Objetivo 2:
   
    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`
    const nomeJogador1 = document.getElementById('nome-jogador-1')
    const nomeSelecionado = personagem.getAttribute('data-name');
    nomeJogador1.innerHTML = nomeSelecionado
    })
})




