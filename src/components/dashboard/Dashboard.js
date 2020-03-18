import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Menu, Grid, Button } from "semantic-ui-react";
import { Switch } from "react-router-dom";
import { Profile } from "..";
import ProductList from "../../pages/product";
import { ProductForm, ProductEdit } from "../inventory/product";
import { StockList, StockDetail, StockForm } from "../inventory/editstock";
import MenuBar from "../menu";
import PoS from "../../pages/pos";
import PrivateRoute from "../private-route/PrivateRoute";
import DashBoard from "../../pages/dashboard";
import ReportPage from "../../pages/report";

class Dashboards extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <>
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column>
                            <Menu secondary>
                                <Menu.Item>
                                    <a href="/dashboard" className="nav-link justify-content-md-start">
                                        Home
                            </a>
                                </Menu.Item>
                                <Menu.Menu position='right' className="row">
                                    <Menu.Item>
                                        <b>Hi : </b> {user.name}
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button
                                            onClick={this.onLogoutClick}
                                            content='Logout'
                                            color="green"
                                            inverted />
                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <MenuBar />
                        </Grid.Column>
                        <Grid.Column width={14}>
                            <Switch>
                                <PrivateRoute exact path="/dashboard" component={DashBoard} />
                                <PrivateRoute exact path="/profile" component={Profile} />
                                <PrivateRoute exact path="/products/lists" component={ProductList} />
                                <PrivateRoute exact path="/products/create" component={ProductForm} />
                                <PrivateRoute exact path="/products/edit/:id" component={ProductEdit} />
                                <PrivateRoute exact path="/products/editstock" component={StockList} />
                                <PrivateRoute exact path="/products/editstock/detail/:id" component={StockDetail} />
                                <PrivateRoute exact path="/products/editstock/form" component={StockForm} />
                                <PrivateRoute exact path="/pos" component={PoS} />
                                <PrivateRoute exact path="/reports" component={ReportPage} />
                            </Switch>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}
Dashboards.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboards);