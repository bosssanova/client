import React, { useState } from 'react'
import { Container, Button, Modal, Header, Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Calculate = ({ setSum, items, modalOpen, handleOpen, handleClose, onTagsChange, handlerRemove, setDatas }) => {
    const onSubmit = () => {
        if (window.confirm('ยืนยัน ?')) {
            (console.log("Save !!"))
            window.location = '/pos'
        } else {
            (console.log("Cancel"))
        }
    }

    var summary = 0
    for (let i = 0; i < items.length; i++) {
        const element = items[i].sum;
        // console.log(element)
        summary += element
        // console.log("summary : ", summary)
    }

    const Modals = () => {
        console.log("Items : ", items)

        return (
            <Modal
                trigger={<Button onClick={handleOpen} color="green">รับชำระ</Button>}
                open={modalOpen}
                onClose={handleClose}
                size='small'
            >
                <Header icon='browser' content='ชำระเงิน' />
                <Modal.Content >
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Product</Table.HeaderCell>
                                <Table.HeaderCell>จำนวน</Table.HeaderCell>
                                <Table.HeaderCell>หน่วย</Table.HeaderCell>
                                <Table.HeaderCell>จำนวนเงิน</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {items.map((res, i) => {
                            return (
                                <Table.Body key={i}>
                                    <Table.Row>
                                        <Table.Cell>{res.name}</Table.Cell>
                                        <Table.Cell>{res.qty}</Table.Cell>
                                        <Table.Cell>{res.unit}</Table.Cell>
                                        <Table.Cell>{res.price * res.qty}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            )
                        })}
                    </Table>
                    <label>Total : {summary} บาท</label>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='yellow' onClick={handleClose} >ยกเลิก</Button>
                    <Button onClick={onSubmit} color="blue" className=" right">ตกลง</Button>
                </Modal.Actions>
            </Modal>
        )
    }

    const [current, setCurrent] = useState(0)

    const hanlerCount = (e, i, current) => {

        current = items[i]
        if (e === "false") {
            if (current.qty > 1) {
                current.qty = current.qty - 1
                current.sum = current.qty * current.price
                // console.log(current)
                // setCurrent({ qty: items[i].qty, sum: items[i].sum })
                setCurrent({ qty: current.qty, sum: current.sum })
            } else {    
                handlerRemove(e, i)
            }
        } else {
            if (current.qty < 10) {
                current.qty = current.qty + 1
                current.sum = current.qty * current.price
                // console.log(current)
                // setCurrent({ qty: items[i].qty, sum: items[i].sum })
                setCurrent({ qty: current.qty, sum: current.sum })
            } else {
                return alert('Max!!', { type: 'success' }, console.log("Max!!"))
            }
        }
    }


    return (
        <Container >
            <table className="table table-borderless" >
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th>จำนวน</th>
                        <th>ราคาต่อหน่วย</th>
                        <th>จำนวนเงิน</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {items.map((res, i) => {
                    return (
                        <tbody key={i}>
                            <tr >
                                <td>
                                    <div>
                                        {res.name}
                                    </div>
                                </td>
                                <td className="row">
                                    <Button size="tiny" color="red" variant="primary" onClick={() => hanlerCount("false", i, current)}>-</Button>
                                    <div className="ml-1 mr-1">{res.qty}</div>
                                    <Button size="tiny" color="blue" variant="primary" onClick={() => hanlerCount("true", i, current)}>+</Button>
                                </td>
                                <td>{res.price}</td>
                                <td>{res.sum}</td>
                                <td><Button color="red" onClick={(e) => handlerRemove(e, i)}>ลบ</Button></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>

            <div className=" right">
                <label >ยอดรวม {summary} บาท</label>
            </div>
            <div>
                <Modals />
            </div>
        </Container >
    )
}

Calculate.propTypes = {
    data: PropTypes.array
}

export default Calculate
