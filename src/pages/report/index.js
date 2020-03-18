// import React, { useState } from 'react'
import React from 'react'
import { Image } from 'semantic-ui-react'
// import { Button, Grid, Card, Container, Input, Divider, Image } from 'semantic-ui-react'
import axios from 'axios'
// import Autocomplete from '@material-ui/lab/Autocomplete'
// import { TextField } from '@material-ui/core'
import moment from 'moment'

// function Report() {

//     const [datas, setDatas] = useState([
//         { id: 1, qty: 1 },
//         { id: 2, qty: 1 }
//     ])

//     // const [count, setCount] = useState(1)

//     const hanlerCount = (e, i) => {
//         // onClick show data
//         console.log("data : ", datas[i])

//         // Show index 
//         // console.log('i: ', i)

//         if (e === "false") {
//             // console.log(e)
//             if (datas[i].qty > 1) {
//                 datas[i].qty = datas[i].qty - 1
//                 console.log(datas[i])
//                 setDatas([...datas])
//             } else {
//                 return alert('Min!!', { type: 'success' }, console.log("Max!!"))
//             }
//         } else {
//             // console.log(e)
//             if (datas[i].qty < 10) {
//                 datas[i].qty = datas[i].qty + 1
//                 console.log(datas[i])
//                 setDatas([...datas])
//             } else {
//                 return alert('Max!!', { type: 'success' }, console.log("Max!!"))
//             }
//         }
//     }
//     return (
//         <>
//             {datas.map((res, i) => {
//                 return (
//                     <div key={i} className="col">
//                         <div className="row">
//                             <div>
//                                 ID : {res.id}
//                             </div>
//                             {/* <div className="ml-2"> QTY : {res.qty}</div> */}
//                             <Button variant="primary" onClick={() => hanlerCount("false", i)}>-</Button>
//                             <div className="ml-2"> QTY : {res.qty}</div>
//                             <Button variant="primary" onClick={() => hanlerCount("true", i)}>+</Button>
//                         </div>
//                     </div>
//                 )
//             })}
//         </>
//     );
// }

// class Report1 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             products: [],
//             itemLists: [],
//             result: '',
//             valueCategory: ''
//         }
//     }

//     componentDidMount() {
//         axios.get('http://localhost:4000/products/')
//             .then(res => {
//                 this.setState({
//                     products: res.data,
//                 });
//                 // console.log("Pos page :", this.state.products)
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }

//     hanlerCount = (e, i) => {
//         const { products } = this.state
//         // onClick show data
//         console.log("data : ", products[i])

//         // Show index 
//         // console.log('i: ', i)

//         if (e === "false") {
//             // console.log(e)
//             if (products[i].price > 1) {
//                 products[i].price = products[i].price - 1
//                 console.log(products[i])
//                 this.setState([...products])
//             } else {
//                 return alert('Min!!', { type: 'success' }, console.log("Max!!"))
//             }
//         } else {
//             // console.log(e)
//             if (products[i].price) {
//                 products[i].price = products[i].price + 1
//                 console.log(products[i])
//                 this.setState([...products])
//             } else {
//                 return alert('Max!!', { type: 'success' }, console.log("Max!!"))
//             }
//         }
//     }

//     onTagsChange = (e, values) => {
//         console.log(e)
//         // console.log("E : ", e._dispatchInstances[0].pendingProps.obj)
//         // const value = e._dispatchInstances[0].pendingProps.obj
//         console.log("Values : ", values)
//         this.setState({
//             itemLists: [...this.state.itemLists, { _id: values._id, name: values.name, price: values.price, qty: 1 }]
//         })
//         // console.log("ItemLists : ", this.state.itemLists)
//         // console.log(values.obj._id)
//     }

//     onTagsChange2 = (e, v) => {
//         console.log("Name : ", v.name)
//         this.setState({ result: v.name })
//     }

//     getIdCategory = (e) => {
//         this.setState({ valueCategory: e._dispatchInstances[0].pendingProps.id })
//     }

