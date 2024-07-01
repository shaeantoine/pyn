from rest_framework import viewsets
from .models import Benefit, EmployeeBenefit
from .serializers import BenefitSerializer, EmployeeBenefitSerializer

class BenefitViewSet(viewsets.ModelViewSet):
    queryset = Benefit.objects.all()
    serializer_class = BenefitSerializer

class EmployeeBenefitViewSet(viewsets.ModelViewSet):
    queryset = EmployeeBenefit.objects.all()
    serializer_class = EmployeeBenefitSerializer

    def get_queryset(self):
        return self.queryset.filter(employee=self.request.user)
