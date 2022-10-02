# Curso de express


## Http Methods
#### *Http Verbs*
- Get: Obtiene algo del servidor
- Post: El cliente envia datos al servidor para que este los guarde.
- Put: El cliente envia parametros y el servidor actualiza los datos basados con estos.
- Delete: El cliente envia petición con dato para que el servidor busque y elimine el registro.
- Patch: Indicamos especificamente los cambios que queremos hacer

Estos metodos ayudan a indicarle al servidor que queremos hacer.

## Http Methods en express

- REST: Recomendaciones de como se pueden crear las API.


## Http Response
- Codigos de HTTP
- libreria express

## Request Body
El cliente puede enviarle distintos tipos de datos al servidor.
- Texto.
- Objeto json.
- Archivo.
- Datos de un formulario.

_Objeto json_:
Header
    - Datos especificos de la solicitud (status, format)
Body
    - Contenido de la solicitud


```js
app.use(express.text());
```
Utilizado para que express pueda interpretar texto

```js
app.use(express.json());
```
Estos metodos se tienen que poner antes de ir a los metodos de las rutas para que se ejecuten.
Es importante añadir cabeceras en las aplicaciones.

Otra manera de extraer parametros: _{params: {x, y}}_
```js
app.get('/restar/:x/:y', ({params: {x, y}}, res) => {
    res.send(`Result: ${parseInt(x) - parseInt(y)}`);
});
```

Se puede enviar mas de un parametro

```js
app.get('/nombre/:nombre/age/:age', (req, res) => {
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`);
});
```
rta:
```bash
El usuario fazt tiene 50 años
```


# Queries
Queries por ruta se pueden enviar multiples parametros, concatenados por _&_
```
http://localhost:3000/search?q=javascript%20books
```
Ruta:
```js
app.get('/search', (req, res) => {
    if( req.query.q === 'javascript books' ) {
        res.send('Lista de libros de js');
    } else {
        res.send('Lista de libros normales');
    }
});
```

Si se envia mas de una vez el mismo parametro este se agregara a un solo array.

# Metodo all
En express existe una ruta especial _all_ esta ruta se podra acceder desde cualquier metodo que le enviemos, GET, POST etc.

```js
app.all('/info', (req, res ) => {
    res.send('server info');
});
```

# Middlewares
Son funciones intermedias, que pueden utilizar tanto el request como el response para hacer las operaciones necesarias según su funcionamiento.
```js
//Middleware
app.use((req, res, next) => {
    console.log(`Ruta: ${req.url}, Metodo: ${req.method}`);
    next();
});
```
El metodo _next()_ es utilizado para ejecutar el siguiente metodo ya sea de ruta o de middleware.

# Introducción a Middlewares
Los middleware funcionan de manera secuencial, si ponemos las rutas antes del middleware, la ruta no valdra lo que se valide en los middleware.


# Middleware interceptor
__morgan__ es un paquete de middleware que funciona como logger
Existen middlewares para subir imagenes, para comprobar si el usuario tiene una cookie, para validar datos.

# REST API - Explication
Creacion de rutas del api de _/products_

# Express Settings

Podemos definir valores en la aplicacion
```js
app.set('port', 3000);
```

Para utilizarla en la aplicación accedemos a ella de la siguiente manera.
```js
app.get('port');
```

Para que el enrutador dirija directamente a la ruta debida(mayus, minus).
```js
app.set('case sensitive routing', true);
```

# Static files


# Express Router
Cuando la aplicacion crece es mejor separar las rutas con el module especial de express Router

userRoutes.js
```js
const { Router } = require('express');
const router = Router();
```

server.js
```js
const HomeRoutes = require('./routes/home');
const UserRoutes = require('./routes/user');
------

// Routes
app.use(HomeRoutes);
app.use(UserRoutes);
```

# Template engine

Uso de ejs como motor de plantillas para mostrar pantallas.

# EJS Partials

Creación de plantillas y parciales para compartir entre todas las paginas.

# Base de datos
