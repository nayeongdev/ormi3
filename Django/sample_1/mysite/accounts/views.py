from django.shortcuts import render

def accounts(request):
    return render(request, 'accounts.html')

def login(request):
    return render(request, 'login.html')

def logout(request):
    return render(request, 'logout.html')