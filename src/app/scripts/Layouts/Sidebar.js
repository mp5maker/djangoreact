import { Component } from "react"

class Sidebar extends Component {
    render() {
        return (
            <div className="col s2 card-panel grey lighten-2 hoverable height-100 overflow-y-auto">
                <h4 className="teal-text text-darken-1 center-align">
                    <span>
                        Retro Theme
                    </span>
                </h4>
                <ul>
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src=""/>
                            </div>
                            <div className="center-align">
                                <a href="#user">
                                    <img className="circle height-10 width-10 hoverable" src="/static/common/profile.jpg"/>
                                </a>
                            </div>
                            <div className="center-align">
                                <a href="#name">
                                    <span className="teal-text name">Shabuktagin Photon Khan</span>
                                </a>
                            </div>
                            <div className="center-align">
                                <a href="#email">
                                    <span className="teal-text email">khan.photon@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card hoverable">
                            <div className="card-content">
                                <span className="card-title">Landing Pages</span>
                                <a href="/" className="btn red lighten-2">
                                    <i className="fa fa-home"></i>
                                </a>
                                <a href="/about" className="btn indigo lighten-2 waves-effect waves-light hoverable">About</a>
                                <a href="/contact" className="btn deep-purple lighten-2 waves-effect waves-light hoverable">Contact</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card hoverable">
                            <div className="card-content">
                                <span className="card-title">Post List and Detail</span>
                                <a href="/post" className="btn deep-orange lighten-2 waves-effect waves-light hoverable">Post List</a>
                                <a href="/post-detail/1" className="btn blue-grey lighten-2 waves-effect waves-light hoverable">Post Detail</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card hoverable">
                            <div className="card-content">
                                <span className="card-title">Post Create and Update</span>
                                <a href="/post-create" className="btn cyan hoverable waves-effect waves-light hoverable">Post Create</a>
                                <a href="/post-update/1" className="btn green lighten-2 waves-effect waves-light hoverable">Post Update</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card hoverable">
                            <div className="card-content">
                                <span className="card-title">Image Upload</span>
                                <a href="/image-upload/" className="btn blue waves-effect waves-light hoverable">Image Upload</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card hoverable">
                            <div className="card-content">
                                <span className="card-title">Elastic Search</span>
                                <a href="/post-search/" className="btn pink darken-1 waves-effect waves-light hoverable">Post Search</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar