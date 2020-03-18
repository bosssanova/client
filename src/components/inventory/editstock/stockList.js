import React, { Component } from 'react'
import { Container, Button, Table, Message } from 'semantic-ui-react'
import axios from 'axios';
import * as moment from 'moment'
import { Route } from 'react-router-dom';
import StockDetail from './stockDetail';

class StockList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productLog: [],
            // user: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/productlog/')
            .then(res => {
                this.setState({
                    productLog: res.data,
                });
                console.log(this.state.productLog)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {

        return this.state.productLog.map((res, i) => {
            return (
                <Table.Body key={i}>
                    <Table.Row>
                        <Table.Cell>{i + 1}</Table.Cell>
                        <Table.Cell>{moment(res.createAt).format('DD/MM/YYYY HH:mm')}</Table.Cell>
                        <Table.Cell>{res.docNo}</Table.Cell>
                        {/* {console.log(res.user[0].name)} */}
                        <Table.Cell>{res.user[0].name}</Table.Cell>
                        <Table.Cell>{res.seqNo}</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Button color='green' href={"/products/editstock/detail/" + res._id}>View</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Route path={"/products/editstock/detail/" + res._id} component={StockDetail}></Route>

                </Table.Body>
            );
        });
    }

    render() {
        const count = this.state.productLog.length
        return (
            <Container>
                <div>
                    <Button.Group className="mt-2" floated='right'>
                        <Button color='blue' href="/products/editstock/form">New</Button>
                    </Button.Group>
                    {count > 0 ?
                        <>
                            <h1>List</h1>
                            <Table className="mb-5">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>#</Table.HeaderCell>
                                        <Table.HeaderCell>Date</Table.HeaderCell>
                                        <Table.HeaderCell>Doc No</Table.HeaderCell>
                                        <Table.HeaderCell>User</Table.HeaderCell>
                                        <Table.HeaderCell>จำนวน</Table.HeaderCell>
                                        {/* <Table.HeaderCell>Image</Table.HeaderCell> */}
                                        <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                {/* <Table.Body> */}
                                {this.DataTable()}
                                {/* </Table.Body> */}
                            </Table>
                        </>
                        : <Message success compact header="Hooray🎉 🎉 🎉 All Done 😆" />
                    }

                </div>
            </Container>
        )
    }
}

export default StockList
