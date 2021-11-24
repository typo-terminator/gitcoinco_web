# Generated by Django 2.2.24 on 2021-11-24 04:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grants', '0127_auto_20211029_0913'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='grantcollection',
            options={'get_latest_by': 'created_on'},
        ),
        migrations.AlterField(
            model_name='grantclr',
            name='type',
            field=models.CharField(choices=[('main', 'Main Round'), ('ecosystem', 'Ecosystem Round'), ('cause', 'Cause Round')], default='main', help_text='Grant CLR Type', max_length=25),
        ),
    ]
