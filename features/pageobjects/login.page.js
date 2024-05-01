/**
 * Importamos varias cosas:
 * importamos la función '$' para seleccionar elementos en la 
 * página web.
 * Importamos la clase 'page' desde el archivo 'page.js' en el 
 * msimo directorio. Esta clase debe contener funcionalidades genericas
 * y comunes para todas las páginas
 */
const { $ } = require('@wdio/globals') 
const Page = require('./page');

/**
 * Ahora debemos definir una nueva clase llamada LoginPage que
 * extiende la clase page. Esto significa que la clase Login Page
 * hereda todas las funciones de Page
 */
class LoginPage extends Page {
    /**
     * Dentro de la clase LoginPage vamos a definir métodos de tipo
     * getter: inputUsername, inputPassword y btnSubmit.
     * Estos métodos devuelven los elementos de la página web
     * correspondiente a un campo de entrada, campo para contraseña
     * y a un boton de envio
     */
    get inputUsername () {
        return $('#username');  //id campo de nombre
    }

    get inputPassword () {
        return $('#password');  //id del campo de password
    }

    get btnSubmit () {
        return $('button[type="submit"]'); // boton de envio
    }

    /**
     * Definimos un método asincrono llamado 'login' que acepta
     * los parámetros username y password. Este metodo se utiliza para
     * automatizar el login.
     */
    async login (username, password) {
        await this.inputUsername.setValue(username); // coloca el nombre
        await this.inputPassword.setValue(password); // coloca la contraseña
        await this.btnSubmit.click(); // da click a login
    }

   /**
    * 
    * Sobreescribe el metodo open heredado de la clase page.
    * Este método se utiliza para abrir la página de inicio 
    * de sesión. LLama al metodo open de la clase page y pasa
    * login como valor del argumento que se estaba esperando.
    * Esto para completar la ruta de automatización
    */
    open () {
        return super.open('https://the-internet.herokuapp.com/login');
    }
}

/**
 * Finalmente exportamos una instancia de la clase LoginPage
 * para usar los metodos en otro archivo (steps.js)
 */
module.exports = new LoginPage();
