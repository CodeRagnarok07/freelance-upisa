# Generated by Django 4.1 on 2022-09-09 15:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_rename_slug_product_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='galeria',
        ),
        migrations.AddField(
            model_name='product',
            name='miniatura',
            field=models.ImageField(default=1, upload_to=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='product',
            name='nombre',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='product',
            name='nombre_en',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='nombre_es',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='nombre_ru',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='nombre_zh_hans',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.CreateModel(
            name='Galeria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagen', models.ImageField(upload_to='')),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='galeria', related_query_name='galeria', to='products.product')),
            ],
        ),
    ]
