from django.urls import path, include
from rest_framework import routers
from content import views

router = routers.DefaultRouter()
router.register(r'sections', views.SectionView, 'sections')
router.register(r'images', views.ImageView, 'images')
router.register(r'text-contents', views.TextContentView, 'text-contents')
router.register(r'text-content-images', views.TextContentImageView, 'text-content-images')

urlpatterns = [
    path("api/", include(router.urls))
]