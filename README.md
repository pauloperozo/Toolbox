<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="200" alt="Nest Logo" /></a>
</p>


# Multi-Project Docker Setup

Este proyecto contiene dos servicios: un backend API en Express y un frontend utilizando Webpack/React.
Ambos servicios están orquestados utilizando Docker Compose para facilitar el desarrollo y despliegue.

## Estructura del Proyecto

```
Toolbox/
├── Backend/
│
├── Dockerfile
│
├── package.json
│
└── src/
├── Frontend/
│
├── Dockerfile
│
├── package.json
│
└── src/
└── docker-compose.yml
```

## Requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone git@github.com:pauloperozo/Toolbox.git
   ```
2. `cd Toolbox`

3. `docker-compose build`

4. `docker-compose up`

Esto levantará ambos servicios y los expondrá en los siguientes puertos:

-Backend: http://localhost:3000

-Frontend: http://localhost:3001

**Nota**: Para detener y eliminar los contenedores, ejecuta:
`docker-compose down`

# Descripción de los Servicios

## Backend

El backend está desarrollado utilizando Express. Puedes encontrar el código fuente en el directorio Backend/. El Dockerfile para este servicio se encarga de instalar las dependencias y exponer el puerto 3000.

**Nota**: en caso de querer correrlo en local: 

### Instalación

```bash
# install
$ npm install
# run
$ npm start
```

### Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Endpoints

### `GET files/data`

Este endpoint devuelve un listado de todos los files con su respectivo contenido.

#### Parámetros
fileName : ?fileName={{file}}

#### Respuesta

- `200 OK` si la solicitud se completó correctamente.
- Un array de objetos JSON que representan los files.

### `GET files/list`

Este endpoint devuelve un listado de todos los file.

#### Parámetros
Ninguno

#### Respuesta

- `200 OK` si la solicitud se completó correctamente.
- Un array de objetos JSON que representan los files.

## Frontend

El frontend está desarrollado utilizando Webpack/React. Puedes encontrar el código fuente en el directorio Frontend/. El Dockerfile para este servicio se encarga de instalar las dependencias y exponer el puerto 3001.

**Nota**: en caso de querer correrlo en local: 

### Instalación

```bash
# install
$ npm install
# run
$ npm start
```

### Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Developer

- Author - paulo perozo
- Website - https://www.linkedin.com/in/paulo-perozo-0738a4240/
- Twitter - https://twitter.com/PauloPerozo

<p align="center">
  <a href="" target="blank"><img src="https://www.artistapirata.com/wp-content/uploads/2018/12/programas-full-linux-descargar-programas-linux-300x181.jpg" width="200" alt="zzzz" /></a>
</p>


