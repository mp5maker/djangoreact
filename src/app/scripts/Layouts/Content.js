import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DjangoContentTitle } from "../Common/Common"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

class Content extends React.Component {
    render() {
        return(
            <div className="col s9 card-panel teal darken-1 hoverable">
                <DjangoContentTitle />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Content;