import React from 'react';
import MuiTableCell from "@material-ui/core/TableCell";
import {
    Button,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow, withStyles
} from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";
const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);

const useStyles = makeStyles({
    table: {
        maxWidth: 600,
    },
    buttons: {
        background : '#F9D421'
    },
});

const FilterField = ({list, search, handleRemove}) => {
    const classes = useStyles();
    let searchs = search.trim().toLowerCase()
    var listTri = list
    if (searchs.length > 0){
        listTri =list.filter(item => item.toLowerCase().match(searchs));
    }

    function handleClick(event) {
        handleRemove(event);
    }

    return (
            <TableContainer className={'center'}>
                <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Task</TableCell>
                    <TableCell>(X)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {listTri.map((item,index)=>{
                    return <TableRow key={index}>
                        <TableCell>Task {index + 1}</TableCell>
                        <TableCell>{item}</TableCell>
                        <TableCell><Button className={classes.buttons} onClick={()=> handleClick(index)}>X</Button></TableCell>
                    </TableRow>
                })}
                </TableBody>
                </Table>
            </TableContainer>
    );
};

export default FilterField;