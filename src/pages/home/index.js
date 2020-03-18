import React, { Component } from 'react'
import ProductList from '../product'
import { ProductForm, ProductEdit } from '../../components/inventory/product'
import { StockList, StockDetail, StockForm } from '../../components/inventory/editstock'
import { Route } from 'react-router-dom';
import { Profile, Landing } from '../../components';
import DashBoard from '../dashboard';

class Home extends Component {
    render() {
        return (
            <>
                <Route exact path="/dashboard" component={DashBoard} />
                <Route exact path="/landing" component={Landing} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/products/lists" component={ProductList} />
                <Route exact path="/products/create" component={ProductForm} />
                <Route exact path="/products/edit/:id" component={ProductEdit} />
                <Route exact path="/products/editstock" component={StockList} />
                <Route exact path="/products/editstocks/detail" component={StockDetail} />
                <Route exact path="/products/editstocks/form" component={StockForm} />
            </>
        )
    }
}

export default Home