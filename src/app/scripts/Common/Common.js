import { Component } from 'react'

class DjangoSidebarTitle extends Component {
    render() {
        return (
            <h4 className="teal-text text-darken-1">
                <span>
                    Table of Contents
                </span>
            </h4>
        )
    }
}

class DjangoContentTitle extends Component {
    render() {
        return (
            <h4 className="white-text">
                <span>
                    Django React Content
                </span>
            </h4>
        )
    }
}

export {DjangoSidebarTitle, DjangoContentTitle}