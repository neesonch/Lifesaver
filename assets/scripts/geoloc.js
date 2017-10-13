/*
*	Author:	CORMAC NEESON
*	Assignment:	Minor	Project	– Life Saver (Team MAC)
*	Student	ID:	D13122673
*	Date	:	2015/01/25
*/

// SCRIPT OVERVIEW: Get users location and display on map

	//var x = document.getElementById("gmap").src;	//DEBUG
	// Gather all output elements (one for large-screen, one for small-screen)
	var y = document.getElementsByClassName("gmap");
	//alert (x);		//DEBUG	
	function getLocation() {
		// Check user permission to use location
		if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, error, {enableHighAccuracy:true});
		} 
		else {
			for (i=0;i<y.length;i++) {
				y[i].innerHTML = "Geolocation is not supported by this browser.";
				}
		}
	}
			
	function showPosition(position) {
			// Construct and insert embedded Google map using user latitude and longitude
			for (i=0;i<y.length;i++) {
				y[i].innerHTML ="";
				y[i].innerHTML = '<iframe id="gmap" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q='+position.coords.latitude+'+'+position.coords.longitude+'&key=AIzaSyCa9wrFQDtahsK5hqvRrivBxA52ZFsqWew"></iframe>';
				}
			}
			
	function error () {
		y.innerHTML = "<p>Location unavailable, sorry!</p>";
	} 
	
