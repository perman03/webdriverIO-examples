/**
 * Importamos las palabras reservadas Given, When y Then del framework
 * de Cucumber para definir los pasos o steps de prueba
 * También se importan las funcionalidades de expect y '$' del
 * paquete de wdio/globals para realizar aserciones y seleccionar
 * elmentos de la página
 * 
 * Tambien se importan las páginas de LoginPage y SecurePage
 * 
 */
const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const GoogleSearch = require('../pageobjects/googleSearch.page');

/* Finalmente se crea un objeto llamado pages que mapea nombres de 
    pagina a clase de página. En este caso, el objeto 'pages' tendrá
    un solo valor: login como llave, y LoginPage como valor
*/
const pages = {
    login: LoginPage,
}

/**
 * Se define un paso de prueba usando la palabra reservada 'Given'
 * Este paso define que el usuario esta en una página. El nombre 
 * de la página es capturado como parámetro usando un regex.
 * Finalmente se llama al método 'open()' de la clase de página
 * para abrir la página
 */
Given('I am on the login page', async () => {
    await pages['login'].open()
});

/**
 * Se define otro step con la palabra WHEN.
 * Este paso simulará el proceos de inicio de sesión en la app.
 * Los nombres de usuario y contraseña son capturados como
 * parámetros para que al final el método login de LoginPage
 * ingrese los datos y haga las acciones
 * para realizar el inicio de sesión
 */

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

/**
 * Finalmente definimos un step llamado THEN. Este paso verifica que
 * se muestre un mensaje de notificación en secure page al hacer 
 * log in. El mensaje es capturado como un parámetro y se espera que
 * el elemento que muestra el mensaje ('flashAlert') exista 
 * y contenga el mensaje esperado
 */
Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


