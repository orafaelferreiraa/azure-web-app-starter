# Web App simples

Projeto minimo para publicar uma pagina simples no Azure Web App.

## Pre-requisitos

- [Node.js](https://nodejs.org/) versao 18 ou superior
- Um editor de codigo (recomendado: [VS Code](https://code.visualstudio.com/))
- Git (opcional, para clonar o codigo do GitHub).
	- Download: https://git-scm.com/downloads

Para verificar se ja tem o Node instalado, abra o terminal e rode:

```bash
node --version
npm --version
```

Se os comandos mostrarem as versoes, esta tudo pronto. Se nao, baixe e instale o Node.js pelo site oficial.

## Estrutura

- `public/index.html`: conteudo da pagina
- `public/styles.css`: estilos
- `server.js`: servidor Express minimo
- `package.json`: configuracao do projeto

## Rodar localmente

1. Abra o terminal na pasta do projeto.
2. Rode `npm install`.
3. Rode `npm start`.
4. Abra `http://localhost:3000`.

## Como conectar e publicar no Azure Web App

### Opcao 1: VS Code + extensao Azure App Service

1. No VS Code, instale a extensao `Azure App Service`.
2. Entre na sua conta Azure pela extensao.
3. No painel Azure, encontre o seu Web App.
4. Clique com o botao direito no Web App e escolha `Deploy to Web App...`.
5. Selecione esta pasta do projeto.
6. Aguarde o upload e abra a URL do Web App.

### Opcao 2: Portal Azure com ZIP Deploy

1. Rode `npm install` so para testar localmente. Nao precisa enviar `node_modules`.
2. Compacte os arquivos do projeto (`package.json`, `server.js`, `public`).
3. No portal Azure, abra o seu Web App.
4. Va em `Deployment Center` ou use `Advanced Tools (Kudu)` quando necessario.
5. Envie o arquivo ZIP para publicacao.

## O que voce precisa verificar no Web App

- O runtime do App Service precisa estar com `Node.js` configurado.
- A aplicacao usa a porta automatica do Azure com `process.env.PORT`.
- O arquivo inicial e `server.js`, iniciado pelo comando `npm start`.

## Personalizacao rapida

- Troque o texto principal em `public/index.html`.
- Troque o email do botao `Contato`.
- Ajuste as cores em `public/styles.css`.