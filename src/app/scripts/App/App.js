import { Component } from 'react'
import Sidebar from "../Layouts/Sidebar"
import Content from "../Layouts/Content"
import Footer from "../Layouts/Footer"

class App extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default App