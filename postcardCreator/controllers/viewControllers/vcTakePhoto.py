from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
import base64
import json
import os
@csrf_exempt
def takePhoto(request):
	if request.method == "GET":
		return render(request, 'takePhoto.html')
	else:
		print("POST")
		body_unicode = request.body.decode('utf-8')
		body = json.loads(body_unicode)
		#data = ContentFile(base64.decodebytes(body['hello']))
		f = open("okay1.png", "wb")
		f.write(base64.b64decode(body['hello']))
		f.close()
		#default_storage.save(f.name, f)
		
		return render(request, 'takePhoto.html')