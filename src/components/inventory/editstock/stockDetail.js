import React, { Component } from 'react'
import { Table, Container, Button } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
// import * as moment from 'moment'


class StockDetail extends Component {
    constructor(props) {

        super(props)
        this.state = {
            productLog: [],
            docNo: ''
        };
    }

    componentDidMount() {
        document.title = 'Mini PoS - Stock Detail'
        // console.log(this.props.match)
        axios.get('http://localhost:4000/productlog/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    productLog: res.data.productEditList,
                    docNo: res.data.docNo
                });
                console.log(this.state.productLog)
                console.log(this.state.docNo)
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
                        <Table.Cell>{res.name}</Table.Cell>
                        <Table.Cell>{res.oldStock}</Table.Cell>
                        <Table.Cell>{res.changeStock}</Table.Cell>
                        <Table.Cell>{res.unit}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            );
        });
    }


    render() {

        return (
            <Container>
                <div>
                    <h1>Detail: {this.state.docNo}</h1>

                    <Table className="mb-5">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Product</Table.HeaderCell>
                                <Table.HeaderCell>จำนวนเดิม</Table.HeaderCell>
                                <Table.HeaderCell>จำนวนที่ปรับ</Table.HeaderCell>
                                <Table.HeaderCell>หน่วย</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {this.DataTable()}
                    </Table>
                    <Button color='green' href="/products/editstock">Close</Button>
                </div>
            </Container>
        )
    }
}

// export default StockDetail

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
)(StockDetail);