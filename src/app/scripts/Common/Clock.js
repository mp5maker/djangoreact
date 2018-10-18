import { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    startTicking() {
        this.myInterval = setInterval(() => this.setTime(), 1000)
    }

    setTime() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    componentDidMount() {
       this.startTicking()
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        return (
            <div>
                <span className="font-size-1">
                    {this.state.time}
                </span>
            </div>
        )
    }
}

export default Clock