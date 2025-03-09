# Sistema de Monitoreo Inteligente - API

API RESTful para un sistema de monitoreo inteligente de postes de alumbrado público. La API permite gestionar postes, sensores, alertas y usuarios, facilitando la detección de fallos en las luminarias y el envío de alertas en tiempo real.

## Características Principales
- **Gestión de Postes**: Registro y seguimiento de postes de alumbrado público.
- **Sensores de Luz**: Monitoreo del estado de los sensores instalados en los postes.
- **Alertas en Tiempo Real**: Detección de fallos y envío de alertas automáticas.
- **Gestión de Usuarios**: Control de acceso para administradores y técnicos.

## Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir la API.
- **MongoDB**: Base de datos NoSQL para almacenar la información.
- **Mongoose**: ODM para interactuar con MongoDB.

## Endpoints Principales
- `POST /postes`: Crear un nuevo poste.
- `GET /sensores`: Obtener todos los sensores.
- `PUT /alertas/:id`: Actualizar una alerta.
- `DELETE /usuarios/:id`: Eliminar un usuario.

## Cómo Usar
1. Clona el repositorio.
2. Instala las dependencias: `npm install`.
3. Configura las variables de entorno en `.env`.
4. Ejecuta la API: `node server.js`.
