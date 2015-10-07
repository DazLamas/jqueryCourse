<?php
header('Content-Type: text/html; charset=UTF-8');

if ($_REQUEST['curso']==1)
  echo "<p>Con este curso aprenderás a dominar jQuery, la librería open-source de Javascript, con la que el proceso de agregar funcionalidades mejoradas y comportamientos avanzados a los sitios web se simplifica enormemente. En este curso de jQuery adquieres las habilidades y conocimientos necesarios para desarrollar experiencias web más intuitivas e interactivas que mejoren la experiencia del usuario, y también aprenderás como jQuery convierte la tarea de trabajar con AJAX para cargar o enviar información en algo mucho más cómodo y rápido.</p>";
  
if ($_REQUEST['curso']==2)
  echo "<p>Este curso de JavaScript está pensado para desarrolladores web con interés en ampliar sus conocimientos sobre patrones de diseño en JavaScript y su uso real con las librerías y frameworks más demandados.</p>
<p>El alumno aprenderá en este curso de JavaScript todo sobre los conceptos fundamentales de la programación, la programación funcional y orientada a objetos, los patrones de diseño y a trabajar con Backbone.js, el útil framework JavaScript basado en MVC.</p>
<p>Además, a lo largo del curso se irá desarrollando una aplicación web que sirva de repositorio de todo lo aprendido durante el curso, al tiempo de ser la práctica troncal de trabajo diario.</p>";

if ($_REQUEST['curso']==3)
  echo "<p>AngularJS te permite extender el lenguaje HTML para añadir vistas dinámicas a tus aplicaciones web de forma sencilla y rápida de programar.</p>
<p>Con AngularJS podrás actualizar los cambios en tus modelos de datos directamente sobre la vista final, sin necesidad de recurrir a métodos JavaScript de manipulación del DOM, automatizando el trabajo con el mismo, y facilitando su integración con otras librerías o entornos de trabajo.</p>";
  
if ($_REQUEST['curso']==4)
  echo "<p>Node.js es un entorno de programación en JavaScript para Back-end creado a partir del motor V8 de Google Chrome. Node.js permite crear servidores muy rápidamente y gestionar peticiones con mucha mayor agilidad que los entornos tradicionales (sabiendo cómo y en qué casos usarlo).</p>
<p>Node.js ha tenido tanto éxito que se ha extendido fuera del entorno de los servidores, llegando hasta el punto de generar herramientas de preprocesado, gestores de tareas e incluso desarrollo para Apps móviles.</p>";
  
if ($_REQUEST['curso']==5)
  echo "<p>Con este máster aprenderás a diseñar y desarrollar con éxito un proyecto web basado en estándares W3C con las tecnologías HTML5 y CSS3, implementando, además, mejoras en la capa de interactividad mediante jQuery, la librería más utilizada de JavaScript.</p>
<p>Este Máster de Diseño de interfaz y Front-end con HTML5, CSS3 y jQuery parte desde cero e incluye tanto los conceptos teóricos y técnicos de diseño necesarios para crear una interfaz de usuario funcional y basada en conseguir la mejor experiencia de usuario posible, como todos los conocimientos de maquetación y programación front-end que se requieren para llevar a cabo su desarrollo de la forma más optimizada.</p>";
  
if ($_REQUEST['curso']==6)
  echo "<p>Los sistemas de gestión de contenidos son aplicaciones online que permiten administrar contenidos (principalmente de sitios web) a través de diferentes usuarios con diferentes permisos. Los pilares sobre los que se apoyan dichos gestores son dos factores de gran importancia: un lenguaje de programación server-side y una base de datos. Comenzando por los fundamentos básicos del lenguaje PHP (programación server-side open source), este curso de programación web te guiará a través de diferentes técnicas y prácticas que te ayudarán a generar contenidos dinámicos en un sitio web. El curso complementa PHP con el sistema de gestión de base de datos, que permitirá realizar consultas para generar aplicaciones dinámicas.</p>
<p>Al finalizar este curso de PHP y MySQL conocerás completamente el proceso de creación de sitios web y las aplicaciones dinámicas, habiendo desarrollado, como puesta en práctica de los contenidos del curso, un portfolio de trabajos (o galería/catálogo de productos) y un gestor para administrar cómodamente los contenidos del mismo.</p>";
  
if ($_REQUEST['curso']==7)
  echo "<p>Con este curso de WordPress aprenderás a desarrollar de manera integral y desde cero un sitio web dinámico completamente adaptado y personalizado a las necesidades de un proyecto. En el curso no solo obtendrás todas las técnicas y conocimientos necesarios para construir un website con WordPress, sino que también aprenderás el funcionamiento de su estructura de archivos y todos los detalles para crear Themes, Plugins y Widgets, para así ampliar las posibilidades y capacidades de desarrollo.</p>
<p>Orientado a aquellos que ya disponen de conocimientos de Front-end/Client-side (HTML + CSS + Javascript), este curso está dividido en dos módulos para que aquellos alumnos que dispongan, además, de conocimientos previos de PHP puedan acceder directamente al módulo principal del curso, centrado en el desarrollo con WordPress.</p>";

if ($_REQUEST['curso']==8)
  echo "<p>En el Curso de Diseño de interfaz para proyectos Web, Apps y Smart TV aprenderás cómo diseñar el sistema visual y funcional de interacción entre sitios web, aplicaciones para smartphones, tablets y smart TV y sus usuarios en base a las necesidades y objetivos específicos de cada proyecto.</p>

<p>Además de en el aspecto gráfico, el curso también hace hincapié en el diseño de los procesos de que constan las aplicaciones desde el punto de vista funcional y con la vista siempre puesta en la usabilidad y la experiencia de usuario.</p>";
 
?>
