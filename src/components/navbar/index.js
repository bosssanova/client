import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import jwt_decoded from 'jwt-decode'
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
        }
    }

    // componentDidMount() {
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decoded(token)
    //     this.setState({
    //         userName: decoded.userName
    //     })
    // }

    // componentWillMount() {
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decoded(token)
    //     this.setState({
    //         userName: decoded.userName
    //     })
    // }

    // componentWillReceiveProps() {
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decoded(token)
    //     this.setState({
    //         userName: decoded.userName
    //     })
    // }

    componentWillUnmount() {
        const token = localStorage.usertoken
        const decoded = jwt_decoded(token)
        this.setState({
            userName: decoded.userName
        })
    }

    onChange() {
        const token = localStorage.usertoken
        const decoded = jwt_decoded(token)
        this.setState({
            userName: decoded.userName
        })
    }

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        // this.props.history.push('/')
        window.location = "/"
    }

    onLogoutClick = e => {
        e.preventDefault();
        logoutUser();
    };

    render() {
        return (

            <Menu size='small'>
                {localStorage.usertoken ? <Menu.Item>
                    <Link to="/dashboard" className="nav-link justify-content-md-start">
                        Home
                            </Link>
                </Menu.Item> : ''}



                <Menu.Menu position='right' className="row">
                    <button
                        // style={{
                        //     width: "150px",
                        //     borderRadius: "3px",
                        //     letterSpacing: "1.5px",
                        //     marginTop: "1rem"
                        // }}
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                        Logout
            </button>
                </Menu.Menu>
            </Menu>
            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            //     <button
            //         className="navbar-toggler"
            //         type="button"
            //         data-toggle="collapse"
            //         data-target="#navbar1"
            //         aria-controls="navbar1"
            //         aria-expanded="false"
            //         aria-label="Tohhle navigation">
            //         <span className="navbar-toggler-icon" />
            //     </button>
            //     <div className="collapse navbar-collapse" id="navbar1">
            //         <ul className="navbar-nav">
            //             <li className="nav-item">
            //                 <Link to="/dashboard" className="nav-link justify-content-md-start">
            //                     Home
            //                 </Link>
            //             </li>
            //         </ul>
            //         {localStorage.usertoken ? userLink : loginRegLink}
            //     </div>
            // </nav>
        )
    }
}

export default withRouter(Navbar)