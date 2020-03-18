import React, { Component } from 'react'
import axios from 'axios'
import { Button, Container } from 'semantic-ui-react'
import moment from 'moment'
const API_URL = "http://localhost:4000";


export class ProductForm extends Component {
    constructor() {
        super();

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
    }

    componentDidMount() {
        document.title = 'Mini PoS - New Product'

        axios.get('http://localhost:4000/products/')
            .then(res => {
                this.setState({
                    products: res.data
                });
                console.log(this.state.products)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handlerImage = (e) => {
        console.log("e: ", e.target.files[0])

        this.setState({
            imageDatas: e.target.files[0]
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        let productObj = new FormData()

        const setFilename = () => {
            return this.state.imageDatas.name
                ? moment(Date.now()).format('DDMMYYYYHHmm') + this.state.imageDatas.name
                : ''
        }

        productObj.append("name", this.state.name)
        productObj.append("barcode", this.state.barcode)
        productObj.append("category", this.state.category)
        productObj.append("cost", this.state.cost)
        productObj.append("price", this.state.price)
        productObj.append("stock", this.state.stock)
        productObj.append("unit", this.state.unit)
        productObj.append("fileName", setFilename())
        productObj.append("imageData", this.state.imageDatas);

        // const productObject = {
        //     name: this.state.name,
        //     barcode: this.state.barcode,
        //     category: this.state.category,
        //     cost: this.state.cost,
        //     price: this.state.price,
        //     stock: this.state.stock,
        //     unit: this.state.unit,
        //     fileName: moment(Date.now()).format('DDMMYYYYHHmmss'),
        //     imageData: this.state.imageDatas
        // };

        axios.post(`${API_URL}/products/create`, productObj)
            .then((res) => {
                alert('Product Updated successfully!!', { type: 'success' })
            })
            .catch((err) => {
                alert("Error while uploading image using multer");
            });

        this.setState({
            name: '',
            barcode: '',
            category: '',
            cost: '',
            price: '',
            stock: '',
            unit: '',
            fileName: '',
            imageDatas: ''
        })
    }

    render() {
        const { products, name } = this.state
        const buttonStyle = () => {
            return name === '' || name.length < 3 ? 'disabled' : ''
        }
        console.log("Product Length : ", products.length)
        return (
            <Container>
                <div style={{ marginTop: 10 }}>
                    <h3>Create New Product</h3>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <div className="form-group">
                            <label>Name : </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChange}
                                id="name"
                                minLength={3}
                                autoComplete="off"
                                placeholder="Product Name"
                            />
                        </div>
                        {/* <div className="form-group"> */}
                            <label>Barcode : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.barcode}
                                onChange={this.onChange}
                                id="barcode"
                                minLength={10}
                                maxLength={10}
                                autoComplete="off"
                                placeholder="Product Barcode"
                                // defaultValue={products.length}
                                // value="##########"
                            />
                            {console.log(typeof String(products.length))}
                        {/* </div> */}
                        <div className="form-group">
                            <label>Category : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.category}
                                onChange={this.onChange}
                                id="category"
                                autoComplete="off"
                                placeholder="Product Category"
                            />
                        </div>
                        <div className="form-group">
                            <label>Cost : </label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.cost}
                                onChange={this.onChange}
                                id="cost"
                                autoComplete="off"
                                placeholder="Product Cost"
                                min="0"
                            />
                        </div>
                        <div className="form-group">
                            <label>Price : </label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChange}
                                id="price"
                                autoComplete="off"
                                placeholder="Product Price"
                                min="0"
                            />
                        </div>
                        <div className="form-group">
                            <label>Stock : </label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.stock}
                                onChange={this.onChange}
                                id="stock"
                                autoComplete="off"
                                placeholder="Product Stock"
                                min="0"
                            />
                        </div>
                        <div className="form-group">
                            <label>Unit : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.unit}
                                onChange={this.onChange}
                                id="unit"
                                autoComplete="off"
                                placeholder="Product Unit"
                            />
                        </div>
                        <div className="form-group">
                            <label>Image : </label>
                            <input
                                type="file"
                                className="form-control"
                                id="fileName"
                                name="fileName"
                                // value={this.state.fileName}
                                onChange={(e) => this.handlerImage(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <Button className={buttonStyle()} color='blue' >Save</Button>
                            <Button color='green' href="/products/lists">Cancel</Button>
                        </div>

                    </form>
                </div>
            </Container>
        )
    }
}

export default (ProductForm)


