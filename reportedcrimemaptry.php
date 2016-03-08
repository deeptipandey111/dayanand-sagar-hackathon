<!DOCTYPE html>
<html>
<head>
<script
src="http://maps.googleapis.com/maps/api/js">
</script>

<script>
var amsterdam=new google.maps.LatLng(52.395715,4.888916);
var amsterdam2=new google.maps.LatLng(62.613939,8.209021);
function initialize()
{
var mapProp = {
  center:amsterdam,
  zoom:7,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var myCity = new google.maps.Circle({
  center:amsterdam,
  radius:20000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#FF0000",
  fillOpacity:0.8
  });

var myCity2 = new google.maps.Circle({
  center:amsterdam2,
  radius:20000,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
  });

myCity.setMap(map);
myCity2.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>

<body>
<div id="googleMap" style="width:500px;height:380px;"></div>
</body>
</html>

