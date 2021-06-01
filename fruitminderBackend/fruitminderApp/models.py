from django.db import models
from django.contrib.postgres.fields import ArrayField


# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    
    def _str_(self):
        return self.title


    
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

    #orcharch manager

    
class Tree(models.Model):
    treeName = models.CharField(max_length=120)
    rowNum = models.IntegerField()
    treeNum = models.IntegerField()
    treeAge = models.IntegerField()
    treeVariety = models.CharField(max_length=120)
    treeStatus = models.CharField(max_length=120)
    GPS_Coordinates = models.CharField(max_length=120)
    orchard = models.ForeignKey(Orchard, on_delete=models.CASCADE, null=True)

    def _str_(self):
        return self.treeName    
    
class Row(models.Model):
    rowNum = models.IntegerField()
    orchard = models.ForeignKey(Orchard, on_delete=models.CASCADE)

class TreeToRow(models.Model):
    treeNum = models.ForeignKey(Tree, on_delete=models.CASCADE)
    row = models.ForeignKey(Row, on_delete=models.CASCADE)

class Zone(models.Model):
    category = models.CharField(max_length=50)
    orchard = models.ForeignKey(Orchard, on_delete=models.CASCADE, null=True)

class TreeToZone(models.Model):
    tree = models.ForeignKey(Tree, on_delete=models.CASCADE)
    zone = models.ForeignKey(Zone, on_delete=models.CASCADE)

    
#zone: irrigation/variety
    #category 
    #tree 
    #

#treeToZone
    #tree
    #zone 
