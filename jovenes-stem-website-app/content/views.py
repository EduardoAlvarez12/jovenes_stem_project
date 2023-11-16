from rest_framework import viewsets
from .serializer import SectionSerializer, ImageSerializer, TextContentSerializer, TextContentImageSerializer
from .models import Section, Image, TextContent, TextContentImage

class SectionView(viewsets.ModelViewSet):
    serializer_class = SectionSerializer
    queryset = Section.objects.all()

class ImageView(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    def get_queryset(self):
        """
        Optionally restricts the returned images to a given section,
        by filtering against a `section` query parameter in the URL.
        """
        queryset = Image.objects.all()
        section_name = self.request.query_params.get('section')
        if section_name is not None:
            queryset = queryset.filter(section__name=section_name)
        return queryset    

class TextContentView(viewsets.ModelViewSet):
    serializer_class = TextContentSerializer
    def get_queryset(self):
        """
        Optionally restricts the returned text content to a given section,
        by filtering against a `section` query parameter in the URL.
        """
        queryset = TextContent.objects.all()
        section_name = self.request.query_params.get('section')
        if section_name is not None:
            queryset = queryset.filter(section__name=section_name)
        return queryset

class TextContentImageView(viewsets.ModelViewSet):
    serializer_class = TextContentImageSerializer
    queryset = TextContentImage.objects.all()