from django.test import TestCase
from .models import Main

# Create your tests here.
class MainModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Main.objects.create(title='first todo')
        Main.objects.create(description='a description here')

    def test_title_content(self):
        todo = Main.objects.get(id=1)
        expected_object_name = f'{todo.title}'
        self.assertEquals(expected_object_name, 'first todo')

    def test_description_content(self):
        todo = Main.objects.get(id=2)
        expected_object_name = f'{todo.description}'
        self.assertEquals(expected_object_name, 'a description here')
