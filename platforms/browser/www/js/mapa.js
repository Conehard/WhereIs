var map;
var directionsDisplay; // Instanciaremos ele mais tarde, que será o nosso google.maps.DirectionsRenderer
var directionsService = new google.maps.DirectionsService();
 
function initialize() {
   directionsDisplay = new google.maps.DirectionsRenderer(); // Instanciando...
   var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
 
   var options = {
      zoom: 5,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
 
   map = new google.maps.Map(document.getElementById("mapa"), options);
   directionsDisplay.setMap(map); // Relacionamos o directionsDisplay com o mapa desejado
}
 
initialize();
 
$(document).ready(function(event) {
   event.preventDefault();
 
   var enderecoPartida = "-21.1098446,-42.3838966";
   var enderecoChegada = "-21.1098446,-42.3838966";
 
   var request = { // Novo objeto google.maps.DirectionsRequest, contendo:
      origin: enderecoPartida, // origem
      destination: enderecoChegada, // destino
      travelMode: google.maps.TravelMode.DRIVING // meio de transporte, nesse caso, de carro
   };
 
   directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) { // Se deu tudo certo
         directionsDisplay.setDirections(result); // Renderizamos no mapa o resultado
      }
   });
});