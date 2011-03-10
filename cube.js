	var targetRotation = -35;
	var targetRotationOnMouseDown = 0;
	var mouseX = 0;
	var mouseXOnMouseDown = 0;
	document.addEventListener('mousedown', onDocumentMouseDown, false);
	document.addEventListener('touchstart', onDocumentTouchStart, false);
	document.addEventListener('touchmove', onDocumentTouchMove, false);
	setInterval(loop, 16);
	function onDocumentMouseDown(event) 
	{
 		event.preventDefault();
 		document.addEventListener('mousemove', onDocumentMouseMove, false);
		document.addEventListener('mouseup', onDocumentMouseUp, false);
		//document.addEventListener('mouseout', onDocumentMouseOut, false);

		mouseXOnMouseDown = event.clientX;
		targetRotationOnMouseDown = targetRotation;
	}
 
	function onDocumentMouseMove( event ) 
	{
 		mouseX = event.clientX;
 		targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) *0.9;
	}
 
	function onDocumentMouseUp( event ) 
	{
		document.removeEventListener('mousemove', onDocumentMouseMove, false);
		document.removeEventListener('mouseup', onDocumentMouseUp, false);
		document.removeEventListener('mouseout', onDocumentMouseOut, false);
	}
 
	function onDocumentMouseOut( event ) 
	{
 		document.removeEventListener('mousemove', onDocumentMouseMove, false);
		document.removeEventListener('mouseup', onDocumentMouseUp, false);
		document.removeEventListener('mouseout', onDocumentMouseOut, false);
	}
 
	function onDocumentTouchStart( event ) 
	{
 		if(event.touches.length == 1) 
		{
 			event.preventDefault();
 			mouseXOnMouseDown = event.touches[0].pageX;
			targetRotationOnMouseDown = targetRotation;
		}
	}
 
	function onDocumentTouchMove( event ) 
	{
		if(event.touches.length == 1) 
		{
			event.preventDefault();
 			mouseX = event.touches[0].pageX;
			targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) *0.9;
		}
	}

  	function loop() 
	{
 		$('cube').style.webkitTransform = "rotateY("+targetRotation+"deg)";	
	}  	