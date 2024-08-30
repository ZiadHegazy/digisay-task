from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Category
from .serializer import CategorySerializer

def helperCategory(category,array):
    if(category.children.all().count==0):
        array.append(category)
    else:
        array.append(category)
        for child in category.children.all():
            helperCategory(child,array)


@api_view(['POST'])
def create_category(request):
    parent_id = request.data.get('parent_id')
    parentCategory = Category.objects.get(id=parent_id)
    parentName=parentCategory.name
    if(parentName.lower().find("sub") != -1):
        name1="SUB "+parentName+"-"+"1"
        name2="SUB "+parentName+"-"+"2"
        category1=Category.objects.create(name=name1, child=None)
        category2=Category.objects.create(name=name2, child=None)
        parentCategory.children.add(category1)
        parentCategory.children.add(category2)
        parentCategory.status=True
        parentCategory.save()
    else:
        name1="SUB "+parentName+"1"
        name2="SUB "+parentName+"2"
        category1=Category.objects.create(name=name1, child=None)
        category2=Category.objects.create(name=name2, child=None)
        parentCategory.children.add(category1)
        parentCategory.children.add(category2)
        parentCategory.status=True
        parentCategory.save()
    return JsonResponse({"message":"success","data":"category created successfully"})

@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    if(categories.count()==0):
        category1=Category.objects.create(name="Category A", child=None)
        category2=Category.objects.create(name="Category B", child=None)
    categories = Category.objects.all()

    all_categories = []
    helperCategory(categories[0],all_categories)
    helperCategory(categories[1],all_categories)
    serializer=CategorySerializer(all_categories,many=True)
    
    return JsonResponse({"message":"success","data":serializer.data})
