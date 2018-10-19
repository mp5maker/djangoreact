import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import { PostListPage, PostRetrievePage, PostCreatePage } from '../Pages/PostPage'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/post' component={PostListPage} />
                    <Route path='/post-detail/:id' component={PostRetrievePage} />
                    <Route path='/post-create' component={PostCreatePage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;