//     button = () => {
//         const { valueCategory } = this.state
//         return (
//             <>
//                 <Button active={valueCategory === 'All'} onClick={(e) => this.getIdCategory(e)} id="All" size="medium" inverted color="violet" >All</Button>
//                 <Button active={valueCategory === 'Cat A'} onClick={(e) => this.getIdCategory(e)} id="Cat A" size="medium" inverted color="violet" >Cat A</Button>
//                 <Button active={valueCategory === 'Cat B'} onClick={(e) => this.getIdCategory(e)} id="Cat B" size="medium" inverted color="violet" >Cat B</Button>
//                 <Button active={valueCategory === 'Cat C'} onClick={(e) => this.getIdCategory(e)} id="Cat C" size="medium" inverted color="violet" >Cat C</Button>
//                 <Button active={valueCategory === 'Cat D'} onClick={(e) => this.getIdCategory(e)} id="Cat D" size="medium" inverted color="violet" >Cat D</Button>
//             </>
//         )
//     }

//     hanlerCount = (e, i) => {
//         const { itemLists } = this.state
//         // onClick show data
//         console.log("data : ", itemLists[i])

//         // Show index 
//         // console.log('i: ', i)

//         if (e === "false") {
//             // console.log(e)
//             if (itemLists[i].qty > 1) {
//                 itemLists[i].qty = itemLists[i].qty - 1
//                 console.log(itemLists[i])
//                 this.onTagsChange([...itemLists])
//             } else {
//                 return alert('Min!!', { type: 'success' }, console.log("Min!!"))
//             }
//         } else {
//             // console.log(e)
//             if (itemLists[i].qty < 10) {
//                 itemLists[i].qty = itemLists[i].qty + 1
//                 console.log(itemLists[i])
//                 this.onTagsChange([...itemLists])
//             } else {
//                 return alert('Max!!', { type: 'success' }, console.log("Max!!"))
//             }
//         }
//     }

//     render() {
//         const { products, itemLists, valueName } = this.state
//         // console.log('ItemList :', itemList)
//         console.log('ItemLists :', itemLists)
//         console.log("Result : ", this.state.result)
//         return (
//             <>
//                 {/* {products.map((obj, i) => {
//                     return ( */}
//                 <Grid divided='vertically' >
//                     <Grid.Column width={9}  >
//                         <Card fluid>
//                             <Card.Content>
//                                 <Container>
//                                     <Container>
//                                         <div className="row">
//                                             <h3 className="mr-2">ค้นหา :</h3>
//                                             <Input>
//                                                 <Autocomplete
//                                                     onChange={this.onTagsChange2}
//                                                     options={products}
//                                                     getOptionLabel={option => typeof option === 'string' ? option : option.name}
//                                                     renderInput={params => (
//                                                         <TextField
//                                                             {...params}
//                                                             type="text"
//                                                             fullWidth
//                                                         />
//                                                     )}
//                                                     disableClearable
//                                                 />
//                                             </Input>
//                                         </div>
//                                     </Container>

