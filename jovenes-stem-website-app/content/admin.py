from django.contrib import admin
from .models import Section, Image, TextContent, TextContentImage

# Register your models here.
apiModels = [Section]

class ImageAdmin(admin.ModelAdmin):
    list_filter = ('section','textcontentimage__text_content')

class TextContentAdmin(admin.ModelAdmin):
    list_filter = ('section',)

class TextContentImageAdmin(admin.ModelAdmin):
    list_filter = ('text_content__section',)

admin.site.register(apiModels)
admin.site.register(Image, ImageAdmin)
admin.site.register(TextContent, TextContentAdmin)
admin.site.register(TextContentImage, TextContentImageAdmin)