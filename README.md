# Multi-Project Docker Setup

Este proyecto contiene dos servicios: un backend API en Express y un frontend utilizando Webpack/React.
Ambos servicios están orquestados utilizando Docker Compose para facilitar el desarrollo y despliegue.

## Estructura del Proyecto

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

**Nota**: en caso de querer correrlo en local: 1.`npm install` 2.`npm start`

## Frontend

El frontend está desarrollado utilizando Webpack/React. Puedes encontrar el código fuente en el directorio Frontend/. El Dockerfile para este servicio se encarga de instalar las dependencias y exponer el puerto 3001.
**Nota**: en caso de querer correrlo en local: 1.`npm install` 2.`npm start`