//                                     <div className="mt-2">
//                                         {this.button()}
//                                     </div>
//                                     <Divider hidden />
//                                     {products.map((obj, i) => {
//                                         return (
//                                             <Card.Group key={i} onChange={this.onTagsChange}>
//                                                 <Card>
//                                                     <Card.Content textAlign="center">
//                                                         {obj.filename ? <Image size="mini" src={`../../uploads/${obj.filename}`} /> : 'No Image'}
//                                                     </Card.Content>
//                                                     <Card.Content>
//                                                         <Card.Description>
//                                                             <span>
//                                                                 {obj.name}
//                                                             </span>
//                                                             <span className="right floated">
//                                                                 {obj.price} บาท
//                                 </span>
//                                                         </Card.Description>
//                                                     </Card.Content>
//                                                 </Card>
//                                             </Card.Group>
//                                         )
//                                     })}
//                                 </Container>
//                             </Card.Content>
//                         </Card>
//                     </Grid.Column>
//                     <Grid.Column width={7}>
//                         <Card fluid>
//                             <Card.Content>
//                                 <Container >
//                                     <table className="table table-borderless" >
//                                         <thead>
//                                             <tr>
//                                                 <th scope="col">Product</th>
//                                                 <th>จำนวน</th>
//                                                 <th>ราคาต่อหน่วย</th>
//                                                 <th>Action</th>
//                                             </tr>
//                                         </thead>
//                                         {itemLists.map((res, i) => {
//                                             console.log(res)
//                                             return (
//                                                 <div key={i} className="col">
//                                                     <div className="row">
//                                                         <div>
//                                                             ID : {res.name}
//                                                         </div>
//                                                         <Button variant="primary" onClick={() => this.hanlerCount("false", i)}>-</Button>
//                                                         <div className="ml-2"> QTY : {res.qty}</div>
//                                                         <Button variant="primary" onClick={() => this.hanlerCount("true", i)}>+</Button>
//                                                     </div>
//                                                 </div>
//                                             )
//                                         })}
//                                     </table>
//                                     <div className=" right">
//                                         {/* <label >ยอดรวม {data.price === undefined ? sum : summary()} บาท</label> */}
//                                     </div>
//                                     <div>
//                                         {/* <Modals /> */}
//                                     </div>
//                                 </Container>
//                             </Card.Content>
//                         </Card  >
//                     </Grid.Column>
//                 </Grid>
//             </>
//         )
//     }
// }

const API_URL = "http://localhost:4000";

class Report2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            multerImage: '',
            image: [],
            filename: ''

        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/image/')
            .then(res => {
                this.setState({
                    image: res.data
                });
                console.log("image : ", this.state.image)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    setDefaultImage(uploadType) {
        if (uploadType === "multer") {
            this.setState({
                multerImage: "multer"
            });
        }
    }
    uploadImage(e, method) {
        console.log("e  :", e.target.files[0])

        if (method === "multer") {

            let imageFormObj = new FormData();
            imageFormObj.append("fileName", moment(Date.now()).format('DDMMYYYYHHmmss'));
            imageFormObj.append("imageData", e.target.files[0]);

            this.setState({
                multerImage: URL.createObjectURL(e.target.files[0]),
            });

            axios.post(`${API_URL}/image/upload`, imageFormObj)
                .then((data) => {
                    if (data.data.success) {
                        alert("Image has been successfully uploaded using multer");
                        this.setDefaultImage("multer");
                    }
                })
                .catch((err) => {
                    alert("Error while uploading image using multer");
                    this.setDefaultImage("multer");
                });
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log("e  :", e.target.files[0])

        let imageFormObj = new FormData();
        // imageFormObj.append("fileName", Date.now());
        // imageFormObj.append("imageData", Date.now() + "_" + "img");
        imageFormObj.append("fileName", moment(Date.now()).format('DDMMYYYYHHmm'));
        imageFormObj.append("imageData", e.target.files[0]);

        this.setState({
            multerImage: URL.createObjectURL(e.target.files[0]),
        });

        axios.post(`${API_URL}/image/upload`, imageFormObj)
            .then((data) => {
                if (data.data.success) {
                    alert("Image has been successfully uploaded using multer");
                    this.setDefaultImage("multer");
                }
            })
            .catch((err) => {
                alert("Error while uploading image using multer");
                this.setDefaultImage("multer");
            });
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <div >
                <form onSubmit={(e) => this.uploadImage(e, "multer")}>
                    <input type="file" onChange={(e) => this.uploadImage(e, "multer")} value={this.state.fileName} />
                    <button>บันทึก</button>
                </form>
                {this.state.image.map((res, i) => {
                    console.log(res)
                    return (
                        <div key={i}>
                            {/* {console.log(res.fileName)} */}
                            {res.fileName ? <Image size="mini" src={`/uploads/${res.fileName}.png` || `/uploads/${res.fileName}.jpeg`} /> : 'No Image'}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Report2
