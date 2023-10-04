from django.contrib import admin
from django.urls import path
from main.views import index, about, contact
from accounts.views import accounts, login, logout
from blog.views import blog, one, two

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('about/', about),
    path('accounts/', accounts),
    path('accounts/login', login),
    path('accounts/logout', logout),
    path('blog/', blog),
    path('blog/1', one),
    path('blog/2', two),
]
