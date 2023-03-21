from django.shortcuts import render
from .models import Imagen



def home(request):

    imagenes = Imagen.objects.all()

    return render(request, 'home/home.html', {
        'imagenes': imagenes
    })
