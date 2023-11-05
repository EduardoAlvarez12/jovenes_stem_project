from django.db import models

# Create your models here.
class Section(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Content(models.Model):
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    cloud_image_url = models.URLField()  # Use URLField for cloud-stored image URL
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
