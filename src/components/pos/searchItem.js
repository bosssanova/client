import React, { useState } from 'react'
import { Container, Button, Card, Divider, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { TextField } from '@material-ui/core'

const Lists = ({ obj, i, onTagsChange }) => {
    // console.log("OBJ :",obj.fileName)
    // console.log("OBJ : ", obj)
    return (
        <Card
            onClick={onTagsChange}
            key={i}
            obj={obj}
        >
            <Card.Content textAlign="center">
                {obj.fileName ? <Image size="mini" src={`../../uploads/${obj.fileName}`} /> : 'No Image'}
            </Card.Content>
            <Card.Content>
                <Card.Description>
                    <span>
                        {obj.name}
                    </span>
                    <span className="right floated">
                        {obj.price} บาท
                                </span>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

const ItemsListCard = ({ valueCategory, data, onTagsChange, result }) => {
    // console.log("valueCategory : ", valueCategory)
    // console.log("obj.name : ", data.name)
    // console.log("obj.category : ", data.category)
    console.log("result : ", result.result)

    const forList = (obj, i, onTagsChange) => {
        // console.log("obj : ",obj.name)
        return <Lists obj={obj} key={i} onTagsChange={onTagsChange} />
    }

    return data.map((obj, i) => {
        // console.log("valueCategory : ", valueCategory)
        // console.log("obj.name : ", obj.name)

        return (
            valueCategory === "All" ? forList(obj, i, onTagsChange) :
                (result.result === obj.name && valueCategory === obj.category) || valueCategory === obj.category ? forList(obj, i, onTagsChange) :
                    // valueCategory === obj.category ? forList(obj, i, onTagsChange) :
                    ''
        )


        // if (valueCategory === "All") {
        //     return forList(obj, i, onTagsChange)
        // } else if (result.result === obj.name && valueCategory === obj.category) {
        //     return forList(obj, i, onTagsChange)
        // } else if (valueCategory === obj.category) {
        //     return forList(obj, i, onTagsChange)
        // }

        // if (valueCategory === "All") {
        //     if (result.result === obj.name) {
        //         if (result.result === obj.name && valueCategory === obj.category) {
        //             return forList(obj, i, onTagsChange)
        //         } else {
        //             return forList(obj, i, onTagsChange)
        //         }
        //     } else {
        //         return forList(obj, i, onTagsChange)
        //     }
        // }

        // ((valueCategory === "All") ? forList(obj, i, onTagsChange) : (result.result === obj.name && valueCategory === obj.category)) ? forList(obj, i, onTagsChange) : (valueCategory === obj.category) ? forList(obj, i, onTagsChange) : ''

        //     : (valueCategory === obj.category) ? forList(obj, i, onTagsChange) : (result.result === obj.name.toLowerCase() && valueCategory === obj.category) ? forList(obj, i, onTagsChange) : ''

    })
}


const SearchItem = ({ data, onTagsChange, items }) => {
    // console.log("Data:", data)
    // console.log("valueName : ", valueName)
    // console.log("Items: ", items)
    const [valueCategory, setValueCategory] = useState('All')
    const [result, setResult] = useState('')

    const onSearch = (e, v) => {
        if (v !== null) {
            setResult({ result: v.name })
            console.log("Name : ", v.name)
        } else {
            setResult({ result: '' })
        }
    }

    const getIdCategory = (e) => {
        console.log("e : ", e._dispatchInstances[0].pendingProps.children[0])
        setValueCategory(e._dispatchInstances[0].pendingProps.children[0])
        // setValueCategory(e._dispatchInstances[0].pendingProps.id)
    }

    const btnCategory = ['All', 'Cat A', 'Cat B', 'Cat C', 'Cat D']

    // const button = () => {
    //     return (
    //         <>
    //             <Button active={valueCategory === 'All'} onClick={(e) => getIdCategory(e)} id="All" size="medium" inverted color="violet" >All</Button>
    //             <Button active={valueCategory === 'Cat A'} onClick={(e) => getIdCategory(e)} id="Cat A" size="medium" inverted color="violet" >Cat A</Button>
    //             <Button active={valueCategory === 'Cat B'} onClick={(e) => getIdCategory(e)} id="Cat B" size="medium" inverted color="violet" >Cat B</Button>
    //             <Button active={valueCategory === 'Cat C'} onClick={(e) => getIdCategory(e)} id="Cat C" size="medium" inverted color="violet" >Cat C</Button>
    //             <Button active={valueCategory === 'Cat D'} onClick={(e) => getIdCategory(e)} id="Cat D" size="medium" inverted color="violet" >Cat D</Button>
    //         </>
    //     )
    // }

    return (
        <Container>
            <Container>
                <div className="row">
                    <h3 className="mr-2">ค้นหา :</h3>
                    {/* <Input size=""> */}
                    <Autocomplete
                        onChange={onSearch}
                        options={data}
                        getOptionLabel={option => typeof option === 'string' ? option : option.name}
                        renderInput={params => (
                            <TextField
                                style={{ width: 200 }}
                                {...params}
                            // fullWidth
                            />
                        )}
                    // disableClearable
                    />
                    {/* </Input> */}
                </div>
            </Container>
            <div className="mt-2">
                {btnCategory.map(res => {
                    return <Button key={res} active={valueCategory === res} onClick={(e) => getIdCategory(e)} size="medium" inverted color="violet" >{res}</Button>
                })}
                {/* {button()} */}
            </div>
            <Divider hidden />
            <Card.Group>
                <ItemsListCard result={result} valueCategory={valueCategory} data={data} onTagsChange={onTagsChange} setValueCategory={setValueCategory} />
            </Card.Group>
        </Container>
    )
}


SearchItem.propTypes = {
    setItems: PropTypes.func
}

export default (SearchItem)
