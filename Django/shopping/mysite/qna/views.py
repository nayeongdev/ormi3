from django.shortcuts import render
from django.http import HttpResponse

db = {
    1:{'title':'환불', 'content':'환불해주세요.'},
    2:{'title':'배송', 'content':'배송은 언제되나요'},
    3:{'title':'교환', 'content':'교환하길 원합니다'},
}

def qna(request):
    return render(request, 'qna/qna.html', {'db':db})

def detail(request, pk):
    if db.get(pk):
        return render(request, 'qna/detail.html', {'detail':db.get(pk)})
    else:
         return HttpResponse('잘못된 접근입니다.')