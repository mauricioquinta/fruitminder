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

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TreeView(viewsets.ModelViewSet):
    serializer_class = TreeSerializer
    queryset = Tree.objects.all()


