from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Benefit, EmployeeBenefit
from .serializers import UserSerializer, BenefitSerializer, EmployeeBenefitSerializer
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class BenefitViewSet(viewsets.ModelViewSet):
    queryset = Benefit.objects.all()
    serializer_class = BenefitSerializer
    permission_classes = [IsAuthenticated]

class EmployeeBenefitViewSet(viewsets.ModelViewSet):
    queryset = EmployeeBenefit.objects.all()
    serializer_class = EmployeeBenefitSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.profile.user_type == 'HR':
            return self.queryset
        elif user.profile.user_type == 'TEAM_LEAD':
            return self.queryset.filter(employee__profile__user_type='EMPLOYEE')
        else:
            return self.queryset.filter(employee=user)
