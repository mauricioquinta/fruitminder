from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Todo
from .models import Tree

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Todo, TodoAdmin)

class TreeAdmin(admin.ModelAdmin):
    list_display = ('treeName','rowNum','treeNum','treeAge', 'treeVariety','treeStatus','GPS_Coordinates' )

admin.site.register(Tree, TreeAdmin)

