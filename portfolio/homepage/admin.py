from django.contrib import admin
from .models import Project, AcademicHistory, Certificate, ProfessionalExperience, PortfolioSite
from django.contrib.auth.models import Group, User

admin.site.unregister(Group)
admin.site.unregister(User)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_date', 'github_link')
    search_fields = ('title', 'github_link')

@admin.register(AcademicHistory)
class AcademicHistoryAdmin(admin.ModelAdmin):
    list_display = ('institution_name', 'course_start_date', 'course_end_date')
    search_fields = ('institution_name',)

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('certificate_name', 'date_received', 'validity', 'institution_emitted')
    search_fields = ('certificate_name', 'institution_emitted')

@admin.register(ProfessionalExperience)
class ProfessionalExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'start_date', 'end_date')
    search_fields = ('role',)

@admin.register(PortfolioSite)
class PortfolioSiteAdmin(admin.ModelAdmin):
    list_display = ('site_owner', 'presentation_header')
    search_fields = ('site_owner',)
    filter_horizontal = ('projects_built', 'academic_history', 'certificates', 'professional_experience')
    change_form_template = "admin/portfolio_site_change_form.html"

    def response_add(self, request, obj, post_url_continue=None):
        return self.response_post_save_add(request, obj)

    def response_change(self, request, obj):
        return self.response_post_save_change(request, obj)

    def response_post_save_add(self, request, obj):
        # Redirect to the change form for the new object
        return super().response_post_save_add(request, obj)

    def response_post_save_change(self, request, obj):
        # Redirect to the change form for the same object
        return super().response_post_save_change(request, obj)

    # Se existe um site criado, se remove a possibilidade de criar outro
    def has_add_permission(self, request):
        return not PortfolioSite.objects.exists()