# Welcome to Stringrow

this is a test project whith 

[Rust Loco framework](https://loco.rs/docs/getting-started/tour/)

## Quick Start

> To configure a database , please run a local postgres database with <code>stringrow:stringrow</code> and a db named <code>stringrow</code>: 
<code>docker run -d -p 5432:5432 -e POSTGRES_USER=loco -e POSTGRES_DB=stringrow -e POSTGRES_PASSWORD="stringrow" postgres:15.3-alpine</code>

- docker-compose ready pg db for local usage at /db folder

install and build your frontend:

```
cd frontend

pnpm i

pnpm build

```

Now start your app:

```
$ cargo loco start

```
