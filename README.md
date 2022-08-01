# 🚀 Car Shop 🚀

- Essa aplicação implementa os princípios de `POO` para a construção de uma API com `CRUD` para gerenciar uma concessionária de veículos utilizando o banco de dados `MongoDB`.

### Habilidades trabalhadas:

- Exercitar o conhecimento dos pilares da `Programação Orientada a Objetos`: `Herança`, `Abstração`, `Encapsulamento` e `Polimorfismo`;
- Exercitar o Docker;
- Exercitar a criação e utilização de `Interfaces`;
- Implementar, em `TypeScript`: `Classes`, `Instâncias`, `Atributos`, `Métodos` e `Objetos`;
- Aplicar os conhecimentos de `MongoDB`, `Typescript` e `POO` para criar uma API com `CRUD`.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] Fazer 100% de cobertura de testes
- [ ] Produzir testes de integração.
- [ ] Produzir documentação para a API
---
## 🚀 Instalando Car Shop

Para instalar o Car Shop, siga estas etapas:
(sistema operacional linux)

Abra seu terminal <ctrl> + <alt> + <t>
  
Clone o repositório:
```
git@github.com:lelec0/carShop.git
```
Entre na pasta do repositório que você acabou de clonar:
 ```
cd car-shop
  ```
Instale as dependências:
 ```
npm install
  ```
Rode os serviços node e mongodb com o comando:
 ```
docker-compose up -d
  ```
Lembre-se de parar o mongo se estiver usando localmente na porta padrão (27017), ou adapte, caso queria fazer uso da aplicação em containers
Esses serviços irão inicializar um container chamado car_shop e outro chamado car_shop_db.

A partir daqui você pode rodar o container car_shop via CLI ou abri-lo no VS Code.
Use o comando:
 ```
docker exec -it car_shop bash
  ```
Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

Para rodar a aplicação:
  ```
  npm run dev
  ```
  
 Para rodar os testes:
  ```
  npm run test:dev
  ```
Agora é só acessar seu [localhost:3000](http://localhost:3000) 
 
Projeto desenvolvido durante o curso da [Trybe](https://github.com/tryber).
