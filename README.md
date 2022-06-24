# contactos

---
LibretaContactos es una aplicación web sencilla para gestionar una libreta de contactos con propósitos educativos.

el stack de tecnologías es 100% de lenguaje javascript. El backend se trabaja con node.js, el frontend con vue.js y, el ORM a cargo es Sequelize con una base de datos mysql.


## Instalación
---
- Descarga e instala node js



## Ejecución
---
- Una vez instalado node js, para ejecutar la aplicación se debe abrir la terminal de comandos en la raíz del proyecto y ejecutar el comando:
    ```bash
    node index.js
    ```
Por defecto, la aplicación se ejecuta en el puerto 3000 de [su servidor local](http://localhost/).




## Configuración
---
lo primero será tener una base de datos creada en nuestro servido con el nombre contactos.

**BASE DE DATOS Y SERVIDOR**
> La app corre por defecto en el puerto 3000 podemos cambiarlo en el archivo [/index.js](https://github.com/kleider1/libreta_contactos/blob/main/index.js) del proyecto en la linea 25
> donde dice: 

 ```js
 app.listen(3000,()=>{
        console.log('Server start');
    });
});

  cambiamos el número 3000 por el puerto deseado
```

>para configurar los datos de conexion de la base de datos nos dirigioms al archivo [db.js](https://github.com/kleider1/libreta_contactos/blob/main/db.js) que tiene el modelo 
>de configuración:
> 

```js
 const sequelize = new Sequelize('base de datos','usuario','contraseña',{
    host:'host',
    dialect: 'mysql'
});

```

---
>Una vez terminada la configuración nos dirigimos al archivo [/main.js](https://github.com/kleider1/libreta_contactos/blob/main/static/main.js)
>y cambiamos ambos links por los de nuestro puerto y servidor configurados anteriormente.
