import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import '../../index.css'
import {makeStyles} from "@material-ui/core";

const useStyles =makeStyles((theme)=>({
    pl40:{
        // paddingLeft:40,
        [theme.breakpoints.up('xs')]: {
         padding:'1.2rem .5rem'
        },
        [theme.breakpoints.up('sm')]: {
            padding:'1rem .8rem'
        },
        [theme.breakpoints.up('md')]: {
            padding:'1.4rem'
        },
        [theme.breakpoints.up('lg')]: {
            padding:'1rem 1.3rem'
        },
    },
    title: {
        // display: 'flex',
        // justifyContent: "flex-start",
        padding: '0.3rem 0',
        borderBottom: '1px solid var(--grey-2)',
        fontWeight: 'bold',
        // backgroundColor: "#9ab973",
        [theme.breakpoints.up('xs')]: {
            fontSize: 15
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 19
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 22
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 29
        },
        // transition: "all .3s ease",
        // "&:hover":{
        //     backgroundColor:"red",
        //     fontSize:71
        // }
    },
    para:{
        fontSize: '1.2rem',
        [theme.breakpoints.up('xs')]: {
            fontSize: 15,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 19
        },
        // [theme.breakpoints.up('md')]: {
        //     fontSize: 22
        // },
        // [theme.breakpoints.up('lg')]: {
        //     fontSize: 29
        // },
    }
}))


const HomeTop = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.pl40}>
            <Typography variant='h1' align='left' className={classes.title}> Date generale</Typography>
            <Typography paragraph align='left' className={classes.para}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam enim
                expedita iste iusto, magni velit. Asperiores eaque optio provident sit!
            </Typography>
            <Typography paragraph align='left' className={classes.para}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam enim
                expedita iste iusto, magni velit. Asperiores eaque optio provident sit!
            </Typography>
        </Paper>
    )
};
export default HomeTop;