# <div align="center"> 🔷🔗 MARKDOWN LINKS 🔗🔷</div>

#### <div align="center"> _Uma biblioteca capaz de ler arquivos em formato Markdown, extrair os links contidos nele, e validá-los!_ </div>

***

## Resumo do projeto

Neste projeto, foi desenvolvida uma **biblioteca** de códigos, responsável por checar os links de um arquivo, do tipo Markdown (.md). Seu desempenho está na capacidade de **verificar se a extensão do arquivo é .md**, se for,ela irá abrir e **ler o arquivo**, **procurar os links disponíveis** dentro dele, e **realizar a validação** de cada um. Além disso, também é possível **visualizar estatísticas** sobre os links contidos no arquivo, como o total deles, a quantidade que funciona ou não (obtidas atráves da validação), e, quais estão repetidos. Para a **utilização da biblioteca**, existem duas formas possíveis, ou **realizando importações** (com _require_ para usá-lo no seu código), ou **rodando pelo terminal** (executável que pode ser chamado por linha de comando). Durante a visualização, é possível verificar a exibição de tabelas, apresentando a **URL** encontrada, o **texto** que aparece dentro do link, e a **rota do arquivo** onde ele foi encontrado. Como também, na parte de validação, além dessas três propriedades, são revelados os **códigos de resposta HTTP** (indicando se o link é válido ou não), e uma **mensagem de confirmação** para comprovar se está tudo em ordem, ou se houve alguma falha. É importante destacar, que, se houver algum tipo de erro, mensagens descritivas são exibidas para ajudar o usuário.

***

## FLUXOGRAMA

Antes de iniciar o projeto, foi criado um fluxograma para visualizar com excelência as etapas de desenvolvimento do mesmo, incluindo o planejamento de tarefas e objetivos, seguindo uma sequência lógica de estudos e tomada de decisões. 

<img src= "files/images/FLUXOGRAMA.png" width ="800px" height ="600px"/> 

***

## INSTALAÇÃO

Para instalar a biblioteca, execute o seguinte comando no terminal:

### npm i md-links-vanessamenezes

Para utilizar a versão mais recente, execute o seguinte comando no terminal:
(Esta versão não possui atualizações de funcionalidades, somente upgrade de códigos)

**A VERSÃO ACIMA FUNCIONA PERFEITAMENTE!** Caso prefira, pode utlizar!

### npm i md-links-vanessamenezes@0.1.1

***

## FUNCIONALIDADES

As funcionalidades atualmente disponíveis são:

🔷 **Listagem de links**: Exibe os links encontrados nos arquivos com extensão Markdown, mostrando a URL encontrada, o texto descritivo do link e a rota do arquivo.

🔷 **Validação de links**: Verifica se os links encontrados nos arquivos Markdown estão funcionando corretamente, retornando oo código de resposta HTTP, que mostra se o link é válido ou não, e uma mensagem de confirmação para comprovar se está tudo em ordem (OK), ou se houve alguma falha (FAIL). 

🔷 **Estatísticas de links**: Exibe o número total de links encontrados no arquivo, o total de links únicos e o total de links que não estão funcionando corretamente (quebrados).

_Essas funcionalidades se aplicam tanto para um arquivo específico, quanto para um diretório._

***

## INSTRUÇÕES DE USO E COMANDOS

#### 🔹 Listagem de Links 🔹

Para localizar os links em um arquivo de interesse, utilize o comando abaixo:

**md-links ./caminhoDaPasta/nomeDoArquivo.md** 

Esse comando procura arquivos na rota especificada, e imprime através de uma tabela os links encontrados, juntamente com o texto descritivo do link e a rota do arquivo em que cada link foi encontrado, como o exemplo abaixo: 

<img src= "files/images/CAMINHODOARQUIVO.png" width ="750px" height ="500px"/> 

***

#### 🔹 Validação de Links 🔹

Para validar os links em um arquivo de interesse, utilize o comando abaixo:

**md-links ./caminhoDaPasta/nomeDoArquivo.md --validate** 

Esse comando com a flag _--validate_, fará uma requisição HTTP para verificar se cada link funciona ou não, apresentando uma tabela com o código de resposta (status HTTP) e uma mensagem correspondente (OK em caso de sucesso ou FAIL, se houver alguma falha). Exatamente como o exemplo abaixo:

<img src= "files/images/VALIDATE.png" width ="850px" height ="700px"/> 

*** 

#### 🔎 Estatísticas de links 🔎

Para verificar a quantidade total de links e os links únicos em um arquivo de interesse, utilize o comando abaixo:

**md-links ./caminhoDaPasta/nomeDoArquivo.md --stats** 

Esse comando com a flag _--stats_, exibirá em uma tabela o número total de links encontrados no arquivo e o total de links únicos. A informação retorna da seguinte maneira ao usuário:

<div align="center"> <img src= "files/images/STATS.png" width ="450px" height ="200px"/> </div>

Já para verificar a quantidade total de links, os links único e os links quebrados (que não funcionam) em um arquivo de interesse, utilize o comando abaixo:

**md-links ./caminhoDaPasta/nomeDoArquivo.md --stats --validate** 

Esse comando com as flags em conjunto (com espaço entre elas), _--stats --validate_ exibirá em uma tabela o número total de links encontrados no arquivo, o total de links únicos, e o número total de links quebrados. A informação retorna da seguinte maneira ao usuário:

<div align="center"> <img src= "files/images/STATSANDVALIDATE.png" width ="450px" height ="200px"/> </div>

***

#### ❌ MENSAGENS DE ERRO ❌

As mensagens de erro são exibidas caso haja alguma instabilidade nos comandos digitados da biblioteca ou caso tenha acontecido algum problema durante a validação dos links.

**Arquivo em outro formato que não seja markdown:**

Esta biblioteca é responsável por checar somente arquivos com a extensão (.md), sendo assim, qualquer outro formato não é aceito para leitura, e aparece com a seguinte mensagem:

<div align="center"> <img src= "files/images/ARQUIVOEMOUTROFORMATO.png" width ="700px" height ="100px"/> </div>

**Arquivo e/ou diretórios inexistentes:**

Caso a biblioteca identifique que o arquivo e/ou a rota especificada não exista, é retornada a seguinte mensagem de erro: 

<div align="center"> <img src= "files/images/ARQUIVOINESXISTENTE.png" width ="700px" height ="100px"/> </div>

**Arquivo vazio:**

Caso a biblioteca identifique um arquivo que possua a extensão (.md), porém esteja vazio (sem nenhum caractere, texto e/ou links), conseguimos observar a mesma mensagem: 

<div align="center"> <img src= "files/images/ARQUIVOVAZIO.png" width ="700px" height ="100px"/> </div>

**Arquivo que não possua links:**

Caso a biblioteca identifique um arquivo que possua a extensão (.md), porém este arquivo não contenha nenhum link dentro dele, a mensagem de erro que aparece é a seguinte: 

<div align="center"> <img src= "files/images/ARQUIVOSEMLINKS.png" width ="700px" height ="100px"/> </div>

***

### ESTE PROJETO FOI CRIADO E DESENVOLVIDO POR:

### [VANESSA MENEZES](https://github.com/VanessaNMenezes) 💙

***