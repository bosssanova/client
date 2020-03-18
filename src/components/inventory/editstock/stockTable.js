import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import ProductEdit from './productEdit';
import axios from 'axios';
import { Button, Table } from 'semantic-ui-react';
import StockDetail from './stockDetail';

class StockTable extends Component {

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(e) {
        e.preventDefault()

        axios.delete('http://localhost:4000/products/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                // const { history } = this.props
                // history.push('/products/lists')
            }).catch((error) => {
                console.log(error)
            })
        // this.props.history.push('/products/lists')
    }

    render() {
        return (
            <tr>
                {/* <td></td> */}
                <Table.Cell>{this.props.obj.name}</Table.Cell>
                <Table.Cell>{this.props.obj.barcode}</Table.Cell>
                <Table.Cell>{this.props.obj.category}</Table.Cell>
                <Table.Cell>{this.props.obj.cost}</Table.Cell>
                <Table.Cell>{this.props.obj.price}</Table.Cell>
                {/* <Table.Cell>{this.props.obj.stock}</Table.Cell>
                <Table.Cell>{this.props.obj.unit}</Table.Cell> */}
                {/* <Table.Cell>{this.props.obj.image}</Table.Cell> */}
                <Table.Cell textAlign="center">
                    <Button color='green' href={"/products/editstocks/detail"}>View</Button>
                    {/* + this.props.obj._id */}
                </Table.Cell>
                <Route path={"/products/editstocks/detail"} component={StockDetail}></Route>
            </tr>
        );
    }
}

export default StockTable