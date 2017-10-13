/*
*	Author:	CORMAC NEESON
*	Assignment:	Minor	Project	– Life Saver (Team MAC)
*	Student	ID:	D13122673
*	Date	:	2015/01/25
*/

// SCRIPT OVERVIEW: For use with summary/detail elements: when user clicks on a details element, closes any open ones

var sections = document.getElementsByTagName('details');



function openDetails () {
	//alert (this.open);					//DEBUG
	// Cycle through every summary/detail element and close if open (except for the element that was clicked on)
	for (i=0;i<sections.length;i++) {
		if (sections[i].hasAttribute('open') && sections[i]!=this) {
			sections[i].removeAttribute('open');
			}
		}
	//alert (this.hasAttribute('open'));	//DEBUG
	}

// Attach openDetails as an onclick event to every summary/detail element	
for (i=0;i<sections.length;i++) {
	sections[i].onclick = openDetails;
	}