# Web Components, un nuevo estándar para el desarrollo de aplicaciones HTML5. Consideraciones para su implementación

Tesina de grado, julio 2015

**Autor**  
Federico González Brizzio  
[fedegonzal@gmail.com]:mailto://fedegonzal@gmail.com
[@fedegonzal]:https://twitter.com/fedegonzal

**Director**  
Lic. Guillermo Feierherd 

Universidad Nacional de la Patagonia, San Juan Bosco  
Facultad de Ingeniería – Ushuaia  
Tierra del Fuego, Argentina

## Objetivos del trabajo

En esta tesina se espera establecer una comparación entre cómo se utilizan los lenguajes HTML, CSS y JavaScript para el desarrollo de una aplicación web actual y cómo se podrán utilizar estas tecnologías a partir de la implementación del estándar de Web Components.

Para ello, se proponen los siguientes objetivos secundarios:

Analizar las condiciones de compatibilidad de los principales Browsers de la actualidad, para estimar cómo se espera que evolucione cada uno de cara al estándar.

Generar una serie de recomendaciones que resuman las buenas prácticas para incorporar Web Components en lo inmediato.

Desarrollar cinco Web Components que quedarán publicados mediante licencia Open Source dentro de un repositorio público en Internet.

## Cómo descargar el documento

La tesina completa está publicada en formato docx y pdf. El primero facilita su edición, el segundo su lectura o impresión.

Versión docx: https://github.com/fedegonzal/Web-Components/raw/master/Tesina%20Federico%20Gonz%C3%A1lez%20-%20Web%20Components.docx

Versión pdf: https://github.com/fedegonzal/Web-Components/raw/master/Tesina%20Federico%20Gonz%C3%A1lez%20-%20Web%20Components.pdf

## Cómo utilizar los ejemplos

1. Descargar o clonar este repositorio
2. Iniciar un servidor http (puede funcionar cualquiera)
3. Navegar los archivos html de la carpeta "para-compartir"

## Probar los ejemplos en línea

**Ejemplo 1. Cómo recibir parámetros**

Se supondrá que se pretende hacer una aplicación para buscar información en una base de datos sobre especies animales en áreas protegidas de Argentina y mostrar los resultados en pantalla, por ejemplo:

Nombre científico: Gastrotheca gracilis  
Nombres locales: Rana marsupial tucumana, La Banderita, Marsupial Frog  
Autor: Laurent, 1969  
Origen: Autóctono  

El Web Component recibirá la información para nombre científico, nombres locales, autor, año y origen como atributos del elemento creado. Se generará una instancia del Web Component por cada especie animal que se quiera mostrar.  
http://rawgit.com/fedegonzal/Web-Components/master/para-compartir/como-recibir-parametros.html

**Ejemplo 2. Cómo incluir elementos complejos**

En esta sección se hará una ligera modificación al ejemplo anterior, suponiendo que es de interés dar mayor flexibilidad a la información contenida en la ficha de especie. En vez de pasar todo el contenido en parámetros, se dejará la libertad de incorporar otros elementos dentro de la ficha; también se agregó un parámetro en el que se indicará la URL con una foto.  
http://rawgit.com/fedegonzal/Web-Components/master/para-compartir/elementos-complejos.html

**Ejemplo 3. Cómo iterar datos y generar instancias de componentes**

En el ejercicio anterior se generó un componente y se lo iteró manualmente generando una galería de especies. A continuación se muestra un ejemplo similar, pero esta vez la información se obtendrá a partir de una fuente de datos externa en formato JSON. Este es un típico caso de provisión de información mediante APIs REST.  
http://rawgit.com/fedegonzal/Web-Components/master/para-compartir/extender-elemento.html

**Ejemplo 4. Cómo extender un elemento nativo**

En este ejemplo se demuestra cómo crear un componente a partir del elemento nativo <button> al que se llamará <button-extended> y tendrá como particularidad la posibilidad de recibir un ícono acompañando al texto del botón. También se aprovechará la definición del nuevo componente para establecer una serie de estilos CSS que unifiquen este tipo de botones.  
http://rawgit.com/fedegonzal/Web-Components/master/para-compartir/iterar-datos.html

**Ejemplo 5. Cómo articular datos entre componentes**  

En este último ejemplo de la tesina se trabajará con dos enfoques diferentes para resolver la comunicación entre componentes.

En el primer caso se ha creado un Web Component al que se llamará <mapa-lugares> y que tiene en su interior dos componentes: un <input> nativo y un mapa que utiliza la API de Google gracias al componente <google-map> de Polymer. Cuando el usuario modifique el domicilio en el <input>, el mapa cambiará la posición del marcador ubicándose en la nueva dirección postal. Se trata de un claro ejemplo de “vinculación de datos y comunicación dentro de un componente”.  
http://rawgit.com/fedegonzal/Web-Components/master/para-compartir/mapa-lugares.html

El segundo caso va más allá y “dialoga” con otros elementos externos, a lo que se llamará “vinculación de datos y comunicación entre distintos componentes”. Así, se ha creado un componente (independiente del anterior) llamado <imagenes-google> que estará “escuchando” cambios en <mapa-lugares> y mostrará imágenes relativas al lugar indicado.  
http://rawgit.com/fedegonzal/Web-Components/master/para-compartir/mapa-lugares-imagenes.html

# Consideraciones legales

Este trabajo tiene fines pedagógicos y académicos, toda la información expuesta tanto en el documento como en los códigos de ejemplo puede ser compartida, adaptada y utilizada -incluso comercialmente por terceros- siempre que se respeten las demás licencias que dependen de las librerías vinculadas.

El código está licenciado bajo BSD y la documentación bajo Creative Commons Reconocimiento 4.0 Internacional.

Quien requiera utilizar en su totalidad o en parte a esta tesina, debe citar a su autor e indicar los cambios realizados -en caso de haberlos hecho- mencionando la siguiente información:

Autor: Federico González Brizzio
Email: fedegonzal@gmail.com
GitHub: http://fedegonzal.github.io/Web-Components/
