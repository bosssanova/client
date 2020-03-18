import React, { Component } from 'react'
import { login } from '../userfunction'
import { Link } from 'react-router-dom'
import { Input, Button } from 'semantic-ui-react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            userPassword: '',
            userPassword2: ''

        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            userName: this.state.userName,
            userPassword: this.state.userPassword
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push('/dashboard')
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="userName"> Username </label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="userName"
                                    placeholder="Enter Username"
                                    value={this.state.userName}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPassword"> Password </label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="userPassword"
                                    placeholder="Enter Password"
                                    value={this.state.userPassword}
                                    onChange={this.onChange} />
                            </div>
                            <Button type="submit" className="btn btn-lg btn-primary btn-block mb-3">
                                Sign in
                            </Button>
                            <Link to="/register">
                                Register
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login