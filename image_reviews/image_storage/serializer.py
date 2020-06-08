from rest_framework import serializers 
from .models import image

class imageSerializer(serializers.ModelSerializer):
    class Meta:
        model = image
        fields = 'id', 'title', 'image', 'description'