import React, { Component } from 'react'
import jwt_decoded from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decoded(token)
        this.setState({
            userName: decoded.userName
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>
                                    Username
                                </td>
                                <td>
                                    {this.state.userName}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile