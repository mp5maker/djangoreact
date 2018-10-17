import Sidebar from "../Layouts/Sidebar"
import Content from "../Layouts/Content"

class App extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Content />
            </div>
        )
    }
}
export default App