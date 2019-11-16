var timer = null;
var countDownNumber = 10;

var changeState = function(state) {
	document.body.className = 'body-state' + state;
    countDownNumber = 10;
    document.getElementById('countdown').innerHTML = countDownNumber; 
    clearInterval(timer);
	
	if (state == 2) {
		timer = setInterval(function() {
	     countDownNumber = countDownNumber - 1;
         document.getElementById('countdown').innerHTML = countDownNumber;

         if (countDownNumber <= 0) {
         	
         	changeState(3);
         }
		},500);
	} else if (state == 3) {

		var success = setTimeout(function() {
            var randomNumber = Math.round(Math.random() * 10);

            console.log('random number:' +randomNumber);

            if (randomNumber > 5) {
            	changeState(5);
            } else {
            	changeState(4);
            }
		},2000)
	};
		

}
	


