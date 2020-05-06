# Web GIS

[![Docker](https://img.shields.io/badge/docker-latest-green)](https://www.docker.com/)
[![NodeJS](https://img.shields.io/badge/node-12-green)](https://nodejs.org/en/)
[![TypeScript](https://img.shields.io/badge/typescript-latest-green)](https://www.typescriptlang.org/)
[![Angular](https://img.shields.io/badge/angular-7.2.2-green)](https://angular.io/)
[![Openlayers](https://img.shields.io/badge/openlayers-6.3.1-green)](https://openlayers.org/)

Sistema Web GIS para a visualização de talhões com dados espaço-temporais, permitindo o recorte e buscas de áreas de interesse por extensivo uso da biblioteca [*Openlayers*](https://openlayers.org/).

Para a execução desta aplicação ao é necessário ter o projeto [API Restful](https://github.com/ProjetoIntegradorADSFatec/api-restful) em execução utilizando Docker ou o ambiente de desenvolvimento.

## Execução para o ambiente de micro serviços em Docker
**Obs.:** Necessária instalação do *Node 10+* e *Angular CLI 9+*, não esqueça de modificar o ip do serviço de cache em `app/services/cache-system.ts`.

```
##  Construir o pacote HTML para a execução do http-server
$ ng build

## Copie o arquivo Dockerfile para o pacote recém-gerado
$ cp Dockerfile dist/web-gis && cd dist/web-gis
```

> Para a execução do ambiente em docker execute os seguintes comandos:
```
## Crie uma imagem para a execução do container
$ docker build -t web-gis:latest .

## Fica a criterio do usuario criar um volume para armazenar os dados
$ docker container run --name app-smh-ui -p 8082:8080 -d web-gis:latest
```

Este projeto foi gerado utilizando [Angular CLI](https://github.com/angular/angular-cli) versão 9+.

## Servidor para o ambiente de desenvolvimento

Executar o seguinte comando `ng serve` para executar um novo servidor de desenvolvimento. No navegador procure pelo endereço `http://localhost:4200/`. A aplicação irá realizar a leitura automática de arquivos em conjunto com as alterações implementadas.

## Desenvolvimento de código

Executar o seguinte comando `ng generate component component-name` para gerar um novo componente em Linguagem **TypeScript**.

## Gerando pacotes *HTML*

Execute o seguinte comando `ng build` para gerar o pacote *HTML* para a execução. Use o comando `--prod` **tag** para o ambiente de produção.

## Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Executando testes *end-to-end*

Execute `ng e2e` para executar o testes *end-to-end* via [Protractor](http://www.protractortest.org/)

## Ajuda FAQ

Para maisinformações sobre a usabilidade da interface de linha de comando use `ng help` ou dê uma olhada [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md) .
