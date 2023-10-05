from django.shortcuts import render
from django.http import HttpResponse

db = {
    1:{'title':'환불', 'content':'환불해주세요.'},
    2:{'title':'배송', 'content':'배송은 언제되나요'},
    3:{'title':'교환', 'content':'교환하길 원합니다'},
}

def notice(request):
    return render(request, 'notice/notice.html', {'db':db})

def free(request):
   return render(request, 'notice/free/free.html')

def oneone(request):
   return render(request, 'notice/oneone/oneone.html')

def detail(request, pk):
    if not db.get(pk):
       return HttpResponse('잘못된 접근입니다.')
    
    if 'free' in request.path:
        return render(request, 'notice/free/detail.html', {'detail':db.get(pk)})
    elif 'oneone' in request.path:
        return render(request, 'notice/oneone/detail.html', {'detail':db.get(pk)})