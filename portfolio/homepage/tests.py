from django.test import TestCase
from .models import Project, AcademicHistory, Certificate, ProfessionalExperience, PortfolioSite

class ModelTests(TestCase):
    def setUp(self):
        # Create sample data for testing
        self.project = Project.objects.create(
            title='Sample Project',
            published_date='2022-01-01',
            github_link='https://github.com/sample/project',
            description='This is a sample project.',
            demo_link='https://demo.sample/project',
            technologies_used=['Django', 'Python']
        )

        self.academic_history = AcademicHistory.objects.create(
            institution_name='Sample University',
            course_start_date='2020-01-01',
            course_end_date='2024-01-01',
            institution_image='sample_image.jpg'
        )

        self.certificate = Certificate.objects.create(
            certificate_name='Sample Certificate',
            date_received='2023-01-01',
            validity=True,
            institution_emitted='Sample Institution',
            expiration_date='2025-01-01',
            certificate_id='ABC123'
        )

        self.professional_experience = ProfessionalExperience.objects.create(
            start_date='2021-01-01',
            end_date='2022-01-01',
            technologies_used=['Django', 'React'],
            achievements='Achievement 1, Achievement 2',
            job_description='This is a sample job.',
            role='Software Developer',
            published_related_work='https://sample_related_work.com'
        )

        self.portfolio_site = PortfolioSite.objects.create(
            site_owner='John Doe',
            presentation_header='Welcome to My Portfolio',
            about_me='I am a software developer.',
            credits='Special thanks to...',
        )
        self.portfolio_site.projects_built.add(self.project)
        self.portfolio_site.academic_history.add(self.academic_history)
        self.portfolio_site.certificates.add(self.certificate)
        self.portfolio_site.professional_experience.add(self.professional_experience)

    def test_project_model(self):
        self.assertEqual(str(self.project), 'Sample Project')
        # Add more assertions based on your model fields and methods

    def test_academic_history_model(self):
        self.assertEqual(str(self.academic_history), 'Sample University')
        # Add more assertions based on your model fields and methods

    def test_certificate_model(self):
        self.assertEqual(str(self.certificate), 'Sample Certificate')
        # Add more assertions based on your model fields and methods

    def test_professional_experience_model(self):
        self.assertEqual(str(self.professional_experience), 'Software Developer at 2021-01-01')
        # Add more assertions based on your model fields and methods

    def test_portfolio_site_model(self):
        self.assertEqual(str(self.portfolio_site), 'John Doe')
        # Add more assertions based on your model fields and methods