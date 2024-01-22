from django.db import models
from django.core.exceptions import ValidationError

class Project(models.Model):
    title = models.CharField(max_length=255)
    published_date = models.DateField()
    github_link = models.URLField()
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/')
    demo_link = models.URLField()
    technologies_used = models.JSONField(default=list)

    def __str__(self):
        return self.title

class AcademicHistory(models.Model):
    institution_name = models.CharField(max_length=255)
    course_start_date = models.DateField()
    course_end_date = models.DateField()
    institution_image = models.ImageField(upload_to='institution_images/', blank=True, null=True)

    def __str__(self):
        return self.institution_name
    
    class Meta:
        verbose_name = "Academic History"
        verbose_name_plural = "Academic History"

class Certificate(models.Model):
    certificate_name = models.CharField(max_length=255)
    date_received = models.DateField()
    validity = models.BooleanField(default=True)
    institution_emitted = models.CharField(max_length=255)
    expiration_date = models.DateField(null=True, blank=True)
    certificate_id = models.CharField(max_length=50)

    def __str__(self):
        return self.certificate_name

class ProfessionalExperience(models.Model):
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    technologies_used = models.JSONField(default=list)
    achievements = models.TextField()
    job_description = models.TextField()
    role = models.CharField(max_length=255)
    published_related_work = models.URLField(null=True, blank=True)

    def __str__(self):
        return f"{self.role} at {self.start_date}"

class PortfolioSite(models.Model):
    site_owner = models.CharField(max_length=255)
    presentation_header = models.CharField(max_length=255)
    about_me = models.TextField()
    projects_built = models.ManyToManyField(Project, blank=True)
    academic_history = models.ManyToManyField(AcademicHistory, blank=True)
    certificates = models.ManyToManyField(Certificate, blank=True)
    professional_experience = models.ManyToManyField(ProfessionalExperience, blank=True)
    credits = models.TextField()

    def __str__(self):
        return self.site_owner
    
    class Meta:
        verbose_name = "Portfolio Site"
        verbose_name_plural = "Portfolio Site"

    def save(self, *args, **kwargs):
        # Check if there is an existing instance
        existing_instance = PortfolioSite.objects.first()

        # If an instance already exists, prevent saving a new one
        if existing_instance and self.pk != existing_instance.pk:
            raise ValidationError("Only one PortfolioSite instance can exist.")
        
        super().save(*args, **kwargs)