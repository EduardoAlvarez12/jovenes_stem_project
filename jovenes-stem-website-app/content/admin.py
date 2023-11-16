from django.contrib import admin
from .models import Section, Image, TextContent, TextContentImage

# Register your models here.
apiModels = [Image, Section, TextContent, TextContentImage]

admin.site.register(apiModels)
