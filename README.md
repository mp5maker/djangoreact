## Django React Materialize Rest Framework ##
**Getting Started**

*Django Requirement*
```bash
mkvirtualenv djangoreact
pip install Django==1.11
pip install djangorestframework
pip install django-filter
pip install django-rest-auth
pip install freeze
pip freeze > requirements.txt

mkdir src
cd src
django-admin startproject settings .
python manage.py startapp app
python manage.py startapp api
```

settings.py
```python
INSTALLED_APP = [
    'app',
    'api',

    'rest_framework',
]

TEMPLATES = [
    {
        'DIRS': [
            os.path.join(BASE_DIR, 'app/templates/landing')
        ],
    }
]

STATICFILES_DIR = [
    os.path.join(BASE_DIR, 'static'),
    os.path.join(BASE_DIR, 'app/templats/landing')
]
```

```bash
python manage.py migrate
python manage.py createsuperuser
```

*Npm Requirements*
```bash
npm init -y
npm install --save jquery popper.js materialize-css
npm install --save angular angular-animate ui-router
npm install --save-dev gulp gulp-sass gulp-concat
```