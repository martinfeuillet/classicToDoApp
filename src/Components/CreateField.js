import React, {useState} from 'react';
import {Button, Input, makeStyles, } from "@material-ui/core";

const useStyles = makeStyles({
    root : {
        background: "#1E2225",
        color : '#B4B4B4',
        padding : 5,
        margin : 10,
        width : 200
    }
})

const CreateField = ({onSearch, search, onCreateField, newItem, onNewItem}) => {

    const handleChange = (e) =>{
        onSearch(e)
    }
    const classes = useStyles()




    function handleSubmit(e) {
        e.preventDefault()
        onCreateField(e)
    }

    function handleNewItem(e) {
        onNewItem(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input type='text' className={classes.root}  variant='filled' value={newItem} onChange={handleNewItem} placeholder='create new work item'/>
                <div>
                    <Button type='submit' variant='contained' color='primary' size={"large"} >Enter New Item</Button>
                </div>
            </form>
            <Input type='search' className={classes.root} value={search}  variant='filled' placeholder='filter list' onChange={handleChange}/>
        </div>
    );
};

export default CreateField;