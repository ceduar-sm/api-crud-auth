# Crud de usuarios

API RESTful para crear, leer, actualizar y eliminar usuarios en una base de datos MongoDB usando el framework Express. También utiliza las siguientes tecnologías:

- JsonWebToken para la autenticación de los usuarios y la protección de las rutas.
- Bcrypt para el cifrado de las contraseñas de los usuarios y la comparación con las almacenadas en la base de datos.
- Zod para la validación de los esquemas de los datos enviados por los clientes y la generación de mensajes de error personalizados.
- Mongoose para el modelado de los datos de los usuarios y la conexión con la base de datos.

## Pre-requisitos

- Tener instalado Node.js y MongoDB en tu máquina o usar un servicio en la nube como [Atlas](https://www.mongodb.com/docs/atlas/).

## Instalación

```
git clone https://github.com/ceduar-sm/api-crud-auth.git
```

```
npm install
```

## Configuración

Para configurar el proyecto se debe modificar el archivo `config.js` que se encuentra en la carpeta `src` que contiene las siguiente variables:

- `PORT`: El puerto en el que se ejecutará el servidor. Por defecto es el 3000.
- `URI_DB`: La URI de conexión con la base de datos MongoDB. Debe incluir el nombre de la base de datos a usar.
- `JWT_SECRET`: La clave secreta para firmar y verificar los tokens de autenticación.

## Construido con

- [Node.js](https://nodejs.org/en/blog/release/v18.16.0) v.18.16.0
- [Express](https://github.com/expressjs/express) v.4.18.2
- [MongoDB](https://www.mongodb.com/) v.6.0.6

## Uso

Para iniciar el servidor, ejecuta el sigueinte comando:

```
npm run dev
```

La API expone las siguientes rutas:

- `POST /api/users/signup`: Para crear un nuevo usuario. Recibe un objeto con los campos `firstName`, `lastName`, `password` y `email`. Devuelve un objeto con el usuario creado y un token de autenticación.
- `GET /api/users`: Para obtener todos los usuarios de la base de datos.
- `GET /api/users/:id`: Para obtener a un usuario de la base de datos mediante su `Id` único.
- `PUT /api/users/:id`: Para actualizar a un usuario de la base de datos mediante su `Id` único.
- `DELETE /api/users/:id`: Para eliminar a un usuario de la base de datos mediante su `Id` único. En este caso es un soft delete

## Autor

- **César Sánchez** - _Codificación_ - [ceduar-sm](https://github.com/ceduar-sm)
