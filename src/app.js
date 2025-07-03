import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {

  function generateExcuse() {

    const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro', 'Mi amigo', 'Mi vecino'];
    const action = ['comió', 'orinó', 'aplastó', 'rompió','perdió', 'vendió'];
    const what = ['mi tarea', 'mi telefono', 'el coche', 'la mesa', 'el proyecto']; 
    const when = ['antes de la clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante la comida', 'mientras programaba'];  

    function randomWho() {
      const randomNumberWho = Math.floor(Math.random() * who.length);
      return randomNumberWho;
    } 

    function randomAction() {
      const randomNumberAction = Math.floor(Math.random() * action.length);
      return randomNumberAction;
    }

    function randomWhat() {
      const randomNumberWhat = Math.floor(Math.random() * what.length);
      return randomNumberWhat;
    }
    
    function randomWhen() { 
      const randomNumberWhen = Math.floor(Math.random() * when.length);
      return randomNumberWhen;
    } 

    return who[randomWho()] + " " + action[randomAction()] + " " + what[randomWhat()] + " " + when[randomWhen()];
  }

  const excuse = generateExcuse();  

  document.getElementById("excuse").innerHTML = excuse; 
}  

