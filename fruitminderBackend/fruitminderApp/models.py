from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title

class Tree(models.Model):
    treeName = models.CharField(max_length=120)
    rowNum = models.IntegerField()
    treeNum = models.IntegerField()
    treeAge = models.IntegerField()
    treeVariety = models.CharField(max_length=120)
    treeStatus = models.CharField(max_length=120)
    GPS_coordinates = models.CharField(max_length=120)
