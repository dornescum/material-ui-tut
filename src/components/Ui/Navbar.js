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

// import {Route} from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
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
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(0) + 1,
            // width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    link: {
        backgroundColor: "var(--grey-1)",
        color: "black",
        textDecoration: "none",
        '&:hover': {
            backgroundColor: "var(--grey-2)",
            transition: "var(--transition)",
            textDecoration: "none",

        }
    },


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

    return (
        <Container className={classes.root}>
            <CssBaseline/>
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
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Mini variant drawer
                    </Typography>

                </Toolbar>
            </AppBar>
            <Drawer
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
                <List className={classes.link}>
                    <Link href="/">
                        <ListItem>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Home"} className={classes.link}/>
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
                    <Link href="/desprefirma1">
                        <ListItem>
                            <ListItemIcon>
                                <AccountCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Despre firma"} className={classes.link}/>
                        </ListItem>
                    </Link>
                    {/*stiu de greseala am incurcxat paginile in legaturio*/}
                    <Link href="/listajudete">
                        <ListItem>
                            <ListItemIcon>
                                <DateRangeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Lista judete"} className={classes.link}/>
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
                    <Link href="/tipuriabonamente">
                        <ListItem>
                            <ListItemIcon>
                                <CreditCardIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Tipuri de abonamente"} className={classes.link}/>
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
