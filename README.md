# Web Components, un nuevo estándar para el desarrollo de aplicaciones HTML5  
# Consideraciones para su implementación

Tesina de grado, julio 2015

**Autor**  
Federico González Brizzio  
fedegonzal@gmail.com  
[@fedegonzal]

**Director**  
Lic. Guillermo Feierherd 

Universidad Nacional de la Patagonia, San Juan Bosco  
Facultad de Ingeniería – Ushuaia  
Tierra del Fuego, Argentina

[@fedegonzal]:https://twitter.com/fedegonzal
[fedegonzal@gmail.com]:mailto://fedegonzal@gmail.com

## Objetivos del trabajo

En esta tesina se espera establecer una comparación entre cómo se utilizan los lenguajes HTML, CSS y JavaScript para el desarrollo de una aplicación web actual y cómo se podrán utilizar estas tecnologías a partir de la implementación del estándar de Web Components.

Para ello, se proponen los siguientes objetivos secundarios:

Analizar las condiciones de compatibilidad de los principales Browsers de la actualidad, para estimar cómo se espera que evolucione cada uno de cara al estándar.

Generar una serie de recomendaciones que resuman las buenas prácticas para incorporar Web Components en lo inmediato.

Desarrollar cinco Web Components que quedarán publicados mediante licencia Open Source dentro de un repositorio público en Internet.

## Cómo utilizar los ejemplos

1. Descargar o clonar este repositorio
2. Iniciar un servidor http (puede funcionar cualquiera)
3. Navegar los ejemplos

## Probar los ejemplos en linea

**Ejemplo 5. Cómo articular datos entre componentes**  

En este último ejemplo de la tesina se trabajará con dos enfoques diferentes para resolver la comunicación entre componentes.

En el primer caso se ha creado un Web Component al que se llamará <mapa-lugares> y que tiene en su interior dos componentes: un <input> nativo y un mapa que utiliza la API de Google gracias al componente <google-map> de Polymer. Cuando el usuario modifique el domicilio en el <input>, el mapa cambiará la posición del marcador ubicándose en la nueva dirección postal. Se trata de un claro ejemplo de “vinculación de datos y comunicación dentro de un componente”.  
[http://cdn.rawgit.com/fedegonzal/Web-Components/master/para-compartir/mapa-lugares.html]

El segundo caso va más allá y “dialoga” con otros elementos externos, a lo que se llamará “vinculación de datos y comunicación entre distintos componentes”. Así, se ha creado un componente (independiente del anterior) llamado <imagenes-google> que estará “escuchando” cambios en <mapa-lugares> y mostrará imágenes relativas al lugar indicado.  
[http://cdn.rawgit.com/fedegonzal/Web-Components/master/para-compartir/mapa-lugares-imagenes.html]

