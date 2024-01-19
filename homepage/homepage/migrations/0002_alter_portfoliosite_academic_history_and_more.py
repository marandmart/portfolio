# Generated by Django 5.0.1 on 2024-01-18 23:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfoliosite',
            name='academic_history',
            field=models.ManyToManyField(blank=True, to='homepage.academichistory'),
        ),
        migrations.AlterField(
            model_name='portfoliosite',
            name='certificates',
            field=models.ManyToManyField(blank=True, to='homepage.certificate'),
        ),
        migrations.AlterField(
            model_name='portfoliosite',
            name='professional_experience',
            field=models.ManyToManyField(blank=True, to='homepage.professionalexperience'),
        ),
        migrations.AlterField(
            model_name='portfoliosite',
            name='projects_built',
            field=models.ManyToManyField(blank=True, to='homepage.project'),
        ),
    ]