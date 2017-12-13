export const registrationService = {
    registration
};


function registration(data) {
	return new Promise(function(resolve, reject) {
		return fetch('http://192.168.11.221:3040/mob/user/registration', {
			method: 'POST',
			headers: {
		        'Content-Type': 'application/json',
		  	},	
		    body: JSON.stringify(data)
		}).then(function(response) {
			var data = response.json();
			resolve(data);
		}).catch(function(err) {
			reject(err);
		})
	});
}