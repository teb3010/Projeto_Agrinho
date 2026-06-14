# Feira de Pitanga

Projeto de site para divulgação e reserva de produtos da Feira de Pitanga, com foco em agricultura familiar, acessibilidade e uso simples pela comunidade.

## Objetivo

A plataforma permite que visitantes conheçam os produtos disponíveis, façam cadastro, reservem itens para retirada na feira e deixem comentários sobre a experiência.

## Funcionalidades

- Lista de produtos com categoria, produtor, preço, estoque e unidade de medida.
- Cadastro e login com nome, sobrenome e senha.
- Senha com mínimo de 6 caracteres.
- Reservas permitidas apenas para usuários logados.
- Carrinho com controle de quantidade, remoção de itens e valor total.
- Finalização de reservas com data e horário da próxima feira.
- Menu do usuário acessado pelo botão com o nome da pessoa logada.
- Alteração de senha no menu do usuário.
- Consulta, alteração e cancelamento de reservas finalizadas.
- Botão para salvar alterações feitas em reservas.
- Visualização e remoção dos comentários feitos pelo usuário logado.
- Remoção direta de comentários feitos como visitante.
- Modo escuro.
- Controle de tamanho da fonte.
- Leitura por voz em blocos menores para melhorar o uso em celulares.

## Horários da feira

- Quartas-feiras: das 13h às 17h.
- Sábados: das 8h às 12h.

## Arquivos principais

- `index.html`: estrutura da página.
- `style.css`: estilos visuais, responsividade e modo escuro.
- `script.js`: produtos, login, carrinho, reservas, comentários e acessibilidade.

## Como abrir o projeto

Basta abrir o arquivo `index.html` no navegador.

Para testar de forma mais parecida com uma publicação online, também é possível publicar a pasta no GitHub Pages.

## Dados salvos

O projeto usa `localStorage`, então os dados ficam salvos apenas no navegador usado pela pessoa:

- usuários;
- carrinho;
- reservas;
- comentários;
- tema claro/escuro;
- tamanho da fonte.

Isso significa que não há banco de dados externo nem servidor. Para um projeto escolar e demonstrativo, esse formato é suficiente.

## Reset de teste

No console do navegador, é possível executar:

```js
resetFeira()
```

Esse comando limpa estoque salvo, carrinho, usuários, reservas e comentários, voltando o projeto para o estado inicial.

## Observação

As imagens dos produtos usam caminhos como `assets/images/alface.jpg`. Para elas aparecerem corretamente, os arquivos de imagem precisam existir dentro dessa pasta.
