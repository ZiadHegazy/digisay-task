from django.urls import path
from .views import create_category,get_categories

categoryUrl=[
    path('createCategory', create_category),
    path('getCategories', get_categories)
]