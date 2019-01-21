# BuilderLab Extra UX

**Contenido:**

 - [Introducción](#Introducción)
 - [Necesidad de usuario](#NecesidadDeUsuario)
 - [User Persona](#UserPersona)
 - [Prototipo de Alta fidelidad](#Prototipo)
 - [Test de usuario](#Testeo)
 - [Evaluación Heurística](#Heurística)
 - [Oportunidades de mejora](#Mejoras)
 - [Planificación](#Planificación)
 - [Fuentes](#Fuentes)
 
## Introducción

Luego de finalizar el desarrollo de la V1.0 de DataLovers, se  procedió a actualizar esta interfaz realizando test de usabilidad, evaluaciones heurísticas, iterando sobre el prototipo y definiendo oportunidades de mejora,  para así poder entregar una experiencia de usuario que satisfaga las necesidades y expectativas de este.

Este proyecto está dirigido a los(as) jugadores(as) de League of Legends que necesitan acceder a información sobre Builds y Runas de forma rápida antes de entrar a la partida, para así poder ganar y avanzar en la etapa clasificatoria. Además esta información debe ser clara, concisa y ordenada, ya que las plataformas con las que cuentan actualmente se encuentran saturadas de información y carecen de un orden definido.

## NecesidadDeUsuario

Es complejo entregar una experiencia óptima en cualquier plataforma si no se tiene correctamente definidas las necesidades de usuario , es por eso que durante este sprint el enfoque estuvo en chequear y actualizar dichas necesidades, concluyendo en las siguientes:

**Un jugador de League of Legends necesita:**

 - Decidir qué personaje usar para poder ganar la partida.
 - Acceder a la información de campeón de forma rápida para alcanzar a agregar los atributos antes de que comience la partida
 - Tener información detallada sobre runas para saber cuales usar exactamente y conocer sus características.
 - Conocer las builds para el campeón elegido y así no escoger algún objeto que lo perjudique en la partida.
 - Acceder a información clara y ordenada para agilizar la experiencia y no perder tiempo antes de entrar a partida.
 - Saber contra qué campeón es fuerte o débil para armar una estrategia antes de jugar.


Con estas historias se pudo definir cuáles son los puntos importantes a trabajar, según las siguientes definitions of done:

 - Mostrar de forma clara la línea de cada campeón para que el usuario se conecte más rápido con la página y le sea más fácil encontrar la información que necesita.
 - Utilizar íconos y colores ya familiares para el usuario, acelerando la experiencia tomando el cuenta el tiempo reducido con el que cuentan para entrar a partida.
 - Es necesario crear un cuadro que muestre la información sobre builds más usadas, además de las de mayor win rate.
 - Los campeones deben ser mostrados en la página principal para evitar la navegación en demsiadas pestañas.
 - Se necesita además un perfil de campeón que contenga de forma ordenada la información requerida por el usuario.
 - Reducir la información a sólo la estrictamente necesaria, para así evitar la saturación de la página y facilitar la lectura de dicha información.

## UserPersona

Luego de entrevistar a diversos usuarios:

![enter image description here](https://raw.githubusercontent.com/FranciscaMora/scl-2018-12-bc-core-data-lovers/master/Extra/Prototipado/WhatsApp%20Image%202019-01-21%20at%2005.52.23.jpeg)

 Se recopiló información y se organizó de tal forma que se pudiera crear un UserPersona que definiera y resumiera a nuestro usuario final de la siguiente manera:
 

![User-persona](https://raw.githubusercontent.com/FranciscaMora/scl-2018-12-bc-core-data-lovers/master/Extra/Persona/UserPersona.jpeg) 
Con nuestra persona ya definida, podemos comenzar a actualizar WireFrame y Prototipo de Alta Fidelidad.

## WireFrame y Prototipo de Alta fidelidad


BuilderLab ya contaba anteriormente con su propio WireFrame y Prototipo de Alta Fidelidad, por lo que esto se trata de una actualización tomando encuentra los testeos de usuarios realizados anteriormente.

### WireFrame

![WireFrame](https://raw.githubusercontent.com/FranciscaMora/scl-2018-12-bc-core-data-lovers/master/Extra/Prototipado/WhatsApp%20Image%202019-01-21%20at%2005.52.02.jpeg)
### Prototipo de  Alta Fidelidad

Para realizar este prototipo se trabajó con iteraciones diarias hasta llegar a las versión 1.1 de BuilderLab:

[Prototipo de AltaFidelidad Figma Bruto](https://www.figma.com/file/Cyb1EJ2kNHWuUV8jIVGIOH5I/Untitled?node-id=0:1)

[Prototipo AF Figma con funcionalidad](https://www.figma.com/proto/Cyb1EJ2kNHWuUV8jIVGIOH5I/Untitled?node-id=0:1&scaling=min-zoom)

El cual fue aceptado por usuario, quien vio cubierta sus principales preocupaciones (según sus propias palabras) :

 - No ocupa mucho espacio para entregar información.
 - Es claramente legible.
 - Es directo y para nada confuso.
 - Colores e imágenes acorde a la temática.

## Testeo de usuarios

![test](https://raw.githubusercontent.com/FranciscaMora/scl-2018-12-bc-core-data-lovers/master/Extra/Testeo%20de%20%20usuario/Testeo%20de%20usuario.jpg)

Al  momento se testear esta interfaz se recibió suficiente información desde los usuarios, lo que permitió iterar diariamente para corregir y/o agregar los atributos necesarios.
 
 Luego de dichos testeos se pudo recopilar la siguiente información:
 

 - Los botones "build" y "runas" dentro del Navbar no llaman la atención de los usuarios por lo que raramente los clickean y , al momento de hacerlo, los envía a la misma información con un paso extra, lo que confunde y dificulta la experiencia por lo que se procede a quitar esta característica.
 - La información de los campeones, al ser mostrada en el tipo de tarjeta de la versión 1.0 , hace que su contenido se pierda y entregue una imagen saturada. Se decide cambiar la forma en la que se muestran los campeones, dejándolos en una caja principal donde su contenido varía según el filtro que aplique el usuario. Esta parte de la interfaz es la que más ha agradado a los usuarios, indicando que es un plus por sobre otras plataformas, ya que entrega el contenido de forma ordenada.
 
 ## Heurísticas

Se realizó una evaluación heurística a la  web, que puedes encontrar en el  siguiente link:

[Evaluación Heurística](https://docs.google.com/spreadsheets/d/1nn9SdYgPrlYRw7_6BkLlmNnsvzn0sMbJdLbrYF-iRJ8/edit?usp=sharing)

## Oportunidades de mejora

En las siguientes versiones se espera poder agregar/mejorar las siguientes características:

 - Apartado de counters, donde el usuario puede conocer qué campeones son fuertes y cuáles son débiles frente al personaje elegido.
 - Agregar la función "ordenar" en cuadro de búsqueda.
 - Crear foro donde los usuarios puedan intercambiar información de sus atributos.
 - Mostrar ProBuilds.

## Planificación

La planificación para este sprint fue realizada a través de la plataforma Trello. Para chequearla accede al siguiente enlace:

[Trello Extra](https://trello.com/b/FoyVgpMp/extra)

## Fuente

Para definir colores,  imágenes, órden visual, etc, fue necesario estudiar las plataformas existentes, además de comprender realmente a los usuarios. 
Algunas de dichas plataformas fueron:

[Mobafire](https://www.mobafire.com/)
[ChampionGG](https://champion.gg/)
[LeagueofLegends.com](https://las.leagueoflegends.com/es/)


