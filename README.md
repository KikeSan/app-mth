# App Carga de usuarios
[Javascript] [Webpack] [Scss] [HTML] [Rest-Api] [JSON] [Node]

El siguiente proyecto tiene como finalidad conectarse a una api rest, consumir datos de ella y validar usuario con un login.
Para poder hacer el test los datos de validación son los siguientes:
- u: eve.holt@reqres.in
- p: cityslicka

Se envía estos datos a la Api y si existe retorna un token. Una vez que se ingrese se puede traer información de los usuarios ingresando el id de usuario en el campo y luego al botón, esto envía ese parámetro al API y devuelve la información de dicho usuario.

El App se puede probar en el sgte link:
[Ver demo](https://kike.pe/marathon/)

Para ejecutar de manera local:
```console
git clone https://github.com/KikeSan/app-mth.git
npm install
npm run start
```
###### Paso 1
Click en los enlaces de ayuda en la parte inferior para agregarlos a los campos del formulario
![alt login](https://kike.pe/marathon/img/step1.png)

###### Paso 2
Ingresar el id del usuario en el campo ubicado en la parte superior y luego clic en el botón Mostrar Usuario
![alt login](https://kike.pe/marathon/img/step2.png)

###### Paso 3
Los usuarios aparecerán en la parte inferior
![alt login](https://kike.pe/marathon/img/step3.png)

- Para este proyecto se usó un [hosted REST-API](https://reqres.in/)

Develop by `Enrique Sánchez Quintanilla`
