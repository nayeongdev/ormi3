from django.shortcuts import render
from django.http import HttpResponse

db = {
    1:{'title':'찐빵', 'price':'1200'},
    2:{'title':'호빵', 'price':'1200'},
    3:{'title':'왕만두', 'price':'1000'},
}

def product(request):
    return render(request, 'product/product.html', {'db':db})

def detail(request, pk):
    if db.get(pk):
      return render(request, 'product/detail.html', {'detail':db.get(pk)})
    else:
       return HttpResponse('잘못된 접근입니다.')