from django.conf.urls import url
from .views import (
    UserListView,
    UserDetailView,
    PostListView,
    PostDetailView
)

app_name = "api"

urlpatterns = [
    url(r'^user$', UserListView.as_view(), name="user-list"),
    url(r'^user/(?P<id>[0-9]+)$', UserDetailView.as_view(), name="user-detail"),
    url(r'^post$', PostListView.as_view(), name="post-list"),
    url(r'^post/(?P<id>[0-9]+)$', PostDetailView.as_view(), name="post-detail"),
]
