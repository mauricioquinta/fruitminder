from rest_framework import serializers
from .models import Todo
from .models import Tree

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')

 
class TreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tree
        fields = ('treeName','rowNum','treeNum','treeAge', 'treeVariety','treeStatus','GPS_Coordinates')
