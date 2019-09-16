import React,{useContext,Fragment} from 'react';
import {Link} from 'react-router-dom';
import{CRMContext}from '../../context/CRMLContext';
import {withRouter} from 'react-router-dom';
const Menu =(props) =>{
  const [auth,guardarAuth]= useContext(CRMContext);
 
  if(!auth.auth)return null
  return (  

 <Fragment>
  
<aside className="main-sidebar">


  <section className="sidebar">
  
    <div className="user-panel">
   
      <div className=" info">
        <p>Administrador</p>
        <Link to={"/"}><i className="fa fa-circle text-success" /> Online</Link>
      </div>
    </div>
    
  
    <ul className="sidebar-menu" data-widget="tree">
      <li className="header">Menú de nagecación</li>
    
      
     
          <li><Link to={"/"}><i className="fa fa-circle-o" /> Pagina de inicio</Link></li>
       
          <li><Link to={"/Consultas"}><i className="fa fa-circle-o" />Menú Buscar Parque</Link></li>
          <li><Link to={"/Ingreso"}><i className="fa fa-plus-circle" />Añadir Parque</Link></li>
   
    
    </ul>

  </section>

 
</aside>

</Fragment>  
  )



}
export default withRouter(Menu);
  