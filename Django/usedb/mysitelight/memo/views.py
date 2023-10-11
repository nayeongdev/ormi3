from django.shortcuts import render, redirect
from .models import Memo
from django.db.models import Q


def memo(request):
    if request.GET.get("q"):
        q = request.GET.get("q")
        db = Memo.objects.filter(
            Q(title__icontains=q) | Q(contents__icontains=q)
        ).distinct()
    else:
        db = Memo.objects.all()
    context = {
        "db": db,
    }
    return render(request, "memo/memo.html", context)


def memoDetail(request, pk):
    db = Memo.objects.get(pk=pk)
    context = {
        "db": db,
    }
    return render(request, "memo/memo-detail.html", context)


def memoDelete(request, pk):
    db = Memo.objects.get(pk=pk)
    db.delete()
    return redirect("memo")
