from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from home import views

urlpatterns = [
    # Path del core
    path('', views.home, name="home"),

    # Path del admin
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
