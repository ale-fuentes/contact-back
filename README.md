# contact-back

My first project ussing React + Redux

## BACK project

Steps in my local machine:


* Created folder project *contacts*
* clone project [contact-back](https://github.com/ale-fuentes/contact-back)

```
> git clone https://github.com/ale-fuentes/contact-back

```

* install dependencies to project inner folder 'contact-back'

```
> npm i
```

* run backend:

```
> npm run dev

```

# history :: init project

### First steps in the project.

1. create folder 'contact-back'
2. inner folder, create package.json :

```
> npm init -y
```
**note**: **-y** create *package.json* without question.

3. include some production dependencies:

```
> npm i --save -E body-parser@1.15.2 express@4.14.0 mongoose@4.7.0 node-restful@0.2.5 pm2@2.1.5
```
**note**, same parameter ussing our command:

**--save** only dependencies that utilities in Developer enviroment and Productions enviroment.

**i** install dependencies.

**-E** for install version indicate.

**body-parser@1.15.2** this is a middleware, [home page](https://www.npmjs.com/package/body-parser).

**express@4.14.0** this is a server web applicatio based in [Node.js](https://nodejs.org/), this is minimal and flexible, [home page](https://expressjs.com/).

**mongoose@4.7.0** this is a way of object modeling for node.js, [home page](https://mongoosejs.com/)

**node-restful@0.2.5** this ussing for rturns a Mongoose model, [home page](https://github.com/baugarten/node-restful)

**pm2@2.1.5** this is a server manager, ussing for production enviroment, [home page](https://pm2.keymetrics.io/)

4. include some developer dependencies:

```
> npm i --save-dev -E nodemon@1.11.0
```
**note**, same parameter ussing our command:

**--save-dev** only dependencies that utilities in Developer enviroment.

**nodemon@1.11.0** this is ussing for restarting the node application when file changes in the directory are detected, [home page](https://github.com/remy/nodemon)