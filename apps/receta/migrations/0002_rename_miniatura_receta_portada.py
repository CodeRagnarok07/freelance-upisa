# Generated by Django 3.2.19 on 2023-07-03 19:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('receta', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='receta',
            old_name='miniatura',
            new_name='portada',
        ),
    ]
