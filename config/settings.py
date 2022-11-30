"""
Django settings for config project.

Generated by 'django-admin startproject' using Django 4.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""
from django.utils.translation import gettext_lazy, get_language
get_language()


from pathlib import Path
import os
import sys

import environ  # add this


env = environ.Env(  # add this
    # set casting, default value
    DEBUG=(bool, False)         # add this
)


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

environ.Env.read_env(os.path.join(BASE_DIR, '.env'))  # add this


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG') # env('DEBUG')


# ALLOWED_HOSTS = ['localhost']

ALLOWED_HOSTS = [env('ALLOWED_HOSTS')]
# if DEBUG is False:
# else:
#     ALLOWED_HOSTS = ['*']


# Application definition
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))


# Application definition

INSTALLED_APPS = [
    # packages
    # 'rosetta',
    'modeltranslation',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # packages
    'django_summernote',

    # apps
    'core',
    'posts',
    'products',
    'receta',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['static/templates/'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.i18n',
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'es'

LANGUAGES = [
    ('es', gettext_lazy('Español')), 
    ('en', gettext_lazy('Ingles')),
    ('ru', gettext_lazy('Ruso')),
    ('zh-hans', gettext_lazy('Chino')),
]

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'locale'),
)


MODELTRANSLATION_DEFAULT_LANGUAGE = 'es'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = '/static/'
# STATICFILES_STORAGE = 'cloudinary_storage.storage.StaticHashedCloudinaryStorage'
STATICFILES_DIRS = [
    BASE_DIR / "static",
]
STATIC_ROOT = os.path.join(BASE_DIR, 'static_root')


MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# mail sttings
# if DEBUG is False:
#     EMAIL_BACKEND = env('EMAIL_BACKEND')
#     DEFAULT_FROM_EMAIL = env('DEFAULT_FROM_EMAIL')
#     DEFAULT_TO_EMAIL = env('DEFAULT_TO_EMAIL')

#     EMAIL_HOST = env('EMAIL_HOST')
#     EMAIL_HOST_USER = env('EMAIL_HOST_USER')
#     EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')

# else:
#     EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"  # new
#     DEFAULT_FROM_EMAIL = "will@wsvincent.com"
#     DEFAULT_TO_EMAIL = "angelriera1796@gmail.com"

#     EMAIL_HOST = "smtp.sendgrid.net"  # new
#     EMAIL_HOST_USER = "apikey"  # new
#     EMAIL_HOST_PASSWORD = "<sendgrid_password>"  # new

EMAIL_USE_TLS = True  # new
EMAIL_PORT = 587  # new