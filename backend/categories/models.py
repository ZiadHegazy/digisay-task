from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    child= models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    status = models.BooleanField(default=False)

    
