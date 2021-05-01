from rest_framework import serializers
from .models import Todo
from .models import Tree
from .models import Orchard
from .models import Row
from .models import treeToRow



class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')

 
class TreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tree
        fields = ('treeName','rowNum','treeNum','treeAge', 'treeVariety','treeStatus','GPS_Coordinates')

class OrchardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orchard
        fields = ('orchardName', 'address','category','fruitType','treeVariety','growingStrategy','further')

class RowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Row
        fields = ('rowNum', 'orchard')

class TreeToRowSerializer(serializers.ModelSerializer):
    class Meta:
        model = treeToRow
        fields = ('treeNum','rowNum')
