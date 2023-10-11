from django.urls import path
from . import views

urlpatterns = [
    path("", views.memo, name="memo"),
    path("<int:pk>/", views.memoDetail, name="memoDetail"),
    path("delete/<int:pk>/", views.memoDelete, name="memoDelete"),
]
