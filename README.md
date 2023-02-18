# Redgrid.energy.schema
This is the database schema for Redgrid.energy (nanogrid)
We are using Prisma which manages mysql database through a library layer.
This is the API Reference for how to create the schema:
https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference

## Development Environment Setup Locally

Install `mysql` to your system and make sure it is running.
You have to set a password for the user `root` or you can use any user you like into your mysql server.

set the DATABASE_URL property in `.env` file.
````bash
DATABASE_URL="mysql://<user>:<password>@localhost:<port#>/<dbname>"
````
<user> - mysql user
<password> - mysql password
<dbname> - database name to use.
<port#> - port number that mysql sql is running.  Default value is '3306'

Install all dependencies:
````bash
npm install
````

Generate prisma artifacts to be use by the backend api, run:
````bash
npm run build
````

If you want to clear the database, run: (Warning: Do not run this command if you are using the production DB)
````bash
npx prisma migrate reset
````

If you have changes on your prisma model and wanted to apply the change, run:
````bash
npx prisma migrate dev
````

At this point, you have generated the prisma artifacts which will be use by the backend api (Redgrid.energy.api).
For more details on the backend please go to https://github.com/redgridone/Redgrid.energy.api/blob/main/README.md

