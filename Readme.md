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
