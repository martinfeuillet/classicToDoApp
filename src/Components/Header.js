import React from 'react';
import {Card, makeStyles} from "@material-ui/core";
const useStyles = makeStyles({
    root : {
        background: "#F9D421"

    }
})

const Header = () => {
    const classes = useStyles()

    return (
        <div>
            <Card className={classes.root}>
                <h1>React To-Do App</h1>
                <p style={{fontWeight: 'bold'}}>Enhance Your Productivity</p>
            </Card>
        </div>
    );
}

export default Header;