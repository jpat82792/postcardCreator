from django.shortcuts import render

def showTest(request):
	return render(request, 'test.html')