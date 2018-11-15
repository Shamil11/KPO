
var canvas = document.getElementById("conductor");

 if (canvas.getContext){
     var conductor = canvas.getContext('2d');

	conductor.beginPath();
	conductor.arc(75, 75, 50, 0, 2 * Math.PI);
	conductor.stroke();
 }

