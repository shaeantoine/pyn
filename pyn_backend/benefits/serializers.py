from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, Benefit, EmployeeBenefit

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user_type']

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ['id', 'username', 'profile']

class BenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefit
        fields = '__all__'

class EmployeeBenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeBenefit
        fields = '__all__'