export const locationService = {
    getLocations
};


function getLocations() {
	return new Promise(function(resolve, reject) {
		return fetch('http://192.168.11.221:3040/mob/get-locations', {
			method: 'GET',
			headers: {
		        'Content-Type': 'application/json',
		  	}	
		    // body: JSON.stringify(mobileno)
		}).then(function(response) {
			var data = response.json();
			resolve(data);
		}).catch(function(err) {
			reject(err);
		})
	});
}
