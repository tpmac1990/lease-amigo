# Generated by Django 4.1 on 2022-11-20 20:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('htmx_lookup', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userfilms',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='film',
            name='users',
            field=models.ManyToManyField(related_name='films', through='htmx_lookup.UserFilms', to=settings.AUTH_USER_MODEL),
        ),
    ]