from django.urls import path
from . import views

urlpatterns = [
  path('', views.blog, name='blog'),  # blog/
  path('<int:pk>/', views.post, name='post'),  # blog/1, blog/2, blog/3, ..
  path('bookinfo/', views.bookinfo, name='bookinfo'),  # blog/bookinfo
]