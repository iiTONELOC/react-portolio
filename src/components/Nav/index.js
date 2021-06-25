import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Nav(props) {
    const classes = useStyles();
    const {
        tabs = [],
    } = props;
    const tabName = (name) => {
        return `#${name}`
    }
    const changeButtonColor = (e) => {
        if (e.target.matches('a') || e.target.matches('span')) {
            e.target.style = 'background-color: rgba(208, 121, 227, 0.767);)'
        }
    }
    return (
        <div className={classes.root}
        >
            <AppBar position="static">
                <Toolbar
                    onPointerOver={(e) => { changeButtonColor(e) }}
                    onPointerOut={(e) => { e.target.removeAttribute('style') }}>
                    <Typography variant="h6" className={classes.title}>
                        Anthony T
                    </Typography>
                    {tabs.map((tab) => (
                        <Button
                            href={tabName(tab.name)}
                            className={classes.menuButton}
                            key={tab.name}

                        >
                            {tab.name}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </div>
    );
}



// import React, { useEffect } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';


// function Nav(props) {
//     const {
//         tabs = [],
//     } = props;
//     return (
//         <AppBar position="static"
//             color='grey'
//         >
//             <Toolbar>
//                 <IconButton edge="start" classes='menuButton' color="" aria-label="menu">
//                     {/* <MenuIcon /> */}
//                 </IconButton>
//                 <Typography variant="h6" classes='title'>
//                     Anthony T.
//                 </Typography>
//                 <Button color="primary">Login</Button>
//             </Toolbar>
//         </AppBar>
//     )

// }

// export default Nav;