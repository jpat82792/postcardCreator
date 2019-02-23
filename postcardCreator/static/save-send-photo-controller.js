console.log("save-send-photo-controller");
const sendRequest = function(data){
	let request = new XMLHttpRequest();
	let sendPhotoUrl = "";
	request.open("POST", 'http://localhost:8000/', true);
	request.setRequestHeader("Content-Type", 'application/json');
	request.send(JSON.stringify({hello:data}));	
}
console.log(sendRequest);
let saveButton = document.getElementById('save-image');

saveButton.addEventListener('click', function(event){
	console.log("clicked saveButton");
	let link = document.createElement('a');
	console.log(photoViewer.toDataURL("image/png").split('data:image/png;base64,'));
	sendRequest(photoViewer.toDataURL("image/png").split('data:image/png;base64,')[1]);
	//document.body.append(link);
});