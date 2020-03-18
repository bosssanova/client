import React, { Component } from 'react'
import { register } from '../userfunction'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            userPassword: '',
            userPassword2: '',
            errors: {}
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
            userPassword: this.state.userPassword,
            userPassword2: this.state.userPassword2
        }

        register(user).then(res => {
            this.props.history.push('/login')
        })
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="userName"> Username </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="userName"
                                    placeholder="Enter Username"
                                    value={this.state.userName}
                                    onChange={this.onChange}
                                    error={errors.userName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPassword"> Password </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="userPassword"
                                    placeholder="Enter Password"
                                    value={this.state.userPassword}
                                    onChange={this.onChange}
                                    error={errors.userPassword} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPassword"> Password </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="userPassword"
                                    placeholder="Enter Password"
                                    value={this.state.userPassword2}
                                    onChange={this.onChange}
                                    error={errors.userPassword2} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Register                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register