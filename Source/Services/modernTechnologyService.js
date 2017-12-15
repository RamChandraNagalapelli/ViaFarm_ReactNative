export const modernTechService = {
    getList
};


function getList(language) {
	return new Promise(function(resolve, reject) {
		return fetch('http://192.168.11.221:3040/mob/modern-technology', {
			method: 'GET',
			headers: {
		        'Content-Type': 'application/json',
		        'lang-code': language
		  	},	
		    // body: JSON.stringify(mobileno)
		}).then(function(response) {
			var data = response.json();
			resolve(data);
		}).catch(function(err) {
			reject(err);
		})
	});
}
