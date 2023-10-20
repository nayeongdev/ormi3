from .models import Book
from .serializers import BookSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class BookViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # user는 현재 로그인한 사용자

    # model에 user필드가 있어야한다.
