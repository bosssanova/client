import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Form, Button, Container, Message } from "semantic-ui-react";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    }
    render() {
        const { errors } = this.state;
        return (
            <Container>
                <Form noValidate onSubmit={this.onSubmit}>
                    <h1>Login</h1>
                    <p className="grey-text text-darken-1">
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                    <Form.Field>
                        <label>Email :</label>
                        <input
                            onChange={this.onChange}
                            placeholder="Enter Email"
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            autoComplete="off"
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}
                        />
                        {errors.email || errors.emailnotfound ?
                            <Message compact color="red">
                                <p>
                                    {errors.email}
                                    {errors.emailnotfound}
                                </p>
                            </Message> : ''}
                    </Form.Field>
                    <Form.Field>
                        <label>Password :</label>
                        <input
                            onChange={this.onChange}
                            placeholder="Enter Password"
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            autoComplete="off"
                            className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                            })}
                        />
                        {errors.password || errors.passwordincorrect || errors.email
                            ?
                            <Message compact color="red">
                                <p>
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </p>
                            </Message> : ''}
                    </Form.Field>
                    <Button type='submit' color="blue">Login</Button>
                </Form>
            </Container>
        );
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);