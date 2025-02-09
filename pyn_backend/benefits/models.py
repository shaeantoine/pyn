from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    USER_TYPES = [
        ('EMPLOYEE', 'Employee'),
        ('TEAM_LEAD', 'Team Lead'),
        ('HR', 'HR'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_type = models.CharField(max_length=10, choices=USER_TYPES, default='EMPLOYEE')

class Benefit(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    cost = models.DecimalField(max_digits=10, decimal_places=2)

class EmployeeBenefit(models.Model):
    employee = models.ForeignKey(User, on_delete=models.CASCADE)
    benefit = models.ForeignKey(Benefit, on_delete=models.CASCADE)
    selected_on = models.DateTimeField(auto_now_add=True)