
export const userService = {
    login
};


function login(mobileno) {
	console.log("var1", mobileno);
	return fetch('http://192.168.11.221:3020/mob/user/login', {
		method: 'POST',
		headers: {
	        'Content-Type': 'application/json',
	  	},	
	    body: JSON.stringify(mobileno)
	}).then((response) => response.json())
	.then((responseJson) => {
	    console.log("response", responseJson);// your JSON response is here
	})
	.catch((error) => {
	    console.log("error",error);
	});	
}
