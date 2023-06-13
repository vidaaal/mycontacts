# 📞 MyContacts

Este é um repositório para o projeto MyContacts, uma aplicação de gerenciamento de contatos desenvolvida em ReactJS no Front-End e Node.js com uma imagem de Postgres rodando no Docker no Back-End. Com o MyContacts, os usuários podem armazenar e gerenciar facilmente seus contatos em uma interface intuitiva.

![2021-10-05_12-51](https://user-images.githubusercontent.com/72178841/136058395-9c6f4be5-9858-4207-8afa-fbb79d429005.png)

![2021-10-05_12-51_1](https://user-images.githubusercontent.com/72178841/136058432-a6d43cc4-82c4-443e-8b43-50302c3e76d1.png)

## 🚀 Funcionalidades

O MyContacts possui as seguintes funcionalidades principais:

- ➕ Adicionar um novo contato com informações como nome, número de telefone, e-mail, etc.
- 👀 Visualizar uma lista de todos os contatos cadastrados.
- 🔎 Pesquisar um contato pelo nome.
- 🔄 Atualizar as informações de um contato existente.
- 🗑️ Excluir um contato.

## 🛠️ Tecnologias utilizadas

O projeto MyContacts foi desenvolvido utilizando as seguintes tecnologias:

- ReactJS - Uma biblioteca JavaScript para construção de interfaces de usuário.
- Node.js - Um ambiente de execução JavaScript assíncrono baseado no motor V8 do Chrome.
- Docker - Uma plataforma de contêineres que permite empacotar, enviar e executar aplicativos em ambientes isolados.
- Postgres - Um sistema de gerenciamento de banco de dados relacional de código aberto.

## ✅ Pré-requisitos

Antes de executar o projeto, verifique se você possui as seguintes dependências instaladas:

- Node.js - [Instruções de instalação do Node.js](https://nodejs.org)
- Docker - [Instruções de instalação do Docker](https://docs.docker.com/get-docker/)

## ⚙️ Instalação

Siga as instruções abaixo para configurar o projeto em seu ambiente local:

1. Clone este repositório:

    ```bash
    git clone https://github.com/vidaaal/mycontacts.git
    ```
    
2. Acesse o diretório do projeto:

    ```bash
    cd mycontacts
    ```

4. Acesse a pasta da api:

    ```bash
    cd api
    ```

3. Instale as dependências do Back-End:

    ```bash
    yarn install
    ```

4. Inicie um container do PostgreSQL utilizando o Docker:

    ```bash
    docker run --name mycontacts-postgres -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
    ```

5. Crie um banco de dados no PostgreSQL para o MyContacts:

    ```bash
    docker exec -it mycontacts-postgres psql -U postgres -c "CREATE DATABASE mycontacts"
    ```

6. Inicie o servidor Back-End:

    ```bash
    yarn dev
    ```

7. Acesse a pasta do Front-End:

    ```bash
    cd ../fe
    ```

8. Instale as dependências:

    ```bash
    yarn install
    ```

8. Inicie o servidor Front-End:

    ```bash
    yarn start
    ```

9. Acesse a aplicação em seu navegador:

    ```bash
    http://localhost:3000/
    ```
    
## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
