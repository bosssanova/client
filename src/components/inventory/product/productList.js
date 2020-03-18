
// import React, { Component } from "react";
// import axios from 'axios';
// import { Table, Button, Message, Container } from "semantic-ui-react";
// import { ProductTableRow } from ".";


// export class ProductList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             products: []
//         };
//     }

//     componentDidMount() {
//         axios.get('http://localhost:4000/products/')
//             .then(res => {
//                 this.setState({
//                     products: res.data
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }

//     DataTable() {
//         return this.state.products.map((res, i) => {
//             return <ProductTableRow obj={res} key={i} />;
//         });
//     }


//     render() {
//         const count = this.state.products.length
//         return (
//             <Container>
//                 <div>
//                     <Button.Group className="mt-2" floated='right'>
//                         <Button color='blue' href="/products/create">Add Product</Button>
//                     </Button.Group>
//                     {count > 0 ?
//                         <>
//                             <h1>Product List</h1>
//                             <Table className="mb-5">
//                                 <Table.Header>
//                                     <Table.Row>
//                                         {/* <Table.HeaderCell>#</Table.HeaderCell> */}
//                                         <Table.HeaderCell>Name</Table.HeaderCell>
//                                         <Table.HeaderCell>Barcode</Table.HeaderCell>
//                                         <Table.HeaderCell>Category</Table.HeaderCell>
//                                         <Table.HeaderCell>Cost</Table.HeaderCell>
//                                         <Table.HeaderCell>Price</Table.HeaderCell>
//                                         <Table.HeaderCell>Stock</Table.HeaderCell>
//                                         <Table.HeaderCell>Unit</Table.HeaderCell>
//                                         {/* <Table.HeaderCell>Image</Table.HeaderCell> */}
//                                         <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
//                                     </Table.Row>
//                                 </Table.Header>
//                                 <Table.Body>
//                                     {this.DataTable()}
//                                 </Table.Body>
//                             </Table>
//                         </>
//                         : <Message success compact header="Hooray🎉 🎉 🎉 All Done 😆" />
//                     }

//                 </div>
//             </Container>
//         )
//     }
// }

// export default ProductList