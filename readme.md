## Correr Comando npm i
***

## Crear Archivo .env
***
# Crear archivo .env en ruta raiz al lado del .env.example, copiar y pegar contenido del example

Puedes elegir el puerto que queireas utilizar. Ejemplo 8000
```
# Node.js server configuration
SERVER_PORT=8000
```

## Luego Correr Comando npm run dev
***

### EndPoints
***

# Find All Tasks
***
http:127.0.0.1:PORT/api/tasks

# Create Task
***
http:127.0.0.1:PORT/api/tasks
```
{
    "name": "tarea",
    "description": "Creando tarea de prueba"
}
```

# Find One Task
***
http:127.0.0.1:PORT/api/tasks/:id

# Update Task
***
http:127.0.0.1:PORT/api/tasks/:id
```
{
    "name": "tarea",
    "description": "Creando tarea de prueba"
}
```

# Delete Task
***
http:127.0.0.1:PORT/api/tasks/:id