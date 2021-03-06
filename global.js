window.addEventListener("load", function(){
	var theater_data = document.getElementById("theater-data");
	var show_data = document.getElementById("show-data");
	var nominee_data = document.getElementById("nominee-data");
	var role_data = document.getElementById("role-data");

	var show = document.getElementById("show");
	var nominee = document.getElementById("nominee");
	var role = document.getElementById("role");



	var theater_request = new XMLHttpRequest();

	theater_request.onreadystatechange = function(response) {
  		if (theater_request.readyState === 4) {
    		if (theater_request.status === 200) {
				var response = JSON.parse(theater_request.response);
				var theater_arr = Object.keys(response.theaters);
				for(i=0; i<theater_arr.length; i++){
						theater_arr[i] = theater_arr[i].split("_").join(" ");
					}


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

	theater_request.open("get","info.txt");
	theater_request.send();



	show.addEventListener("mouseenter", function(){
		while(show_data.children.length > 0){
			show_data.removeChild(show_data.children[0]);
		}

		show_request = new XMLHttpRequest();

		show_request.onreadystatechange = function(response) {
			var theater = document.getElementById("theater").value.split(" ").join("_");
	  		if (show_request.readyState === 4) {
	    		if (show_request.status === 200) {
					var response = JSON.parse(show_request.response);
					var show_arr = Object.keys(response.theaters[theater]);

					for(i=0; i<show_arr.length; i++){
						show_arr[i] = show_arr[i].split("_").join(" ");
					}

					// Loop over the JSON array.
					show_arr.forEach(function(item) {
				    // Create a new <option> element.
				    	var option = document.createElement('option');
				    // Set the value using the item in the JSON array.
				    	option.value = item;
				    // Add the <option> element to the <datalist>.
				    	show_data.appendChild(option);
					});
				}
			}	
	};

	show_request.open("get","info.txt");
	show_request.send();

	});


	nominee.addEventListener("mouseenter", function(){
		while(nominee_data.children.length > 0){
			nominee_data.removeChild(nominee_data.children[0]);
		}

		nominee_request = new XMLHttpRequest();

		nominee_request.onreadystatechange = function(response) {
			var show = document.getElementById("show").value.split(" ").join("_");
			var theater = document.getElementById("theater").value.split(" ").join("_");
	  		if (nominee_request.readyState === 4) {
	    		if (nominee_request.status === 200) {
					var response = JSON.parse(nominee_request.response);
					var nominee_arr = Object.keys(response.theaters[theater][show]);

					for(i=0; i<nominee_arr.length; i++){
						nominee_arr[i] = nominee_arr[i].split("_").join(" ");
					}

					// Loop over the JSON array.
					nominee_arr.forEach(function(item) {
				    // Create a new <option> element.
				    	var option = document.createElement('option');
				    // Set the value using the item in the JSON array.
				    	option.value = item;
				    // Add the <option> element to the <datalist>.
				    	nominee_data.appendChild(option);
					});
				}
			}	
	};

	nominee_request.open("get","info.txt");
	nominee_request.send();

	});
	
	


	role.addEventListener("mouseenter", function(){
		while(role_data.children.length > 0){
			role_data.removeChild(role_data.children[0]);
		}

		role_request = new XMLHttpRequest();

		role_request.onreadystatechange = function(response) {
			var nominee = document.getElementById("nominee").value.split(" ").join("_");
			var show = document.getElementById("show").value.split(" ").join("_");
			var theater = document.getElementById("theater").value.split(" ").join("_");
	  		if (role_request.readyState === 4) {
	    		if (role_request.status === 200) {
					var response = JSON.parse(role_request.response);
					var role_arr = response.theaters[theater][show][nominee];
					for(i=0; i<role_arr.length; i++){
						role_arr[i] = role_arr[i].split("_").join(" ");
					}

					// Loop over the JSON array.
					role_arr.forEach(function(item) {
				    // Create a new <option> element.
				    	var option = document.createElement('option');
				    // Set the value using the item in the JSON array.
				    	option.value = item;
				    // Add the <option> element to the <datalist>.
				    	role_data.appendChild(option);
					});
				}
			}	
	};

	role_request.open("get","info.txt");
	role_request.send();

	});
});