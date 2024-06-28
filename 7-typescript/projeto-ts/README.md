# CONFIGURAÇÃO DO TYPESCRIPT

1. Inicializar um projeto Node.js: `npm init`
2. Instalar o TypeScript  
   2.1. Instalação global - Instala globalmente na máquina e pode ser usado em qualquer local projeto | Problema de versões que, ao atualizar, pode quebrar projetos antigos: `npm install -g typescript`  
   2.2. Instalação local - Instala apenas dentro do projeto: `npm install typescript`  
    2.2.1. Serve apenas no momento de desenvolvimento do código, não é usado em produção: `npm install typescript --save-dev || npm install typescript -D`
3. Utilizar o TypeScript instalado para transpilar o nosso código - converter nosso código TS para JS: `npx tsc [caminhoparaarquivo.ts]`
4. Utilizar o TypeScript para monitorar o arquivo .ts e executar a transpilação automaticamente: `npx tsc [caminhoparaarquivo.ts] --watch`
5. Inicializar um arquivo de configuração do typescript: `npx tsc --init`  
   5.1. Após a criação do tsconfig.json para rodar o TypeScript no projeto utiliza-se: `npx tsc`
6. Utilizar o TypeScript para monitorar as mudanças nos arquivos .ts e gerar automaticamente os .js: `npx tsc --watch`
