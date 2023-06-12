/*Deberas realizar un semáforo utilizando JS.
El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
Se debe respetar el orden de los colores:
De rojo pasa a Verde.
De amarillo puede pasar a Rojo.
De Verde pasa a Amarillo.*/


function cambiarColorSemaforo() {
    console.log('Verde');
    setTimeout(function() {
      console.log('Amarillo');
      setTimeout(function() {
        console.log('Rojo');
        setTimeout(function() {
          cambiarColorSemaforo(); // Vuelve a empezar con verde
        }, 2000); // Espera 2 segundos en rojo
      }, 1000); // Espera 1 segundo en amarillo
    }, 2000); // Espera 2 segundos en verde
  }
  
  cambiarColorSemaforo();
  