import React,{useContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/layout/Header';
import Menu from '../src/components/layout/Menu';
import Clientes from '../src/components/Clientes/Clientes';
import Dasboard from '../src/components/Clientes/Dasboard';
import Ingreso from '../src/components/Clientes/Ingreso';
import Consultas from '../src/components/Clientes/Consultas';
import Login from '../src/components/auth/Login';
import {CRMContext,CRMProvider} from './context/CRMLContext';
function App() {

    const [auth,guardarAuth]= useContext(CRMContext);
  return (

    <Router>
       <CRMProvider value = {[auth,guardarAuth]}>
         
    <body className="hold-transition skin-blue sidebar-mini">
    <Header />
          <Menu />
        <div className="wrapper">
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={Dasboard} />
              <Route exact path="/clientes" component={Clientes} />
              <Route exact path="/consultas" component={Consultas} />
              <Route exact path="/ingreso" component={Ingreso} />
              <Route exact path="/iniciar-sesion" component={Login} />
            </Switch>
          </div>  
        </div>    
    </body>  
    </CRMProvider>
  </Router>
  )
}
export default App;