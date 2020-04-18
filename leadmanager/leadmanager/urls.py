from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    # front-end has to render before the leads
    path('', include('frontend.urls')),
    path('', include('main.urls')),
    path('', include('accounts.urls'))
    #path('admin/', admin.site.urls),
]
