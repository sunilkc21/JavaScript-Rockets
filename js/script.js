       var myCar = {
       	  make: 'Lambho',
       	  type: 'Jet',
       	  color: 'Yellow',
       	  isTurnedOn: false,
       	  seats: [
	           'seat 1', 
	           'seat 2', 
	           'seat 3', 
	           'seat 4'
       	  ],
       	  turnOn: function(){
       	  	this.isTurnedOn = true;
       	  },
       	  fly: function(){
       	  	alert('fly');
       	  },
       	  switch: function(isOn) {
            console.log('My car is turned on : ' + isOn);
            if (isOn == true) {
            	this.isTurnedOn = true;
            } else {
            	this.isTurnedOn = false;
            }
       	  }
       }

       var myName = function(name) {
            alert('My name is : ' + name);
       }

       var changeColor = function() {
            document.getElementById('cool').className = 'cool red';
       }
