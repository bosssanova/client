import React, { Component } from 'react';
// import ProductEdit from './productEdit';
import axios from 'axios';
import {  Table } from 'semantic-ui-react';


export class StockDetailTable extends Component {

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
        this.props.history.push('/products/lists')
    }

    render() {
        // const count = 0
        return (

            < tr >
                {/* <td></td> */}
                {/* < Table.Cell >{
                    this.props.obj.map((item, key) => {
return {}
                    })
                }</Table.Cell > */}
                <Table.Cell>{this.props.obj.name}</Table.Cell>
                <Table.Cell>{this.props.obj.barcode}</Table.Cell>
                <Table.Cell>{this.props.obj.category}</Table.Cell>
                <Table.Cell>{this.props.obj.cost}</Table.Cell>
                <Table.Cell>{this.props.obj.price}</Table.Cell>
                <Table.Cell>{this.props.obj.stock}</Table.Cell>
                <Table.Cell>{this.props.obj.unit}</Table.Cell>

                {/* <Table.Cell>{this.props.obj.image}</Table.Cell> */}
                {/* <Route path={"/products/edit/" + this.props.obj._id} component={ProductEdit}></Route> */}
            </tr >
        );
    }
}

export default StockDetailTable