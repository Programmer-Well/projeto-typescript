# Projeto Backend - API de E-commerce

Este é o repositório do projeto backend para uma API de e-commerce completa. A API foi construída com **Node.js** e **TypeScript**, utilizando o framework **Express.js**. Ela foi projetada com uma arquitetura em camadas para garantir a separação de responsabilidades e a manutenibilidade do código.

## ✨ Funcionalidades

A API oferece endpoints para operações CRUD (Create, Read, Update, Delete) completas para os seguintes recursos:

*   **Autenticação**: Geração de token JWT para acesso seguro às rotas protegidas.
*   **Usuários**: Gerenciamento completo dos usuários da aplicação.
*   **Categorias**: Gerenciamento de categorias de produtos.
*   **Produtos**: Gerenciamento de produtos, com relacionamento direto a uma categoria.
*   **Pedidos (Orders)**: Lógica para criação e gerenciamento de pedidos.

## 🛠️ Tecnologias Utilizadas

*   **Node.js**: Ambiente de execução JavaScript no servidor.
*   **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
*   **Express.js**: Framework para construção de APIs REST.
*   **ORM (Prisma / TypeORM / Sequelize)**: Camada de abstração para comunicação com o banco de dados.
*   **PostgreSQL / MySQL**: Banco de dados relacional.
*   **Dotenv**: Para gerenciamento de variáveis de ambiente.
*   **Bcrypt.js**: Para hashing de senhas.
*   **JSON Web Token (JWT)**: Para autenticação e autorização baseada em tokens.
*   **ts-node**: Para executar o projeto TypeScript diretamente em ambiente de desenvolvimento.

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura robusta e escalável, separando claramente as responsabilidades:

```
/
├── src/
│   ├── config/               # Configurações da aplicação (ex: banco de dados)
│   ├── controllers/          # Controladores (lógica de requisição e resposta - req, res)
│   ├── middleware/           # Middlewares (ex: autenticação JWT)
│   ├── Model/                # Definição dos modelos/entidades e suas interfaces TypeScript
│   ├── repositorys/          # Camada de abstração do acesso a dados (Repository Pattern)
│   ├── services/             # Camada de serviço (lógica de negócio da aplicação)
│   ├── types/                # Definições de tipos customizados (ex: para o Request)
│   └── app.ts                # Ponto de entrada e configuração do Express
├── .env                      # Arquivo de variáveis de ambiente (local)
├── .env.example              # Arquivo de exemplo para variáveis de ambiente
├── .gitignore                # Arquivos e pastas ignorados pelo Git
└── package.json              # Metadados do projeto e dependências
```

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para clonar e executar a aplicação em seu ambiente de desenvolvimento.

### Pré-requisitos
*   Node.js (versão 18 ou superior)
*   NPM ou Yarn
*   Um servidor de banco de dados (PostgreSQL ou MySQL) rodando localmente ou em um container Docker.

### 1. Clonar o Repositório
Abra seu terminal e clone este repositório:
```bash
git clone https://github.com/seu-usuario/projeto-type.git
cd projeto-type
```

### 2. Instalar as Dependências
Instale todas as dependências do projeto listadas no `package.json`:
```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto. Você pode copiar o arquivo de exemplo `.env.example` (se houver) ou criar um do zero com o seguinte conteúdo:
```env
# Configurações do Banco de Dados (Exemplo para PostgreSQL)
DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO"

# Porta da Aplicação
PORT=3333

# Segredo para o JWT
JWT_SECRET="seu_segredo_super_secreto_aqui"
```
**Importante**: Certifique-se de que o banco de dados já exista no seu servidor.

### 4. Executar as Migrations
Para criar as tabelas no banco de dados, execute o comando de migration do seu ORM. Se você configurou um script no `package.json`, ele pode ser algo como:
```bash
npm run migrate:dev
```

### 5. Iniciar o Servidor
Execute o comando abaixo para iniciar o servidor em modo de desenvolvimento (geralmente com `ts-node-dev` ou similar, que reinicia automaticamente ao salvar alterações):
```bash
npm run dev
```
Se tudo ocorrer bem, você verá uma mensagem no terminal indicando que o servidor está rodando na porta especificada (ex: `Servidor rodando na porta 3333`).

## 🧪 Endpoints da API
A API estará disponível em `http://localhost:3333`.

Para uma lista completa de endpoints, métodos HTTP e como utilizá-los, consulte a coleção do Insomnia/Postman do projeto ou os arquivos de rotas dentro de `src/`.
