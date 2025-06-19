# Sistema de Registro de Alumnos 

Este proyecto incluye:

-  Backend con NestJS + TypeORM + Swagger + MySQL
-  Frontend en Angular y Bootstrap
-  Protección de API con clave secreta (`x-api-key`)
-  Documentación automática con Swagger

##  Cómo ejecutar el proyecto

### 1. Clonar el repositorio

### 2. Backend
cd back-end/backend
npm install
npm run start:dev
Swagger estará disponible en: http://localhost:3000/api

### Variables de entorno .env

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=tu_usuario_mysql
DB_PASSWORD=tu_clave_mysql
DB_NAME=alumnosdb
API_KEY=miclave123

### 3. Frontend
cd front-end/frontend
npm install
ng serve

Accede a la interfaz en http://localhost:4200

 ### Funcionalidad
- Crear alumno con formulario validado
- Consultar alumnos por grado y mostrarlos en tabla
- API documentada con Swagger
  
 ### Seguridad
El backend requiere autenticación con x-api-key. Aunque la clave se expone en frontend por simplicidad en esta prueba, en un entorno de producción se migraría al backend o se cambiaría por JWT para mayor seguridad.



