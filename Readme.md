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


