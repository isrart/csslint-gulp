# csslint-gulp Ejemplo de uso

Gracias a Gulp y cssLint podremos analizar nuestro código css para verificar cualquier error en nuestro código.

---

### Instalación

Descargamos el proyecto o clonamos con git e instalamos las dependencias npm desde consola:

```
npm install
```

Ya tendremos disponibles gulp en nuestro proyecto para trabajar con csslint

### Utilización

Podremos correr gulp de dos maneras distintas:

```
gulp
```

Esto hará que cada cambio que hagamos en el archivo example.css csslint haga una comprobación de forma automática para comprobar posibles errores.

```
gulp css
```
De esta manera solo haremos la comprobación una vez, por lo que tendremos que repetir el comando en caso de hacer nuevos cambios en nuestro archivo .css
