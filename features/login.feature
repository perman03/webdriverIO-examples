#Se define el nombre de la funcionalidad que vamos a probar
Feature: The Internet Guinea Pig Website

  #definimos un escenario de prueba que describe un caso de uso en especifico
  Scenario Outline: As a user, I can log into the secure area

    #Se usa el GIVEN para establecer el contexto inicial del escenario
    Given I am on the login page
    #Se usa el WHEN para describir la acción que se realiza en el escenario (hacer log in)
    #Los valores username y password seran reemplazados por valores espercificos en la tabla de ejemplos
    When I login with <username> and <password>
    #Se usa la palabra THEN para describir la expectativa del escenario, o la ultima validación del escenario
    #El parámetro message tendrá un valor especificado en la tabla de ejemplos
    Then I should see a flash message saying <message>
#Se proporcionan ejemplos con valores especificos para todos los parámetros
#Estos ejemplos se utilizan para ejecutar el escenario varias veces con diferentes datos
    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
