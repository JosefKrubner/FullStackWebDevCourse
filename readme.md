# Projekt na vytvoření MVC webové aplikace
## Využívá javascript a node.js

### Start serveru

**Pro ostrý běh serveru**

>$ npm run start 

**Pro vývoj**

>$ npm run devStart

### Při práci na projektu

>$ git init

Provedeme úpravy...

>$ git add .
 
>$ git commit -m "náš popis úprav"

>$ git push

### Příprava projektu – pouze při vytváření!

>$ npm init

>$ npm i express ejs express-ejs-layouts

>$ npm i --save-dev nodemon

>$ npm i mongoose

Vytvořit soubor *.env* a vytvořit v něm proměnnou *DATABASE_URL* s adresou naší databáze

Do *.gitignore* dát *.env* a složku *node_modules*

### Struktura

- **public**
   - *veřejný adresář*

- **models**
   - *logika pro příslušné routery*

- **routes**
   - *jednotlivé *.js* soubory volané při routování*

- **views**
   - *soubory vkládané do šablon*
   - **layouts**
      - šablonové soubory

   








