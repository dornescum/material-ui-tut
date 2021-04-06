import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#2196f3',
            main: '#4d8dcb',
            dark: '#007bff',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        colors:{
            light: '#2196f3',
            main: '#4d8dcb',
            dark: '#007bff',
            contrastText: '#000',
        },
        // error:{
        //     light: '#2196f3',
        //     main: '#4d8dcb',
        //     dark: '#007bff',
        //     contrastText: '#000',
        // }
    },
});
export default theme;