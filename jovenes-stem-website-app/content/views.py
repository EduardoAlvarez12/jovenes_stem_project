from rest_framework import viewsets
from .serializer import SectionSerializer, ImageSerializer, TextContentSerializer, TextContentImageSerializer
from .models import Section, Image, TextContent, TextContentImage

# Create your views here.
class SectionView(viewsets.ModelViewSet):
    serializer_class = SectionSerializer
    queryset = Section.objects.all()

class ImageView(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()

class TextContentView(viewsets.ModelViewSet):
    serializer_class = TextContentSerializer
    queryset = TextContent.objects.all()

class TextContentImageView(viewsets.ModelViewSet):
    serializer_class = TextContentImageSerializer
    queryset = TextContentImage.objects.all()