# ToDo:
Apollo client is not setup to support mulitiple uri requests. Switch between uri requests when needed.

uri's: 
poh-registry: 'https://ranst.stepzen.net/poh/graph/__graphql'

poh-reddit: 'https://ranst.stepzen.net/poh/graph/__graphql',

# Next.js + TailwindCSS + Typescript + StepZen + GraphQL + POH

https://nextjs.org/learn/basics/create-nextjs-app

https://tailwindcss.com/docs/installation

https://www.sanity.io/docs/getting-started

https://graphql.org/

https://www.proofofhumanity.id/

## Setup
To run this project, install it locally using yarn:

terminal 1

```
$ git clone https://github.com/Twonarly1/poh-tools
$ cd poh-tools
$ yarn
$ cd graphql-stepzen
$ stepzen login
$ stepzen start
```
terminal 2

```
$ cd poh-tools
$ touch .env
$ code .
Add your own environmental variables. See .env.example
$ yarn dev
```
