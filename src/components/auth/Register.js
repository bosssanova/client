import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Container, Form, Message, Button } from "semantic-ui-react";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
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
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { errors } = this.state;
        return (

            <Container>
                <Form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className="grey-text text-darken-1">
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                    <Form.Field>
                        <label htmlFor="name">Name :</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            id="name"
                            type="text"
                            autoComplete="off"
                            className={classnames("", {
                                invalid: errors.name
                            })}
                        />
                        {errors.name ?
                            <Message compact color="red">
                                <p>
                                    {errors.name}
                                </p>
                            </Message> : ''}
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="email">Email :</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            autoComplete="off"
                            className={classnames("", {
                                invalid: errors.email
                            })}
                        />
                        {errors.email ?
                            <Message compact color="red">
                                <p>
                                    {errors.email}
                                </p>
                            </Message> : ''}
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password">Password :</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            className={classnames("", {
                                invalid: errors.password
                            })}
                        />
                        {errors.password ?
                            <Message compact color="red">
                                <p>
                                    {errors.password}
                                </p>
                            </Message> : ''}
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password2">Confirm Password :</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            className={classnames("", {
                                invalid: errors.password2
                            })}
                        />
                        {errors.password2 ?
                            <Message compact color="red">
                                <p>
                                    {errors.password2}
                                </p>
                            </Message> : ''}
                    </Form.Field>
                    <Button type="submit" color="blue">Sign Up</Button>
                </Form>
            </Container>
        );
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));