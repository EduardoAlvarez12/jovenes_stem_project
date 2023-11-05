from rest_framework import viewsets
from .serializer import SectionSerializer, ContentSerializer
from .models import Section, Content

# Create your views here.
class SectionView(viewsets.ModelViewSet):
    serializer_class = SectionSerializer
    queryset = Section.objects.all()

class ContentView(viewsets.ModelViewSet):
    serializer_class = ContentSerializer
    queryset = Content.objects.all()