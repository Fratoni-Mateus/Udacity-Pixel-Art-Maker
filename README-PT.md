# Criador de Arte Pixelada

Um website simples para criar arte em estilo 8-bits.

A ideia deste projeto é de aprofundar e praticar os conhecimentos adquiridos durante o curso da plataforma Udacity *Intro to Programming Nanodegree*.
Embora o site aparente ser simples, nele foram aplicados conceitos importantes.


## Tecnologias utilizadas
Neste projeto eu utilizei HTML5, CSS3, Javascript e manipulação de DOM. Laços, estilização, manipulação de nós e escuta de eventos.


## Desafios enfrentados
Os principais desafios que eu enfrentei foram:

 - Criação da malha
 - Pintar uma célula por clique

 ### Criação malha
 Como o elemento da malha precisa primeramente remover a malha antiga, caso exista, e depois criar uma nova de tamanho variável, o processo precisa identificar o que já está presente na pagina e agir de acordo. A função de criação utiliza uma série de busca de elementos DOM utilizando Javascript para identificar os elementos e iterar os quadrados individuais da malha.

 ### Pintar uma célula por clique
 De modo a criar um ouvinte de eventos (*event listener*) para um elemento que pode ter varição de tamanho e quantidade de elementos, se fez necessário coletar informação sobre a área que recebeu o clique e verificar se o espaço era válido. Utilizando este processo foi possivel criar uma função capaz de pintar uma célula por vez independente do tamanho da malha utilizando apenas uma escuta de eventos (*event listener*), melhorando assim a perfórmace da pagina.

 ## Informações adicionais
 ### Créditos:
 O projeto foi realizado por Mateus Fratoni Souza como etapa do curso *Intro to Programming Nanodegree* do Udacity. https://www.udacity.com/
 
 Algumas partes do código base foram extraidos do repositório público do Udacity em https://github.com/udacity/project-pixel-art-maker-starter.git

### Obrigado por conferir meu trabalho.