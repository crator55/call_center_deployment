import React, {Fragment,useContext} from 'react';
import{CRMContext}from '../../context/CRMLContext';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const Header =(props) =>{
  const [auth,guardarAuth]= useContext(CRMContext);
   console.log(auth);
  const cerrarSesion=()=>{
    guardarAuth({
      token:"",
      auth:false
    });
    localStorage.setItem('token','');
    
    props.history.push('/iniciar-sesion');
  }

  return (
   
    <Fragment>
     {auth.auth ?(
   <header className="main-header">

<nav className="navbar navbar-static-top">
  
  <Link to={"/"} className="sidebar-toggle" data-toggle="push-menu" role="button">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar" />
    <span className="icon-bar" />
    <span className="icon-bar" />
  </Link>
  <div className="navbar-custom-menu">
    <ul className="nav navbar-nav">
    
 
      <li className="dropdown user user-menu">
        <Link to={"/"} className="dropdown-toggle" data-toggle="dropdown">
         
          <span className="hidden-xs">Administrador</span>
        </Link>
        <ul className="dropdown-menu">
      
          <li className="user-footer">
            <div className="pull-left">
              <Link to={"/"} className="btn btn-default btn-flat">Perfil</Link>
            </div>
            <div className="pull-right">
            

         
            <button
                onClick={cerrarSesion}
            >Cerrar Sesion</button>
         
            </div>
          </li>
        </ul>
      </li>
    
   
    </ul>
  </div>
  
</nav>

</header>
):null}
    </Fragment>
    
  )



}
export default withRouter (Header);
  
    