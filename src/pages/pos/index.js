import React, { Component } from 'react'
import SearchItem from '../../components/pos/searchItem'
import Calculate from '../../components/pos/calculate'
import { Grid, Card } from 'semantic-ui-react'
import axios from 'axios'

class PoS extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            itemLists: [],
            valueCategory: '',
            valueName: '',
            modalOpen: false,
            activeItem: 'All',
            datalist: [],
            sum: 0
            // setDatas: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/')
            .then(res => {
                this.setState({
                    products: res.data,
                });
                console.log("Pos page :", this.state.products)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // setItems = value => {
    //     this.setState({ itemLists: value })
    // }

    // deleteItem = () => {
    //     this.setState({ itemList: [] })
    //     console.log("delete")
    // }

    setSum = (e) => {
        console.log("E : ", e)
        // this.setState({ sum: e})
    }

    onTagsChange = (e, values) => {
        // console.log("Values : ", values)
        this.setState({
            itemLists: [...this.state.itemLists, { _id: values.obj._id, name: values.obj.name, price: values.obj.price, unit: values.obj.unit, qty: 1, sum: values.obj.price }]
        })
        // console.log("ItemLists : ", this.state.itemLists)
        // console.log(values.obj._id)
    }

    // setDatas = (e) => {
    //     console.log('values: ', e)
    //     this.setState({
    //         datalist: [...this.state.itemLists, { _id: e._id, name: e.name, price: e.price, qty: 1 }]
    //     })
    // }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerRemove = (e, i) => {
        this.state.itemLists.splice(i, 1)
        this.setState({ itemLists: this.state.itemLists })
        // console.log(this.state.itemLists, "!!!!")
    }

    onChangeValueName = e => {

    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        const { products, itemLists, valueName, modalOpen } = this.state
        // console.log('ItemList :', itemList)
        console.log('ItemLists :', itemLists)
        return (
            <>
                {/* {products.map((obj, i) => {
                    return ( */}
                <Grid divided='vertically' >
                    <Grid.Column width={9}  >
                        <Card fluid>
                            <Card.Content>
                                <SearchItem
                                    data={products}
                                    items={itemLists}
                                    onTagsChange={this.onTagsChange}
                                    valueName={valueName} />
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Card fluid>
                            <Card.Content>
                                <Calculate
                                    data={products}
                                    // item={itemLists}
                                    items={itemLists}
                                    deleteItem={this.deleteItem}
                                    handlerRemove={this.handlerRemove}
                                    modalOpen={modalOpen}
                                    handleOpen={this.handleOpen}
                                    handleClose={this.handleClose}
                                    // handlerRemove={this.handlerRemove}
                                    setDatas={this.setDatas}
                                    onTagsChange={this.onTagsChange}
                                    setSum={this.setSum}
                                />
                            </Card.Content>
                        </Card  >
                    </Grid.Column>
                </Grid>
                {/* )
                })} */}
            </>
        )
    }
}

export default PoS