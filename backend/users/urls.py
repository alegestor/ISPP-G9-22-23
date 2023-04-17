from django.urls import path
from users.views import PatientList, PatientCreate, PatientId, MedicList, MedicCreate, MedicId, LoginView, LogoutView, AssignationPatients, PatientsOfMedic

urlpatterns = [
    path("patients/list/", PatientList.as_view()),
    path("patients/", PatientCreate.as_view()),
    path("patients/<int:pk>/", PatientId.as_view(), name="id_patients"),
    path("medics/list/", MedicList.as_view()),
    path("medics/", MedicCreate.as_view()),
    path("medics/<int:pk>/", MedicId.as_view(), name="id_medics"),
    path("login/", LoginView.as_view()),
    path("logout/", LogoutView.as_view()),
    path("medics/<int:pk_medic>/patient/<str:code>/", AssignationPatients.as_view()),
    path("medics/<int:pk_medic>/patients/", PatientsOfMedic.as_view())
]