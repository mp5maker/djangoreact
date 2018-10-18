import { Component } from 'react'
import Clock from './Clock'

class FloatingActionButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTimerOn: false
        }
        this.turnOnClock = this.turnOnClock.bind(this)
    }

    activateFloatingActionButton() {
        document.addEventListener('DOMContentLoaded', () => {
            var elems = document.querySelectorAll('.fixed-action-btn')
            M.FloatingActionButton.init(elems)
        })
    }

    turnOnClock(event) {
        event.preventDefault()
        this.setState({
            isTimerOn: !this.state.isTimerOn
        })
        console.log("Timer Status : " + this.state.isTimerOn)
    }

    componentDidMount() {
        this.activateFloatingActionButton()
    }

    render() {
        return (
            <div>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large indigo">
                        <i className="fa fa-pencil-square-o"></i>
                    </a>
                    <ul>
                        <li onClick={this.turnOnClock}>
                            <a className="btn-floating red">
                                <i className="fa fa-clock-o"></i>
                            </a>
                        </li>
                        <li className={this.state.isTimerOn ? "" : "hidden"}>
                            <a className="btn-floating btn-large deep-purple">
                                <Clock />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default FloatingActionButton