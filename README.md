## Django React Materialize Rest Framework ##
**Getting Started**

*Django Requirement*
```bash
pip install virtualenvwrapper
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
* container
* row
* col s7 m9 l12  **[S: Small, M: Medium, Large: Large]**
* col s5 push-s7, col s7 pull s-5, col s6 offset-s6 **[Push, Pull, Offset]**
* card-panel *[Color Names]* &nbsp; *[Shades of Color]* &nbsp; **[Background Colors]**
* [Color Names]-text &nbsp; text-*[Shades of Color]* &nbsp; **[Text Colors]**
    * **[Color Names]**
        * red
        * pink
        * purple
        * deep-purple
        * indigo
        * blue
        * light-blue
        * cyan
        * teal
        * green
        * light-green
        * lime
        * yellow
        * amber
        * orange
        * deep-orange
        * brown
        * grey
        * blue-grey
        * black
        * white
        * transparent
    **[Shades of Color]**
        * lighten-1, lighten-2, lighten-3, lighten-4, lighten-5
        * darken-1, darken-2, darken-3, darkent-4, darkent-5
        * accent-1, accent-2, accent-3, accent-4, accent-5
    ***

* Helpers
* valign-wrapper [Vertically Align]
* left-align, right-align, center-align [Text Alighnments]
* left, right [Floats]
* [Hiding/Showing Contents]
    * hide 
    * hide-on-small-only 
    * hide-on-med-only
    * hide-on-med-and-up 
    * hide-on-large-only
    * show-on-small
    * show-on-medium
    * show-on-large
    * show-on-medium-up
    * show-on-medium-and-down
* truncate
* hoverable
* browser-default **[Revert Back to Browser Settings]**
* responsive-img
* responsive-video  &nbsp; **[For Video Tag]**
* video-container &nbsp; **[For iframes]** 

### React Setup ###
1. Node JS Should be installed
2. react, react-dom, react-scripts
```bash
npx create-react-app djangoreact
```
