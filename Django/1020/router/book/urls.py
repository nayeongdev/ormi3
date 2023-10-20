from django.contrib import admin
from django.urls import path, include

# DefaultRouter는 기능이 많고, SimpleRouter는 기능이 적다
from rest_framework.routers import DefaultRouter

from .views import BookViewSet

router = DefaultRouter()
router.register("", BookViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
