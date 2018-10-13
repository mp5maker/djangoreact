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
