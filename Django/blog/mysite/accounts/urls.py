from django.urls import path
from . import views

urlpatterns = [
  path('login/', views.login, name='login'),  # account/login
  path('logout/', views.logout, name='logout'),  # account/logout
]