function initMap (bubbleTea) {

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: new google.maps.LatLng(bubbleTea.lat, bubbleTea.long),
  mapTypeId: google.maps.MapTypeId.ROADMAP
})

var infowindow = new google.maps.InfoWindow({})

var marker = new google.maps.Marker({
  position: new google.maps.LatLng(bubbleTea.lat, bubbleTea.long),
  map: map
})

google.maps.event.addListener(marker, 'click', (function (marker) {
  return function () {
    infowindow.setContent(bubbleTea.info)
    infowindow.open(map, marker)
  }
})(marker))
}

window.onload = function () {
  console.log('OIHUGV')
  initMap({
    info: '<?php echo $bubble_tea[0]['name']; ?>',
    lat: <?php echo $bubble_tea[0]['latitude']; ?>,
    long: <?php echo $bubble_tea[0]['longitude']; ?>
  })
}
