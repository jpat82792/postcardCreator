const sendRequest = function(data){
	let request = new XMLHttpRequest();
	let sendPhotoUrl = "";
	request.open("POST", 'http://localhost:8000/', true);
	request.setRequestHeader("Content-Type", 'application/json');
	request.send(JSON.stringify({hello:data}));	
}