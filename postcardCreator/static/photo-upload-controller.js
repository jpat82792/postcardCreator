/*
Photo upload controller
*/
console.log("photo-upload-controller.js");
let fileBrowser = document.getElementById('photo-upload');
let photoViewer = document.getElementById('canvas');
let context = photoViewer.getContext('2d');
let mouseInCanvas = false;
let photoPosition = {left: 0, top:0};
let previousMousePosition = {left:0, top:0};
let image = new Image();
let clickOffset = {}
let messageInput = document.getElementById('message');
let canvasClicked = false;
let firstClick = false;

messageInput.addEventListener('change', function(){
	console.log("Typing detected");
});

document.getElementById('load-image').addEventListener('click', function(){
	console.log("load image");
	console.log(fileBrowser.files);
	console.log(fileBrowser.files[0].name);
	let imageUrl = window.URL.createObjectURL(fileBrowser.files[0]);
	image.src = imageUrl;
	image.id='mine';
	image.onload = function(){
	context.drawImage(image, 0, 0);
}

photoViewer.addEventListener('mousedown', function(event){
	console.log('clicked canvas');
	let rect = this.getBoundingClientRect();
	let position = {left:event.clientX,top:event.clientY};
	setPreviousMousePosition(position, rect);
	context.clearRect(0,0,photoViewer.width, photoViewer.height);
	context.drawImage(image, 0, 0);
		context.drawImage(image, 0, 0);
	canvasClicked = true;
});

photoViewer.addEventListener('mousemove', function(event){
	if(canvasClicked){
		console.log("drug");
		let rect = this.getBoundingClientRect();
		let position = {left:event.clientX,top:event.clientY};
		let diff = getMousePositionDiff(position, rect);
		setPhotoPosition(diff);
		context.clearRect(0,0,photoViewer.width, photoViewer.height);
		context.drawImage(image, photoPosition.left, photoPosition.top);
	}
});

window.addEventListener('mouseup', function(){
	canvasClicked = false;
});

let setPreviousMousePosition = function(event, boundingRect){
	previousMousePosition= {left:((event.left - boundingRect.left)),
	top: ((event.top - boundingRect.top))};
	mousePosition = previousMousePosition;
}

let getMousePositionDiff = function(event, boundingRect){
	console.log("getCanvasPosition()");
	//previousPhotoPosition = photoPosition;
	mousePosition = {left:((event.left - boundingRect.left)),
	top: ((event.top - boundingRect.top))};
	let diff = {left: mousePosition.left - previousMousePosition.left, 
		top: mousePosition.top - previousMousePosition.top}
	previousMousePosition = mousePosition;
	return diff;
}

let setPhotoPosition = function(diff){
	photoPosition = {left: photoPosition.left+diff.left, top: photoPosition.top+diff.top};
}

});