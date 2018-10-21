from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    RetrieveUpdateAPIView,
    DestroyAPIView,
    ListCreateAPIView,
    RetrieveUpdateAPIView,
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

from django_elasticsearch_dsl_drf.constants import (
    LOOKUP_FILTER_RANGE,
    LOOKUP_QUERY_IN,
    LOOKUP_QUERY_GT,
    LOOKUP_QUERY_GTE,
    LOOKUP_QUERY_LT,
    LOOKUP_QUERY_LTE,
)
from django_elasticsearch_dsl_drf.filter_backends import (
    FilteringFilterBackend,
    OrderingFilterBackend,
    DefaultOrderingFilterBackend,
    SearchFilterBackend,
)

from django_elasticsearch_dsl_drf.viewsets import (
    DocumentViewSet
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
    PostBasicSerializer,
    PostSerializer,
    PostDocumentSerializer
)

from .documents import (
    PostDocument
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


class PostCreateView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostBasicSerializer


class PostDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostBasicSerializer
    lookup_field = "id"


class PostUpdateView(RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostBasicSerializer
    lookup_field = "id"


class PostDocumentView(DocumentViewSet):
    document = PostDocument
    serializer_class = PostDocumentSerializer
    lookup_field = 'id'

    filter_backends = [
        FilteringFilterBackend,
        OrderingFilterBackend,
        DefaultOrderingFilterBackend,
        SearchFilterBackend,
    ]

    search_fields = (
        'title',
        'content',
    )

    filter_fields = {
        'id': {
            'field': 'id',
            'lookups': [
                LOOKUP_FILTER_RANGE,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_GT,
                LOOKUP_QUERY_GTE,
                LOOKUP_QUERY_LT,
                LOOKUP_QUERY_LTE,
            ],
        },
        'title': 'title.raw',
        'content': 'content.raw',
    }

    ordering_fields = {
        'id': 'id',
        'title': 'title.raw',
        'content': 'content.raw',
    }

    ordering = ('id', )
