function GeoWindow(title) {
	var self = Ti.UI.createWindow({
		//title:title,
		navBarHidden: true,
		backgroundColor:'white'
	});
	
	
	/// test out some cloud storage
	var Cloud = require('ti.cloud');
	Cloud.debug = true;
	
	
	var button = Ti.UI.createButton({
		borderColor:  "blue",
		height:44,
		width:200,
		title:"Get Location",
		bottom:5
	});
	self.add(button);
	
	var textArea = Ti.UI.createTextArea({
	  value : 'Location data',
	  height : 170,
	  width : 300,
	  top : 4,
	  font : {fontSize:12},  // fontFamily:'Marker Felt', fontWeight:'bold'},
	  color : '#888',
	  textAlign : 'left',
	  appearance : Ti.UI.KEYBOARD_APPEARANCE_ALERT,
	  keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	  returnKeyType : Ti.UI.RETURNKEY_DONE,
	  borderWidth : 2,
	  borderColor : '#bbb',
	  borderRadius : 5
	});
	self.add(textArea);
	
	var textArea2 = Ti.UI.createTextArea({
	  value : 'Places',
	  height : 180,
	  width : 300,
	  top : 180,
	  font : {fontSize:12},  // fontFamily:'Marker Felt', fontWeight:'bold'},
	  color : '#888',
	  textAlign : 'left',
	  appearance : Ti.UI.KEYBOARD_APPEARANCE_ALERT,
	  keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	  returnKeyType : Ti.UI.RETURNKEY_DONE,
	  borderWidth : 2,
	  borderColor : '#bbb',
	  borderRadius : 5
	});
	self.add(textArea2);
	
	// Get current position - on window open


	
	
	
	// Track location
	/*
	if (Ti.Geolocation.locationServicesEnabled) {
	    Ti.Geolocation.purpose = 'Track as you move';
	    Ti.Geolocation.addEventListener('location', function(e) {
	        if (e.error) {
	            alert('Error: ' + e.error);
	        } else {
	        	var d = new Date(e.coords.timestamp);
	            //Ti.API.info(e.coords);
	            var msg = d.toLocaleTimeString() +"\n\t" +e.coords.latitude +"\n\t" +e.coords.longitude;
	         	///////textArea.value = msg;
	         	textArea2.value = e.coords;
	        }
	    });
	} else {
	    alert('You need to enable location services');
	}
	*/
	
	Ti.Geolocation.forwardGeocoder('440 Bernardo Ave Mountain View CA', function(e) {
    	//////Ti.API.info(e);
	});
	
	
	button.addEventListener('click', function() {
		getLoc();
	});
	
		function getLoc() {	
		if (Ti.Geolocation.locationServicesEnabled) {
		    Ti.Geolocation.purpose = 'Get your current run location';
		    Ti.Geolocation.getCurrentPosition(function(e) {
		        if (e.error) {
		            Ti.API.error('Error: ' + e.error);
		        } 
		        else {
		            Ti.API.info(e.coords);
		            textArea.value = e.coords;
		            Ti.Geolocation.reverseGeocoder(e.coords.latitude, e.coords.longitude, function(egeo) {
		            	 if (egeo.error) {
		            		//Ti.API.error('Error: ' + egeo.error);
		            		textArea2.value = egeo.error;
		        		} 
		        		else {
	   						//Ti.API.info(egeo);
	   						textArea2.value = egeo.places[0];
	   					}
					});
		        }
		    });
		} else {
		    alert('Please enable location services');
		}
		
		//end of func
	}
	
	
	
	
	
	return self;
};

module.exports = GeoWindow;
