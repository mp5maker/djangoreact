from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    SerializerMethodField
)

from django_elasticsearch_dsl_drf.serializers import (
    DocumentSerializer
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

from .documents import (
    PostDocument
)

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'is_superuser',
            'is_active',
            'username',
            'first_name',
            'last_name',
            'date_joined'
        )

class PostBasicSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = (
            'author',
            'title',
            'content'
        )

class PostSerializer(ModelSerializer):
    author = SerializerMethodField()
    author_url = HyperlinkedIdentityField(
        view_name="api:user-detail",
        lookup_field="id"
    )

    class Meta:
        model = Post
        fields = (
            'id',
            'author',
            'author_url',
            'title',
            'content',
        )
    
    def get_author(self, obj):
        return str(obj.author.username)

class PostDocumentSerializer(DocumentSerializer):
 
    class Meta:
        document = PostDocument
        fields = (
            'id',
            'title',
            'content'
        )