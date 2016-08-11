window.addEventListener("load", function(){
	var theater = document.getElementById("theater");
	var theater_data = document.getElementById("theater-data");

	var request = new XMLHttpRequest();

	request.onreadystatechange = function(response) {
  		if (request.readyState === 4) {
    		if (request.status === 200) {
				var response = JSON.parse(request.response);
				var theater_arr = Object.keys(response.theaters);

				// Loop over the JSON array.
				theater_arr.forEach(function(item) {
			    // Create a new <option> element.
			    	var option = document.createElement('option');
			    // Set the value using the item in the JSON array.
			    	option.value = item;
			    // Add the <option> element to the <datalist>.
			    	theater_data.appendChild(option);
				});
			}
		}	
	};

	request.open("get","info.txt");
	request.send();
	

});