from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    SerializerMethodField
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
