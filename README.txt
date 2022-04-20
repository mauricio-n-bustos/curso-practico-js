¿Que es una variable y para qque sirve?
Una variable es un espacio de memoria reservada, utlizada para alojar informacion a la que luego podrá accederse invocando a dicha variable.

¿Cual es la diferencia entre declarar ua variable e inicializarla?
Declarar una variable es asignarle un nombre a dicha variable pero sin asignarle un valor, en cambio, inicializarla es asignarle un valor, ya sea al momento de declararla, o en otra linea y otro momento del codigo.

¿Cual es la diferencia entre sumar numeros y concatenar strings?
Para ambos casos se utiliza el operador aritmeticos de "+", pero en la suma de numeros el resultado será un valor resultante de dicha operacion que reemplazará a los operandos. Mientras que en la concatenacion el resultado será que cada dato se irá posicionando uno al lado del otro.

¿Cual operador me permite sumar o concatenar?
El operador "+"

Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre STRING
Apellido STRING
Nombre de usuario en Platzi STRING
Edad NUMERO
Correo electrónico STRING
Mayor de edad BOOLEAN
Dinero ahorrado NUMERO
Deudas NUMERO

var nombre = "Mauricio";
var apellido = "Bustos";
var user = "mauricio.n.bustos";
var edad = 32;
var email = "mauricio.n.bustos@@gmail.com";
var mayorEdad = true;
var ahorrado = 20000;
var deudas = 100000;

Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

console.log(`Nombre completo: ${nombre} ${apellido}`);
console.log(`Dinero real ${ahorrado}`);

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?
Son un conjunto de sentencias que podemos utilizar para generar ciertas acciones con los valores que guardamos previamente en las variables

¿Cuándo me sirve usar una función en mi código?
Cuando tengo que realizar un procedimiento más de una vez en el proceso, es mejor hacer con una funcion, ya que tendré que escribir el procedimiento solo una vez e invocarlo las veces que sea necesario

¿Cuál es la diferencia entre parámetros y argumentos de una función?

Al momento de declarar una funcion puedo requerirle informacion necesaria para hacerla funcionar. Esta informacion (datos) requeridos al declararla serán llamados parámetros. El valor de dichos parametros al momento de invocar la funcion son llamados argumentos.

Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function presentacion(name, lastName, nickName){
    completeName = `${name} ${lastName}`;
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickName}`);
}

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional?
Un grupo de instrucciones que se ejecuta segun el resultado de una evaluación. Es un trozo de codigo que se ejecutara solo si se cumple cumple una validacion dada. Se puede indicar una instruccion nueva si la condicion no se cumple o continuar con el flujo de ejecucion normal fuera de la condicion. 

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
If, else if, switch y ternario

¿Puedo combinar funciones y condicionales?
si

Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


 Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?
Es una forma de realizar una instruccion repetitiva de forma sencilla, escribiendo el codigo solo una vez, y ejecutandolo mientras se cumpla una condicion dada.

¿Qué tipos de ciclos existen en JavaScript?

FOR, FOR OF, WHILE, DO/WHILE
El FOR ejecuta un trozo de codigo tantas veces como indique el ciclo hasta que se cumpla la condicion dada.
El WHILE ejecuta el codigo mientras x condicion se cumpla. Puede no ejecutarse ni un vez.
Mientras que el DO/WHILE ejecuta el codigo al menos una vez antes de validar la condicion

¿Qué es un ciclo infinito y por qué es un problema?
Un ciclo infinito sucede cuando la condicion dada jamás se cumple, por lo cual el codigo se ejecutara de manera infinita. Es un problema porque rompe el flujo normal de ejecucion y no sale nunca del ciclo, lo que hará que se trabe la ejecucion o incluso el computador.

¿Puedo mezclar ciclos y condicionales?
si

Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.