
import React, { Component } from "react";
import axios from 'axios';
import { Table, Button, Message, Container, Image } from "semantic-ui-react";
import { ProductEdit } from "../../components/inventory/product";
import { Route } from "react-router-dom";

export class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        document.title = 'Mini PoS - Product List'
        axios.get('http://localhost:4000/products/')
            .then(res => {
                this.setState({
                    products: res.data
                });
                console.log(this.state.products[0].fileName)
            })
            .catch((error) => {
                console.log(error);
            })

    }

    DataTable() {
        return this.state.products.map((res, i) => {
            // console.log(res)
            const deleteProduct = (e) => {
                e.preventDefault()
                axios.delete('http://localhost:4000/products/' + res._id)
                    .then((res) => {
                        console.log('Product successfully deleted!')
                        window.location = '/products/lists';
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
            return (
                <Table.Body key={i}>
                    <Table.Row>
                        <Table.Cell>{i + 1}</Table.Cell>
                        <Table.Cell>{res.name}</Table.Cell>
                        <Table.Cell>{res.barcode}</Table.Cell>
                        <Table.Cell>{res.category}</Table.Cell>
                        <Table.Cell>{res.cost}</Table.Cell>
                        <Table.Cell>{res.price}</Table.Cell>
                        <Table.Cell>{res.stock}</Table.Cell>
                        <Table.Cell>{res.unit}</Table.Cell>
                        <Table.Cell textAlign="center">
                            {res.fileName ? < Image size="mini" src={`/uploads/${res.fileName}`} /> : 'No Image'}
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                            <Button color='green' href={"/products/edit/" + res._id}>Edit</Button>
                            <Button color='red' onClick={(e) => deleteProduct(e)}>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Route path={"/products/edit/" + res._id} component={ProductEdit}></Route>
                </Table.Body >
            );
        });
    }

    render() {
        const count = this.state.products.length
        return (
            <Container>
                <Button.Group className="mt-2" floated='right'>
                    <Button color='blue' href="/products/create">Add Product</Button>
                </Button.Group>
                <div>
                    <h1>Product List</h1>

                    {count > 0 ?
                        <>
                            <Table className="mb-5">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>#</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Barcode</Table.HeaderCell>
                                        <Table.HeaderCell>Category</Table.HeaderCell>
                                        <Table.HeaderCell>Cost</Table.HeaderCell>
                                        <Table.HeaderCell>Price</Table.HeaderCell>
                                        <Table.HeaderCell>Stock</Table.HeaderCell>
                                        <Table.HeaderCell>Unit</Table.HeaderCell>
                                        <Table.HeaderCell>Image</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                {this.DataTable()}
                            </Table>
                        </>
                        :
                        <>
                            <Message visible compact header="No data list" />
                        </>
                    }
                </div>
            </Container>
        )
    }
}

export default ProductList