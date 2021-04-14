import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from '@material-ui/core/Link';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Container} from "@material-ui/core";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import ContactsIcon from '@material-ui/icons/Contacts';
// import TipuriAbonamente from "../../pages/TipuriAbonamente/TipuriAbonamente";
import CreditCardIcon from '@material-ui/icons/CreditCard';
import BallotIcon from '@material-ui/icons/Ballot';
import HistoryIcon from '@material-ui/icons/History';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from "@material-ui/core/Box";

// import {Route} from 'react-router-dom'
import Button from '@material-ui/core/Button';

// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import EmailIcon from '@material-ui/icons/Email';
import logo from '../../utils/img/logo.png';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "flex-end",
        alignContent:"center",
        // width: '100%',
        // maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
        "&:hover": {
            backgroundColor: "black"
        }

    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        backgroundColor: theme.palette.background.paper,
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(0) + 1,
        [theme.breakpoints.up('sm')]: {
            // width: theme.spacing(7) + 1,
            width: theme.spacing(30) + 1,
        },
        [theme.breakpoints.up('md')]: {
            // width: theme.spacing(7) + 1,
            width: theme.spacing(30) + 1,
        },
        [theme.breakpoints.up('lg')]: {
            // width: theme.spacing(7) + 1,
            width: theme.spacing(30) + 1,
        },
    },
    toolbar: {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    // toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        padding: theme.spacing(5),
        // backgroundColor: theme.palette.background.default,

    },
    // link: {
    //     // backgroundColor: "var(--grey-1)",
    //     // backgroundColor: theme.palette,
    //     color: "black",
    //     // color: theme.palette.common.black,
    //
    //     // textDecoration: "none",
    //     '&:hover': {
    //         color: "grey",
    //         transition: "var(--transition)",
    //         // backgroundColor: theme.palette,
    //
    //         // textDecoration: "none",
    //     //
    //     }
    // },
    profile:{
       fontSize:14,
        // color: theme.palette.colors
       //  flexGrow:1,
       //  paddingLeft: '50rem'
        color: theme.palette.common.white,

    },
    title: {
        flexGrow: 1,
    },
    logoNav:{
        height: 50,
        width:200,
        // flexGrow: 1,

    },
    general:{
        // background: rgb(2,0,36),
        background: "linear-gradient(90deg, rgba(228,228,231,1) 23%, rgba(228,218,218,0.31974796754639356) 60%, rgba(255,255,255,0.31974796754639356) 86%)"
}
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
// icon
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // ===============
    return (
        <Container className={classes.root}>
            {/*<CssBaseline/>*/}
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="end"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title}>
                      Admin
                    </Typography>
                    <Box display={{ xs: 'none', sm: 'block' }}>
                        <img src={logo} className={classes.logoNav}  style={{backgroundColor:"white"}} alt=""/>

                    </Box>
                    <div className={classes.profile}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                className={classes.profile}
                        >
                            {/*Pro Member*/}
                            <ListItemIcon>
                                <AccountCircleIcon/>
                            </ListItemIcon>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                id='drawer'
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}

            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List id='listLinks'>
                    <ListItem  className={classes.general}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Datele firmei /PFA"}/>
                    </ListItem>
                    <Link href="/">
                        <ListItem>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Date principale"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    <Link href="/desprefirma1">
                        <ListItem>
                            <ListItemIcon>
                                <AccountCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Despre firma"} className={classes.link}/>
                        </ListItem>
                    </Link>




                    <Link href="/datefiscale">
                        <ListItem>
                            <ListItemIcon>
                                <DateRangeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Date fiscale"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    <Link href="/galeriefoto">
                        <ListItem>
                            <ListItemIcon>
                                <AddAPhotoIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Galerie foto"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    <Link href="/tipurilucrari">
                        <ListItem>
                            <ListItemIcon>
                                <WorkIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Tipuri de lucrari"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    {/*===========*/}
                    <ListItem  className={classes.general}>
                        <ListItemIcon>
                            <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Contact"}/>
                    </ListItem>
                    {/*===========*/}
                    <Link href="/mesaje">
                        <ListItem>
                            <ListItemIcon>
                                <MessageIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Mesaje"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    <Link href="/datecontact">
                        <ListItem>
                            <ListItemIcon>
                                <ContactsIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Date contact"} className={classes.link}/>
                        </ListItem>
                    </Link>

                    {/*======abonamente=====*/}
                    <ListItem  className={classes.general}>
                        <ListItemIcon>
                            <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Abonamente"}/>
                    </ListItem>
                    {/*===========*/}

                    <Link href="/tipuriabonamente">
                        <ListItem>
                            <ListItemIcon>
                                <CreditCardIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Tipuri abonamente"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    <Link href="/listajudete">
                        <ListItem>
                            <ListItemIcon>
                                <DateRangeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Lista judete"} className={classes.link}/>
                        </ListItem>
                    </Link>

                    <Link href="/istoric">
                        <ListItem>
                            <ListItemIcon>
                                <HistoryIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Istoric"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    <Link href="/modalitatiplata">
                        <ListItem>
                            <ListItemIcon>
                                <AttachMoneyIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Modalitai de plata"} className={classes.link}/>
                        </ListItem>
                    </Link>

                    {/*======Statistici=====*/}
                    <ListItem  className={classes.general}>
                        <ListItemIcon>
                            <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Statistici"}/>
                    </ListItem>
                    {/*===========*/}

                    <Link href="/resetare">
                        <ListItem>
                            <ListItemIcon>
                                <RotateLeftIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Generale"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    <Link href="/judete">
                        <ListItem>
                            <ListItemIcon>
                                <BallotIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Judete"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    <Link href="/create">
                        <ListItem>
                            <ListItemIcon>
                                <AccountBoxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Individuale"} className={classes.link}/>
                        </ListItem>
                    </Link>




                    {/*======administrativ=====*/}
                    <ListItem  className={classes.general}>
                        <ListItemIcon>
                            <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Administrativ"}/>
                    </ListItem>
                    {/*===========*/}

                    <Link href="/resetare">
                        <ListItem>
                            <ListItemIcon>
                                <RotateLeftIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Resetare parola"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    <Link href="/logout">
                        <ListItem>
                            <ListItemIcon>
                                <ExitToAppIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Log Out"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    <Link href="/create">
                        <ListItem>
                            <ListItemIcon>
                                <AccountBoxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Create"} className={classes.link}/>
                        </ListItem>
                    </Link>

                </List>
                <Divider/>
            </Drawer>
            {/*<main className={classes.content}>*/}
            {/*    <div className={classes.toolbar}/>*/}
            {/*    /!*<Typography variant='h5'>*!/*/}
            {/*    /!*   UN titlu gen Slot*!/*/}
            {/*    /!*</Typography>*!/*/}

            {/*</main>*/}
        </Container>
    );
}
