import { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <footer className="col s12 center-align red lighten-2 white-text top hoverable">
                    <span>
                        &copy; 2018 Photon Enterprise
                    </span>
                </footer>
            </div>
        )
    }
}

export default Footer