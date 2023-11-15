from rest_framework import serializers
from .models import Section, Image, TextContent, TextContentImage

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ('id', 'name', 'description')

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class TextContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextContent
        fields = '__all__'

class TextContentImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextContentImage
        fields = '__all__'