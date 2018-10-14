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
import PostList  from './Post/Post'

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
