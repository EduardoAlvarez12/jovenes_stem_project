from django.contrib import admin
from .models import Section, Content

# Register your models here.
apiModels = [Content, Section]

admin.site.register(apiModels)
