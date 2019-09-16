import React,{useEffect,Fragment,useState, useContext}  from 'react'
import axios from '../../config/config'
import Swal from 'sweetalert2';
import { CRMContext } from '../../context/CRMLContext'
function Dasboard(props){
  
  const [consulta, guardararchivo]= useState('');
  const [auth, guardarAuth] = useContext(CRMContext);
  const consultar= async e=>{
    const formData = new FormData();
    formData.append('IMAGEN',consulta)


    e.preventDefault();
  axios.post('/clientes/csv',formData,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    }).then(res=>{


      Swal.fire(
        'Datos ingresados con éxito!',
        '...',
        'success'
      )
        

    });
   
}

const updateState= async e=>{
  guardararchivo(e.target.files[0]);
  
  
}


if(!auth.auth &&(localStorage.getItem('token')===auth.token)){
  props.push('/iniciar-sesion');
};
    return(
      
    <Fragment>
    
      {/* Main content */}
      <section className="content">
        {/* Default box */}
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Ingrese un archivo</h3>
            
          </div>
          <form 
                    onSubmit={consultar}
                    
            >
          <div className="box-body">
              
          <div className="form-group">
            <label htmlFor="exampleInputFile">File input</label>
               <input name="IMAGEN" onChange={updateState} type="file" />
               
          </div>
          <button   type="submit"   className="btn btn-block btn-info">hola</button>
   

          </div>
          </form>
          {/* /.box-body */}
         
          {/* /.box-footer*/}
        </div>
        {/* /.box */}
      </section>
      {/* /.content */}
    </Fragment>
    )
}

export default Dasboard;