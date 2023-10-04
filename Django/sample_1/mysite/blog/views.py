from django.shortcuts import render

def blog(request):
    return render(request, 'blog.html')

def one(request):
    return render(request, '1.html')

def two(request):
    return render(request, '2.html')