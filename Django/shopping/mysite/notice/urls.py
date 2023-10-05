from django.urls import path
from . import views

urlpatterns = [
    path('', views.notice, name='notice'),
    path('free/', views.free, name='free'),
    path('free/<int:pk>/', views.detail, name='detail'),
    path('oneone/', views.oneone, name='oneone'),
    path('oneone/<int:pk>/', views.detail, name='detail'),
]