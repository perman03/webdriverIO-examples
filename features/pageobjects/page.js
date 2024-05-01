/**
 * browser es un objeto que proporciona métodos para interactuar con
 * el navegador
 */
const { browser } = require('@wdio/globals')

/**
 * Se exporta una clase llamada ´Page'. Esta clase es un objeto
 ** de página principal que contiene métodos, selectores y
* funcionalidades compartidas que son relevantes para todas las
* páginas de la aplicación o de la web
*/
module.exports = class Page {
    /**
     * Aqui definimos un método llamado "open" que acepta como 
     * argumento un path. Este método se utiliza para abrir una
     * página web especifica dentro del sitio. Toma el path como 
     * un argumento y utiliza el objeto browser para cargar la URL
     * completa concatenando el path a la URL
     */
    open (url) {
        return browser.url(url)
    }

}
