# api_MathFlix

![GitHub](https://img.shields.io/github/license/MSpilari/api_MathFlix)
![npm](https://img.shields.io/npm/v/express?label=express)
![npm](https://img.shields.io/npm/v/cors?label=cors)
![npm](https://img.shields.io/npm/v/dotenv?label=dotenv)
![npm](https://img.shields.io/npm/v/sequelize?label=Sequelize)
![npm](https://img.shields.io/npm/v/pg?label=pg)

Essa é a API que está sendo consumida pela [**MathFlix**](https://math-flix.vercel.app/)

## Rotas

- **Categorias**
  - Uma rota que **cria(CREATE)** as categorias no banco de dados.
  - Uma rota que **lista(READ)** todos as categorias do banco de dados.
  - Duas rotas de **deleção(DELETE)**.
    - Uma delas deleta apenas uma categoria específica.
    - Outra deleta todas as categorias do Banco de dados.

- **Vídeos**
  - Uma rota que **cria(CREATE)** os vídeos, relacionando-os com uma categoria do banco de dados.
  - Uma rota que **lista(READ)** todos os vídes do banco de dados.
  - Duas rotas de **deleção(DELETE)**.
    - Uma delas deleta apenas um vídeo específico.
    - Outra deleta todos os vídeos do Banco de dados.

- **Mista**
  - Uma rota que faz um **join** entre as tabelas de **categorias** e **vídeos**

## Tecnologias usadas

- [Express](http://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Sequelize](https://sequelize.org/master/)
- [ElephantSQL](https://www.elephantsql.com/)