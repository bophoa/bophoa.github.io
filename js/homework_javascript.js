function mouseOverFUNC()
	{
        document.getElementById("bear").src="images/bearblue.png";
	}

function mouseOutFUNC()
	{
	   document.getElementById("bear").src="images/bear.png";
	}

function mouseDownFUNC()
	{
	   document.getElementById("bear").src="assets/bearformal.png";
	}

function mouseUpFUNC()
	{
	   mouseOverFUNC();
	}

function alertWithMessage() {
   var message = document.getElementById('alertMessage').value;
   window.alert(message);
}