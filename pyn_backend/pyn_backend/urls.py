from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from benefits.views import BenefitViewSet, EmployeeBenefitViewSet

router = DefaultRouter()
router.register(r'benefits', BenefitViewSet)
router.register(r'employee-benefits', EmployeeBenefitViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
]
