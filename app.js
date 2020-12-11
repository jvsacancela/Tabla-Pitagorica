function crearTabla(){

     //var tbPitagorica = document.querySelector('#tableBody')
     var tbPitagorica = document.getElementById('tabla')

     var rangoX = prompt("Eje x");
     var rangoY = prompt("Eje y");
 
      var tabla = document.createElement('table');
      var tBody = document.createElement('tbody');
 
      for (var y = 1 ; y <= rangoY ; y++){
             var fila = document.createElement('tr');
 
             for (var x = 1 ; x <= rangoX ; x++){
                  var celda = document.createElement('td');
                  var textoEjeX = document.createTextNode(x * y);
 
                  celda.appendChild(textoEjeX);
                  fila.appendChild(celda);
             }
 
             tBody.appendChild(fila);
      }
 
      tabla.appendChild(tBody);
      tbPitagorica.appendChild(tabla);
      
 
}
