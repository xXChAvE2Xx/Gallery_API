# Gallery_API
La siguiente API tiene como requerimientos los siquientes puntos:
- Habilitar un endpoint para almacenar una imagen con el correspondiente titulo y descripción.
- Habilitar un endpoint para obtener todas las imagenes almacenadas.
- Habilitar un endpoint para eliminar una imagen especifica.
- Habilitar un endpoint para actualizar titulo y descripción de una image. 

## Herramientas utilizadas
- **Node:** Se esta utilizando la version `16.17.1`
- **npm:** Se esta utilizando la version `8.15.0`
- **Angular:** Se esta utilizando la version `14.2.5`

## Requerimientos para correr el API
```
- Sql Server en su versión 2019

## Correr API en DEV
$ npm install 
$ npm run dev
```
## Documentación
- [Angular](https://angular.io/docs)
- [Node](https://nodejs.org/en/docs/)

## Función

|Endpoint                                         | Metodo |Response                                                 |
|-------------------------------------------------|--------|---------------------------------------------------------|
| `localhost:3000/api/photos/`                    | GET    |Regresa JSON con todas las imagenes almacenadas.         |
| `localhost:3000/api/photos/`                    | POST   |Almacena el titulo, descripción e imagen.                |
| `localhost:3000/api/photos/:id`                 | GET    |Regresa el titulo, descripción e imagen del ID recibido. |
| `localhost:3000/api/photos/:id`                 | DELETE |Elimina el titulo, descripción e imagen del ID recibido. |
| `localhost:3000/api/photos/:id`                 | UPDATE |Actualiza el titulo y descripción del ID enviado.        |

