import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import ProductEdit from './productEdit';
import axios from 'axios';
import { Button, Table, Image } from 'semantic-ui-react';

export class ProductTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(e) {
        e.preventDefault()
        axios.delete('http://localhost:4000/products/' + this.props.obj._id)
            .then((res) => {
                if (res) {
                    this.props.history.push('/products/lists')
                }
                console.log('Product successfully deleted!')
                window.location = '/products/lists';

            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{1}</Table.Cell>
                    <Table.Cell>{this.props.obj.name}</Table.Cell>
                    <Table.Cell>{this.props.obj.barcode}</Table.Cell>
                    <Table.Cell>{this.props.obj.category}</Table.Cell>
                    <Table.Cell>{this.props.obj.cost}</Table.Cell>
                    <Table.Cell>{this.props.obj.price}</Table.Cell>
                    <Table.Cell>{this.props.obj.stock}</Table.Cell>
                    <Table.Cell>{this.props.obj.unit}</Table.Cell>
                    <Table.Cell textAlign="center">
                        {this.props.obj.filename ? <Image size="mini" src={`/uploads/${this.props.obj.filename}`} /> : 'No Image'}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                        <Button color='green' href={"/products/edit/" + this.props.obj._id}>Edit</Button>
                        <Button color='red' onClick={this.deleteProduct}>Delete</Button>
                    </Table.Cell>
                </Table.Row>
                <Route path={"/products/edit/" + this.props.obj._id} component={ProductEdit}></Route>
            </Table.Body>
        )
    }
}

export default withRouter(ProductTableRow)