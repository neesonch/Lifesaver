

	var x = document.getElementById("output");
	//alert (x);		DEBUG	
	function getLocation() {
		if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, error, {enableHighAccuracy:true});
			} else {
			x.innerHTML = "Geolocation is not supported by this browser.";
			}
			}
			
	function showPosition(position) {
			x.innerHTML = "<p>Latitude: " + position.coords.latitude + 
					"<br>Longitude: " + position.coords.longitude +
					"<br>Accuracy: " + position.coords.accuracy + " meters </p>"; 
			}
			
	function error () {
		x.innerHTML = "<p>Location unavailable, sorry!</p>";
	}