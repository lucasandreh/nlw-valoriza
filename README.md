# NLW VALORIZA

Projeto desenvolvido durante a sexta edição do evento Next Level Week.

## instalação

Faça um clone do projeto e logo em seguida, já com seu terminal aberto na pasta do projeto rode o comando abaixo:

```bash
$ npm install
ou
$ yarn
```

## Banco de Dados

Editando o arquivo ``ormconfig.json``

Por padrão o projeto usa ``sqlite`` como db, mas você pode mudar isso editando as configurações contidas no arquivo citado acima.

```json
{
    "type": "sqlite",
    "database": "src/database/database.sqlite",
    "migrations": ["src/database/migrations/*.ts"],
    "entities": ["src/models/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/models"
    }
}
```

## Criando tabelas

Para que o projeto crie as tabelas necessárias em seu banco de dados, basta executar o comando `` yarn typeorm migration:run`` e assim que finalizado, pode executar o projeto com o passo abaixo.

## Executando o projeto

Para executar a aplicação, basta seguir o comando abaixo:
```bash
$ yarn dev

output: Server is running...
```

Aplicação finalizada com sucesso, rumo ao próximo nível! 🚀

## Licença
[MIT](https://choosealicense.com/licenses/mit/)
