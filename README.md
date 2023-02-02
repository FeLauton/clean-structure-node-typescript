# Estrutura de pastas

| /src
| | /controllers
| | | /controller
| | | |_ controller.ts "Controller with business rules."
| | | |_ protocols.ts "Interface and typing for this controller."
| | |
| | |_ helpers.ts "Common functions between controllers."
| | |_ protocols.ts "Common interface and typing between controllers."
| |
| | /database
| | |_ database.ts "Database connection setup."
| |
| | /models
| | |_ models.ts "Model interface."
| |
| | /repositories
| | | /repository
| | | |_ repository.ts "Repository with controller and database integration."
| | |
| | |_ helpers.ts "Common functions between repositories."
| | |_ protocols.ts "Common interface and typing between repositories"
| |
| | index.ts
|
|_ .env
|_ eslintrc.json
|_ gitignore
|_ package.json
|_ README.md
|\_ tsconfig.json

## .Env example

- PORT=8000
- MONGODB_USERNAME=xxxx
- MONGODB_PASSWORD=xxxxxxxxxxxxxxxxx
- MONGODB_URL=mongodb+srv://xxxxxxxxxxx.xxxxxxx.mongodb.net

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB

## Conceitos utilizados

- SOLID
- Injeção de Dependência (Dependency Injection)
- Repository Pattern

## Entidades

<pre>
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}</pre>

## Rotas

- GET /users - retorna os usuários salvos no banco
- POST /users - cria um usuário
- PATCH /users/:id - atualiza um usuário
- DELETE /users/:id - deleta um usuário
