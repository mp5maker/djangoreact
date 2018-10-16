/**
 * Simple Example to test
 */

/* 
    helloWorld = React.createElement('h4', { className: "title" }, "Hello World");
    ReactDOM.render(
        helloWorld,
        document.getElementById('hello-world'),
    )
*/

import { DjangoSidebarTitle, DjangoContentTitle } from './Common/App'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import PostList  from './Post/Post'
import Home  from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

ReactDOM.render(
    <DjangoSidebarTitle />,
    document.getElementById('django-sidebar-title')
)

ReactDOM.render(
    <DjangoContentTitle />,
    document.getElementById("django-content-title")
)

ReactDOM.render(
    <PostList />,
    document.getElementById('django-post-list')
)

ReactDOM.render(
    (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById('pages')
)