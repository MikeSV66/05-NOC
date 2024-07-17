# Proyecto NOC

El objetivo es crear una serie de tareas usando Arquitectura Limpia con TypeScript

# dev
1. Clonar el archivo .env.template a .env
2. Configurar las variables de entorno
```

PORT=

MAILER_SERVICE=
MAILER_EMAIL=
MAILER_SECRET_KEY=


PROD=false


MONGO_URL=
MONGO_DB_NAME=
MONGO_USER=
MONGO_PASS=

POSTGRESS_URL=
POSTGRES_USER=
POSTGRES_DB=
POSTGRES_PASSWORD=

```
3. Ejecutar el comando 
    ```npm install```
4. Levantar las bases de datos con el comando
    ``` docker compose up -d ```
5. Ejecutar ```npx prisma generate```
6. Ejecutar ```npx prisma migrate dev```
7. Ejecutar ```npm run dev```



## Obtener Gmail Key
[Google AppPasswords](https://myaccount.google.com/u/0/apppasswords)