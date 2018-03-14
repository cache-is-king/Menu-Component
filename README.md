# menu-component

## MongoDB Installaltion Instructions

1.  First, install MongoDB using `homebrew`:
```
$ brew install mongodb
```

2.  In a new terminal tab, start the MongoDB server:
```
$ mongod
```

If you wish to inspect the database or collections at any time, open a new tab and  use:
```
$ mongo

```

some helpeful mongo commands:
```
show dbs              //show the list of databases
use <...>             //select/use a specific db (nb: replace <...> with the db name).
show collections      //shows all collections in selected db
db.<...>.count()      //show number of docs in the coll (nb: replace <...> with coll name).
db.<...>.find()       //display docs in coll (nb: replace <...> with coll name).

```


## Menu Component Setup

3. Clone the repository from Github `git clone http://....` 

4. Download and install dependencies:
```
//ensure you are in the root directory:

$ cd menu-component

//Then:

$ npm install
```


5. Seed the database with data:
```
$ npm run seed

```

6. Run the development server and start webpack (client needs both active to run):
```
$ npm run server

$ npm run bundle

```

7. To access the component/client, direct your browser to:
```
http://localhost:3005/
```

### Some other npm commands that may be useful:
```
npm test                  // run all available jest test suites

npm run test:coverage     // show the test coverage report

npm run build             // run webpack in development mode (this will watch for changes)

npm run build:prod        // to run through proxy

```