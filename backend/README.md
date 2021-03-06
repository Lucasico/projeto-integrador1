# projeto-integrador

## Rodando o projeto em ambiente de desenvolvimento

- Rodando postgres no docker
> `docker run --name projeto-integrador -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres`

> `docker exec projeto-integrador bash`

> `su postgres`

> `psql`

> `CREATE DATABASE "projeto-integrador";`

- Rodando migrations
> `npm run migration:run`

- Rodando a aplicação
> `npm start`



## Utils
- Criando nova migration
> `npm run migration:create <nome_da_migration>`

- Revertendo migration
> `npm run migration:revert`

<br />
<br />

## Rodando aplicação em produção
> `pm2 start ecosystem.config.js`
