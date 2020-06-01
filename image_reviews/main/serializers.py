from rest_framework import serializers
from .models import Main


class MainSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = Main
