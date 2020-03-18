import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StockList, StockDetail, StockForm } from '../../components/inventory/editstock';
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

class EditStock extends Component {
    render() {
        return (
            <Router>
                <Container>
                <Route path="/products/editstock" component={StockList} />
                <Route path="/products/editstock/detail" component={StockDetail} />
                <Route path="/products/editstock/form" component={StockForm} />
                </Container>
            </Router>
        );
    }
}

export default EditStock