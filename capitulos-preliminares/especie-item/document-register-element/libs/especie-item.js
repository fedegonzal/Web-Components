document.registerElement('especie-item', {
  prototype: Object.create(
    HTMLElement.prototype, {
    createdCallback: { value: function() {

      // sin emulateTemplate() el código del componente debería 
      // haberse escrito en una sóla línea de string, lo que sería poco legible
      var template = emulateTemplate( function() {
      /*

      <article>
        <h2>Nombre científico: <em param="spName">Scientific Name</em></h2>
        <p>Nombres locales: <span param="localNames">Local names</span></p>
        <p>Autor: <span param="author">Author</span>, <span param="year">Year</span></p>
        <p>Origen: <span param="origin">Native</span></p>
      </article>
      
      */
      });

      this.innerHTML = template;

      // Aquí se reciben y procesan los parámetros recibidos
      this.querySelector("[param=spName]").innerHTML = this.getAttribute("spName") 
        || this.querySelector("[param=spName]").innerHTML;

      this.querySelector("[param=localNames]").innerHTML = this.getAttribute("localNames") 
        || this.querySelector("[param=localNames]").innerHTML;

      this.querySelector("[param=author]").innerHTML = this.getAttribute("author") 
        || this.querySelector("[param=author]").innerHTML;

      this.querySelector("[param=year]").innerHTML = this.getAttribute("year") 
        || this.querySelector("[param=year]").innerHTML;

      this.querySelector("[param=origin]").innerHTML = this.getAttribute("origin") 
        || this.querySelector("[param=origin]").innerHTML;

    }}, // createdCallback

    attributeChangedCallback: { value: function(name, previousValue, value) {
      console.log(name);
      console.log(previousValue);
      console.log(value);
    }} // attributeChangedCallback

  }) // prototype
}); // registerElement

// Esta función, escrita por Nate Ferrero, recibe un string 
// con saltos de línea y lo devuelve en una sola línea
function emulateTemplate(f) {
  return f.toString().match(/\/\*\s*([\s\S]*?)\s*\*\//m)[1];
};
