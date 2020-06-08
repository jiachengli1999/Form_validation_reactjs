from django.db import models

# Create your models here.
class image(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images')
    description = models.CharField(max_length=200, default='')
