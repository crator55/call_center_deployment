import React,{Fragment, useEffect, useContext} from 'react';

import Tablaclientes from '../Clientes/TablaClientes';
import table  from 'tableexport';
import { CRMContext } from '../../context/CRMLContext'

function Clientes (props) {
  const [auth, guardarAuth] = useContext(CRMContext);
  const consulta = async ()=>{
   
    table.TableExport.prototype.settings={formatConfig: {
      /**
       * XLSX (Open XML spreadsheet) file extension configuration
       * @memberof TableExport.prototype
       */
      xlsx: {
          defaultClass: 'xlsx',
          buttonContent: 'e',
          mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          fileExtension: '.xlsx'
      }
    }
    };

 
    new table(document.getElementsByTagName("table"),{
      headers: true,                              // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
      footers: false,                              // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
      formats: ['xlsx','csv'],            // (String[]), filetype(s) for the export, (default: ['xlsx', 'csv', 'txt'])
      filename: 'tabla',                             // (id, String), filename for the downloaded file, (default: 'id')
      bootstrap: true,                           // (Boolean), style buttons using bootstrap, (default: true)
      exportButtons: true,                        // (Boolean), automatically generate the built-in export buttons for each of the specified formats (default: true)
      position: 'top',                         // (top, bottom), position of the caption element relative to table, (default: 'bottom')
      ignoreRows: null,                           // (Number, Number[]), row indices to exclude from the exported file(s) (default: null)
      ignoreCols: null,                           // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
      trimWhitespace: true,                       // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
      RTL: false,                                 // (Boolean), set direction of the worksheet to right-to-left (default: false)
      sheetname: "id",                             // (id, String), sheet name for the exported spreadsheet, (default: 'id')
      
  });
 

  const script = document.createElement("script");
  script.src= "js/Script.js";
  script.async= true;
  document.body.appendChild(script);


  }

  useEffect(() => {
    consulta();

  });
  if(!auth.auth &&(localStorage.getItem('token')===auth.token)){
    props.push('/iniciar-sesion');
};
  return ( 
     
<Fragment>
  <section className="content-header">
    <h1>
     Tabla de Clientes
      <small>(Buscar por numero)</small>
    </h1>
   
  </section>
      <section className="content">
      <div className="row">
        <div className="col-xs-14">
          <div className="box">
           
                <div className="box-body">
                <table id="example1" className="table table-bordered table-hover ">
                  <thead>
                    <tr>
                 
                      <th>LINEA DE NEGOCIO</th>
                      <th>TELEFONO</th>
                      <th>FECHA ALTA</th>
                      <th>FECHA BAJA</th>
                      <th>ESTADO ABONADO</th>
                      <th>NOMBRE PLAN</th>
                      <th>PLAN CATEGORIA</th>
                      <th>TARIFA BASICA</th> 
                      <th> IDENTIFICACIÓN</th>  
                      <th>TIPO DOCUMENTO</th>
                        <th>NOMBRE</th>
                    <th>PROVINCIA</th>
                    <th>CANTÓN</th>
                    <th>TÉLOFONO</th>
                    <th>CICLO FACTURACION</th>
                    <th>EMAIL</th>
                    <th>FORMA DE PAGO</th>
                    <th>PORTABILIDAD</th>
                    <th>OPERADORA</th>
                    <th>PROCEDENCIA EQUIPO</th>
                    <th>PROMEDIO</th>

                  </tr>
                  </thead>
                  <tbody>
              
              
              
               {props.location.state.map(cliente=>(
                  <Tablaclientes
                  key= {cliente._id}
                  cliente={cliente}
                  
                  
                  />)
               )}
               
                
                 </tbody>
                
               
                  </table>
                 
        </div>      
          </div>
   
          </div>
                </div>
      </section>
     
  
      </Fragment>


  )



}
export default Clientes;
  