import React, { Component } from "react";
import axios from 'axios';
import { Button, Container, Image } from "semantic-ui-react";
import moment from "moment";

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';

export class ProductEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            barcode: '',
            category: '',
            cost: '',
            price: '',
            stock: '',
            unit: '',
            fileName: '',
            imageDatas: '',
            products: []
        }

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeBarcode = this.onChangeBarcode.bind(this)
        this.onChangeCategory = this.onChangeCategory.bind(this)
        this.onChangeCost = this.onChangeCost.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onChangeStock = this.onChangeStock.bind(this)
        this.onChangeUnit = this.onChangeUnit.bind(this)
        this.onChangeFilename = this.onChangeFilename.bind(this)

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props.match)
        document.title = 'Mini PoS - Product Edit'
        axios.get('http://localhost:4000/products/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    // products: res.data
                    name: res.data.name,
                    barcode: res.data.barcode,
                    category: res.data.category,
                    cost: res.data.cost,
                    price: res.data.price,
                    stock: res.data.stock,
                    unit: res.data.unit,
                    fileName: res.data.fileName
                });

                console.log(this.state.fileName)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        })
    }

    onChangeBarcode(e) {
        this.setState({
            barcode: e.target.value,
        })
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value,
        })
    }

    onChangeCost(e) {
        this.setState({
            cost: e.target.value,
        })
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value,
        })
    }

    onChangeStock(e) {
        this.setState({
            stock: e.target.value,
        })
    }

    onChangeUnit(e) {
        this.setState({
            unit: e.target.value
        })
    }

    onChangeFilename = (e) => {
        console.log("e: ", e.target.files[0])

        this.setState({
            // fileName: e.target.files[0].name,
            imageDatas: e.target.files[0],
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault()

        let productObj = new FormData()

        const setFilename = () => {
            return !this.state.imageDatas.name || this.state.imageDatas.name === ''
                ? this.state.fileName :
                moment(Date.now()).format('DDMMYYYYHHmm') + this.state.imageDatas.name
        }

        // this.setState({
        //     imageDatas: this.state.imageDatas,
        // })

        productObj.set("name", this.state.name)
        productObj.set("barcode", this.state.barcode)
        productObj.set("category", this.state.category)
        productObj.set("cost", this.state.cost)
        productObj.set("price", this.state.price)
        productObj.set("stock", this.state.stock)
        productObj.set("unit", this.state.unit)
        productObj.set("fileName", setFilename())
        productObj.append("imageData", this.state.imageDatas)
        // if (this.onChangeFilename) {
        //     return productObj.set("imageData", this.state.imageDatas)
        // }

        // console.log("Product : ",productObj)
        // const productObj = {
        //     name: this.state.name,
        //     barcode: this.state.barcode,
        //     category: this.state.category,
        //     cost: this.state.cost,
        //     price: this.state.price,
        //     stock: this.state.stock,
        //     unit: this.state.unit,
        //     fileName: this.state.imageDatas.name,
        //     imageData: this.state.imageDatas
        // };

        axios.put('http://localhost:4000/products/' + this.props.match.params.id, productObj)
            .then((res) => {
                console.log("res.data : ", res.data)
                console.log('Product successfully updated')
                window.location = '/products/lists';
                alert('Product Updated successfully!!', { type: 'success' })
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { name, fileName } = this.state

        const buttonStyle = () => {
            return name === '' || name.length < 3 ? 'disabled' : ''
        }

        // console.log("this.state.fileName", this.state.fileName)
        return (
            <Container>
                <div style={{ marginTop: 10 }}>
                    <h3>Edit Product</h3>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <div className="form-group">
                            {fileName ? <Image size="small" src={`../../uploads/${fileName}`} /> : 'No Image'}
                        </div>
                        <div className="form-group">
                            <label>Name : </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.name && this.state.name === '' ? this.state.name : this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Barcode : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.barcode}
                                onChange={this.onChangeBarcode}
                            />
                        </div>
                        <div className="form-group">
                            <label>Category : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.category}
                                onChange={this.onChangeCategory}
                            />
                        </div>
                        <div className="form-group">
                            <label>Cost : </label>
                            <input
                                type="number"
                                className="form-control"
                                value={!this.state.cost ? 0 : this.state.cost}
                                onChange={this.onChangeCost}
                                min={0}
                            />
                        </div>
                        <div className="form-group">
                            <label>Price : </label>
                            <input
                                type="number"
                                className="form-control"
                                value={!this.state.price ? 0 : this.state.price}
                                onChange={this.onChangePrice}
                                min="0"
                            />
                        </div>
                        <div className="form-group">
                            <label>Stock : </label>
                            <input
                                type="number"
                                className="form-control"
                                value={!this.state.stock ? 0 : this.state.stock}
                                onChange={this.onChangeStock}
                                disabled={this.state.stock ? true : false}
                                min="0"
                            />
                        </div>
                        <div className="form-group">
                            <label>Unit : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={!this.state.unit ? "" : this.state.unit}
                                onChange={this.onChangeUnit}
                            />
                        </div>
                        <div className="form-group">
                            <label>Change Image : </label>
                            <input
                                type="file"
                                className="form-control"
                                id="fileName"
                                name="fileName"
                                // value={this.state.fileName}
                                onChange={(e) => this.onChangeFilename(e)} />
                        </div>
                        <div className="form-group">
                            <Button color='blue' className={buttonStyle()} >Save</Button>
                            <Button color='green' href="/products/lists">Cancel</Button>
                        </div>

                    </form>
                </div>
            </Container >
        )
    }
}

export default ProductEdit