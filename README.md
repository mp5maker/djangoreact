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
npm install --save-dev axios
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
        * darken-1, darken-2, darken-3, darken-4, darken-5
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
* z-depth-1, z-depth-2, z-depth-3, z-depth-4, z-depth-5 &nbsp; **[Box Shadow]**
* striped, highlight, centered, responsive-table &nbsp; **[Table]**
* btn, waves-effect, waves-light **[Button]**
* .fixed-action-btn>(a.btn-floating.btn-large.red>i)+(ul>li>a.btn-floating) **[Fixed Action Button]**
* .card, .card-image, card-content, card-action, card-title **[Card]**

### React Setup ###
*React Requirements*
```bash
npm install --save-dev @babel/cli @babel/core @babel/preset-env 
npm install --save-dev @babel/preset-env @babel/preset-react
npm install --save-dev babel-loader prop-types
npm install --save-dev react react-dom 
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save react-router
npm install --save react-router-dom
npm install --save react-router-native
npm install --save prop-types
npm install --save react-dropzone
npm install --save react-image-crop
npm install --save react-markdown
```

***

webpack.config.js
```js
const path = require('path');
module.exports = {
    entry: "./src/app/controllers/main.js",
    output: {
        path: path.resolve(__dirname, 'src/static'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ]
    }
};
```

***

.babelrc
```js
{
   "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

### Differences between PUT and PATCH ###
If we want to change the first name then we send a put request for Update
{ "first": "Michael", "last": "Angelo" }
With PUT :: To change just the "first" we need to include both "first" and "last"
With PATCH :: We only the send the data that is needed to change. i.e only "first"