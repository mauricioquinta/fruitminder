from django.db import models
from django.contrib.postgres.fields import ArrayField


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
    GPS_Coordinates = models.CharField(max_length=120)
    orchard = models.ForeignKey(Orchard, on_delete=models.CASCADE)

    def _str_(self):
        return self.treeName
    
class Orchard(models.Model):
    orchardName = models.CharField(max_length=40)
    address = models.CharField(max_length=120)
    category = ArrayField(
        models.CharField(max_length=20, blank=True))
    fruitType = ArrayField(
        models.CharField(max_length=20, blank=True))
    treeVariety  = ArrayField(
        models.CharField(max_length=20, blank=True))
    growingStrategy  = ArrayField(
        models.CharField(max_length=20, blank=True))
    further = models.CharField(max_length=250)
    
    
class Row(models.Model):
    rowNum = models.IntegerField()
    orchard = models.ForeignKey(Orchard, on_delete=models.CASCADE)

class treeToRow(models.Model):
    treeNum = models.ForeignKey(Tree)
    rowNum = models.ForeignKey(Row)
