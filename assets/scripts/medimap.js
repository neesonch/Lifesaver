/*
*	Author:	CORMAC NEESON
*	Assignment:	Minor	Project	– Life Saver (Team MAC)
*	Student	ID:	D13122673
*	Date	:	2015/01/25
*/

// SCRIPT OVERVIEW: Show location of hospitals nearby to user - Dublin hospitals only for demo

function initialize () {
	var lat;
	var lng;
	var map;
	var infowindow;
	var hospitals;
	// Get user's permission to use location
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getPosition, error, {enableHighAccuracy:true});
	} 
	else {
		y.innerHTML = "Geolocation is not supported by this browser.";
	}
	
	function getPosition (position) {
			lat = position.coords.latitude;
			lng = position.coords.longitude;
			//alert (lat +' , '+ lng);			//DEBUG
			var center = new google.maps.LatLng(lat,lng);
			// Collect all output nodes - one for large-screen, one for small-screen
			var mapCanvas = document.getElementsByClassName("map-canvas");
			//alert (mapCanvas.length);			//DEBUG
		
			// Set map center and starting zoom level
			var mapOptions = {
				center: center,
				zoom: 12
				};

			for (i=0;i<mapCanvas.length;i++) {
				// Create new map
				var map = new google.maps.Map(mapCanvas[i],mapOptions);
				//alert (i);					//DEBUG
					
				// User location marker
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(lat,lng),
					title: 'Your location'
				});	
				marker.setMap(map);	
				
				// Hospital name and location data
				hospitals = [
					{title: "St Michael's Hospital", lat: 53.2938, lng:-6.1387},
					{title: "St Vincent's Hospital", lat: 53.3167, lng:-6.2127},
					{title: "Mater Hospital", lat: 53.3593, lng:-6.2690},
					{title: "St James's Hospital", lat: 53.3397, lng:-6.2945},
					{title: "Beaumont Hospital", lat: 53.3911, lng:-6.2222},
					{title: "Blackrock Clinic", lat: 53.3039, lng:-6.1879},
					{title: "Our Lady's Hospital Crumlin", lat: 53.326060, lng:-6.317371},
					{title: "Adelaide & Meath Hospital", lat: 53.2911, lng:-6.3786}
					]
					
				// Loop through array of hospitals and attach map marker and info window (pop up on click)
				for (x=0;x<hospitals.length;x++) {
					
					infowindow = new google.maps.InfoWindow({
						});
					
					// Create new marker 
					var marker = new google.maps.Marker({
					position: new google.maps.LatLng(hospitals[x].lat,hospitals[x].lng),
					title: hospitals[x].title
					});	
					marker.setMap(map);
					
					// Set info window content to the title of the marker that clicked on
					google.maps.event.addListener(marker, 'click', function() {
						infowindow.setContent(this.title);
						infowindow.open(map,this);
					});
				}
			
			}
		
		//console.log(marker.title);	//DEBUG
 
	}
	
	function error () {
		alert ("Location unavailable, sorry!");
	}		
}

// Wait until page has finished loading before function triggers
google.maps.event.addDomListener(window, 'load', initialize);