from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .serializers import TodoSerializer
from .serializers import TreeSerializer
from .models import Todo
from .models import Tree
from .models import Orchard
from .models import Row
from .models import treeToRow

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TreeView(viewsets.ModelViewSet):
    serializer_class = TreeSerializer
    queryset = Tree.objects.all()

class OrchardView(viewsets.ModelViewSet):
    serializer_class = OrchardSerializer
    queryset = Orchard.objects.all()

class RowView(viewsets.ModelViewSet):
    serializer_class = RowSerializer
    queryset = Row.objects.all()

class TreeToRow(viewsets.ModelViewSet):
    serializer_class = TreeToRowSerializer
    queryset = treeToRow.objects.all()
