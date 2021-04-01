import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DespreFirma1 from './pages/DespreFirma/DespreFirma1';
import DateFiscale from "./pages/DateFiscale/DateFiscale";
import GalerieFoto from "./pages/GalerieFoto/GalerieFoto";
import TipuriLucrari from "./pages/TipuriLucrari/TipuriLucrari";
import Mesaje from "./pages/Mesaje/Mesaje";
import DateContact from "./pages/DateContact/DateContact";
import TipuriAbonamente from "./pages/TipuriAbonamente/TipuriAbonamente";
import Judete from "./pages/Judete/Judete";
import Istoric from "./pages/Istoric/Istoric";
import ModalitatiPlata from "./pages/ModalitatiPlata/ModalitatiPlata";
import Resetare from "./pages/Resetare/Resetare";
import Create from './pages/Create';
import Navbar from './components/Ui/Navbar'
import Home from "./pages/Home/Home";
import Date from './pages/ListaJudete/ListaJudete';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./utils/theme";
import LogOut from "./pages/LogOut/LogOut";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route path="/create">
                        <Create/>
                    </Route>

                    <Route exact path="/desprefirma1">
                        <DespreFirma1/>
                    </Route>

                    <Route path="/listajudete">
                        <Date/>
                    </Route>
                    <Route path="/datefiscale">
                        <DateFiscale/>
                    </Route>

                    <Route path="/galeriefoto">
                        <GalerieFoto/>
                    </Route>
                    <Route path="/tipurilucrari">
                        <TipuriLucrari/>
                    </Route>

                    <Route path="/mesaje">
                        <Mesaje/>
                    </Route>

                    <Route path="/datecontact">
                        <DateContact/>
                    </Route>

                    <Route path="/tipuriabonamente">
                        <TipuriAbonamente/>
                    </Route>
                    <Route path="/judete">
                        <Judete/>
                    </Route>

                    <Route path="/istoric">
                        <Istoric/>
                    </Route>

                    <Route path="/modalitatiplata">
                        <ModalitatiPlata/>
                    </Route>

                    <Route path="/resetare">
                        <Resetare/>
                    </Route>

 <Route path="/logout">
                        <LogOut/>
                    </Route>


                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
