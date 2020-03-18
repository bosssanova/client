import React from 'react'
import axios from 'axios'
import { Button, Container, Table, Form, Input } from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux'
import moment from 'moment'

class StockForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            itemLists: [],
            it: [],
        }
    }

    componentDidMount() {
        document.title = 'Mini PoS - Stock Form'
        axios.get('http://localhost:4000/products/')
            .then(res => {
                this.setState({
                    products: res.data,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onTagsChange = (e, values) => {
        // var i = 0
        if (values === null) {
            // this.setState({
            //     itemLists: [...this.state.itemLists, { _id: values._id, name: values.name, oldStock: values.stock, changeStock: '', unit: values.unit }]
            // })
        } else {
            console.log("values._id : ", values._id)
            this.setState({
                itemLists: [...this.state.itemLists, { _id: values._id, name: values.name, oldStock: values.stock, changeStock: '', unit: values.unit }]
            })
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerRemove(e, i) {
        console.log("e : ", e)
        this.state.itemLists.splice(i, 1)
        console.log(this.state.itemLists, "!!!!")
        this.setState({ itemLists: this.state.itemLists })
    }

    onSubmit = (e) => {
        const { user } = this.props.auth;
        console.log(user)

        e.preventDefault()

        const productObject = {
            user: user,
            seqNo: this.state.itemLists.length,
            docNo: moment(Date.now()).format("YYMMDDHHmm"),
            productEditList: this.state.itemLists
        }
        axios.post('http://localhost:4000/productlog/create', productObject)
            .then(res => console.log(res.data),
                alert('Product Created successfully!!', { type: 'success' }),
                window.location = '/products/editstock'
            )
    }

    itemsList = () => {
        let { itemLists } = this.state
        // console.log("ItemList : ", itemLists)
        return itemLists.map((val, i) => {
            // console.log("Name1: ", val._id)
            return (
                <Table.Body key={i}>
                    <Table.Row>
                        <Table.Cell>
                            {val.name}
                        </Table.Cell>
                        {val.name ?
                            <>
                                <Table.Cell>
                                    <Input>
                                        <input
                                            type="number"
                                            data-id={i}
                                            value={!val.oldStock ? "" : val.oldStock}
                                            className="oldStock"
                                            disabled
                                        />
                                    </Input>
                                </Table.Cell>
                                <Table.Cell>
                                    <Input>
                                        <input
                                            type="number"
                                            data-id={i}
                                            value={itemLists[i].changeStock}
                                            className="changeStock"
                                            onChange={(e) => {
                                                const valueChange = this.state.itemLists
                                                valueChange[i].changeStock = Number(e.target.value)
                                                this.setState({ itemLists: valueChange })
                                            }}
                                            required
                                        />
                                    </Input>
                                </Table.Cell>
                                <Table.Cell>
                                    <Input>
                                        <input
                                            type="text"
                                            data-id={i}
                                            value={val.unit}
                                            className="unit"
                                            disabled
                                        />
                                    </Input>
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                    <button onClick={(e) => this.handlerRemove(e, i)}>ลบ</button>
                                </Table.Cell>
                            </>
                            : ''}
                    </Table.Row>
                </Table.Body>
            )
        })
    }

    render() {
        const { products, itemLists } = this.state
        console.log("ItemLists : ", itemLists)

        const btnStyle = () => {
            return itemLists.length < 1 ? 'disabled' : ''
        }

        return (
            <Container>
                <div style={{ marginTop: 10 }}>
                    <Form >
                        <h3>New Edit Stock</h3>
                        <Table  >{/* color={'grey'} inverted */}
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Product</Table.HeaderCell>
                                    <Table.HeaderCell>จำนวนเดิม</Table.HeaderCell>
                                    <Table.HeaderCell>จำนวนที่ปรับ</Table.HeaderCell>
                                    <Table.HeaderCell>หน่วย</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            {/* <this.itemsList /> */}
                            {itemLists.map((val, i) => {
                                console.log("val._id : ", val._id)
                                console.log("itemLists : ", itemLists[i]._id)
                                return val !== null && val._id === itemLists[i]._id
                                    ?
                                    <Table.Body key={i}>
                                        <Table.Row>
                                            <Table.Cell>
                                                {val.name}
                                            </Table.Cell>
                                            {val.name ?
                                                <>
                                                    <Table.Cell>
                                                        <Input>
                                                            <input
                                                                type="number"
                                                                data-id={i}
                                                                value={!val.oldStock ? "" : val.oldStock}
                                                                className="oldStock"
                                                                disabled
                                                            />
                                                        </Input>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Input>
                                                            <input
                                                                type="number"
                                                                data-id={i}
                                                                value={itemLists[i].changeStock}
                                                                className="changeStock"
                                                                onChange={(e) => {
                                                                    const valueChange = this.state.itemLists
                                                                    valueChange[i].changeStock = Number(e.target.value)
                                                                    this.setState({ itemLists: valueChange })
                                                                }}
                                                                required
                                                                min="0"
                                                            />
                                                        </Input>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Input>
                                                            <input
                                                                type="text"
                                                                data-id={i}
                                                                value={val.unit}
                                                                className="unit"
                                                                disabled
                                                            />
                                                        </Input>
                                                    </Table.Cell>
                                                    <Table.Cell textAlign="center">
                                                        <Button color="red" onClick={(e) => this.handlerRemove(e, i)}>ลบ</Button>
                                                    </Table.Cell>
                                                </>
                                                : ''}
                                        </Table.Row>
                                    </Table.Body>
                                    : console.log(false)
                            })}
                            <div className="ml-3 mt-3 mb-3">
                                <Autocomplete
                                    inputMode="search"
                                    freeSolo
                                    options={products}
                                    getOptionLabel={option => typeof option === 'string' ? '' : option.name}
                                    renderInput={params => (
                                        <TextField
                                            {...params}
                                        />
                                    )}
                                    onChange={this.onTagsChange}
                                    disableClearable
                                />
                            </div>
                            {/* <UseAutocomplete products={products} onTagsChange={this.onTagsChange} /> */}
                        </Table>
                        <div className="form-group ml-3">
                            <Button onClick={this.onSubmit} color="blue" className={btnStyle()}>Submit</Button>
                            <Button color='green' href="/products/editstock">Cancel</Button>
                        </div>
                    </Form>
                </div>
            </Container >
        )
    }
}

// export default StockForm
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
)(StockForm);