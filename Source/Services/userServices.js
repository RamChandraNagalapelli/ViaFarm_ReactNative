import * as userActions from '../Actions/usersActions' 

export const userService = {
    login
};


function login(mobileno) {
	return new Promise(function(resolve, reject) {
		return fetch('http://192.168.11.221:3020/mob/user/login', {
			method: 'POST',
			headers: {
		        'Content-Type': 'application/json',
		  	},	
		    body: JSON.stringify(mobileno)
		}).then(function(response) {
			var data = response.json();
			resolve(data);
		}).catch(function(err) {
			reject(err);
		})
	});
}
