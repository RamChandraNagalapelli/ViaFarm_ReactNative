export const categoriesService = {
    getCategories
};


function getCategories(id, language) {
	console.log('in func', id);
	return new Promise(function(resolve, reject) {
		return fetch('http://192.168.11.221:3040/mob/agriculture/get-items/'+id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'lang-code': language,
		  	}	
		}).then(function(response) {
			console.log("Response", response);
			var data = response.json();
			resolve(data);
		}).catch(function(err) {
			console.log("error", err);
			reject(err);
		})
	});
}
