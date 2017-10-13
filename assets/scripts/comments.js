/*
*	Author:	CORMAC NEESON
*	Assignment:	Minor	Project	– Life Saver (Team MAC)
*	Student	ID:	D13122673
*	Date	:	2015/01/25
*/

// SCRIPT OVERVIEW: Mock-up of comment functionality - allows users to temporarily leave comments on blog posts and creates links to recent comments in sidebar

var comment;
var currentTime;
var buttons = document.getElementsByClassName("submit-comment");

var output;

	//alert(button.value); //DEBUG

	function submitComment() {
		// Select correct output div for the button that was clicked on
		output = this.parentNode.previousElementSibling;
		currentTime = new Date();
		comment = this.previousElementSibling.value;
		// Comment length must be greater than 0 to prevent empty comments
		if (comment.length > 0) {
			// Construct correct internal page link for comment being posted
			var lis = $("#comments-list li");
			var currentComment = (lis.length + 1);
			// Post comment plus above link
			output.innerHTML = output.innerHTML + "<div class='comment'>" + "<a name = 'comment-" + currentComment + "'></a>" + comment + "<br><br>" + "Posted at:" + currentTime +"</div>";
			// Empty comment input box after submission
			this.previousElementSibling.value ="";
			/* Update list of recent comments */
			var recentList = document.getElementById("comments-list");
			var li = document.createElement("li");
			li.innerHTML = "<a href='#comment-"+ currentComment +"'>"+comment.substring(0,20)+"</a>";
			/* Add new comment to top of list */
			recentList.insertBefore(li, recentList.childNodes[0]);
			/* Remove last list item if length is greater than 3 */
			if (lis.length >= 3) {
				lis.eq(lis.length - 1).remove();
				}
			//alert (lis.length);   //DEBUG
			}
		else if (comment.length == 0) {
			alert ("Message field is empty!");
			}
		}
	
	// Attach submitComment function as onclick to input submission buttons
	for (i=0;i<buttons.length; i++) {
		//alert (buttons[i]);	//DEBUG
		buttons[i].onclick = submitComment;
	}