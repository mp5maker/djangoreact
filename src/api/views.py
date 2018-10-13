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

from .serializers import (
    UserSerializer
)

class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer