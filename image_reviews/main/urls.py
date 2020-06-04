from django.urls import path
from . import views

urlpatterns = [
    # path('', views.ListMain.as_view()),
    # path('<int:pk>/', views.DetailMain.as_view()),
    # path("register/", views.register, name='register'),
    path('current_user/', views.current_user),
    path('users/', views.UserList.as_view()),
]