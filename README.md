# Node API with JWT authentication

## What we have here ?
* NodeJS
* Typescript
* JsonWebToken
* Express

## Before run
In the root folder...

Run this to generate a private certificate file:
```
openssl genrsa -out config/jwt/private.pem 2048
```

Run this to generate a public certificate file based on private key previously generated:
```
openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem
```

## :floppy_disk: Run
```
npm run dev
```