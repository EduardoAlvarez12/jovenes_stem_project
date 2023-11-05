from django.urls import path, include
from rest_framework import routers
from content import views

router = routers.DefaultRouter()
router.register(r'sections', views.SectionView, 'sections')
router.register(r'contents', views.ContentView, 'contents')

urlpatterns = [
    path("api/", include(router.urls))
]