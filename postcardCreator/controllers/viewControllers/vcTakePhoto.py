from django.shortcuts import render

def takePhoto(request):
	return render(request, 'takePhoto.html')