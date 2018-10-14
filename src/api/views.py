from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    RetrieveUpdateAPIView,
    DestroyAPIView,
    RetrieveUpdateDestroyAPIView,
    CreateAPIView,
    ListCreateAPIView,
    ValidationError
)

from rest_framework.mixins import (
    CreateModelMixin,
    ListModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
)

from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)

from rest_framework.pagination import (
    PageNumberPagination,
    LimitOffsetPagination,
)

from django.db.models import (
    Q
)

from django.contrib.auth.models import (
    User
)

from .models import (
    Post
)

from .serializers import (
    UserSerializer,
    PostSerializer
)

class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "id"

class PostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = "id"
