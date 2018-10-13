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
npm install --save angular angular-animate ui-router [Optional Backup Angular JS 1.0]
npm install --save-dev gulp gulp-sass gulp-concat
```

### Materialize ### 
1. container
2. row
3. col s7 m9 l12  **[S: Small, M: Medium, Large: Large]**
4. col s5 push-s7, col s7 pull s-5, col s6 offset-s6 **[Push, Pull, Offset]**
5. card-panel *[Color Names]* &nbsp; *[Shades of Color]* &nbsp; **[Background Colors]**
6. [Color Names]-text &nbsp; text-*[Shades of Color]* &nbsp; **[Text Colors]**

**[Color Names]**
```bash
a. red
b. pink
c. purple
d. deep-purple
e. indigo
f. blue
g. light-blue
h. cyan
i. teal
j. green
j. light-green
k. lime
l. yellow
m. amber
n. orange
o. deep-orange
p. brown
q. grey
r. blue-grey
s. black
t. white
u. transparent
```

*** 

**[Shades of Color]**
```bash
a. lighten-1, lighten-2, lighten-3, lighten-4, lighten-5
b. darken-1, darken-2, darken-3, darkent-4, darkent-5
c. accent-1, accent-2, accent-3, accent-4, accent-5
```

***

7. Helpers


