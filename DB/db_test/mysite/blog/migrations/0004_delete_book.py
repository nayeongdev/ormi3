# Generated by Django 4.2.6 on 2023-10-23 14:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_book_delete_movie'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Book',
        ),
    ]