import React,{Fragment, useContext}  from 'react'
import { CRMContext } from '../../context/CRMLContext';
import { withRouter } from 'react-router-dom';
function Dasboard(props){
  const [auth, guardarAuth] = useContext(CRMContext);
  if(!auth.auth &&(localStorage.getItem('token')===auth.token)){
    props.push('/iniciar-sesion');
};
    return(
      
    <Fragment>
        <section className="content-header">
        <h1>
          Dasboard
          <small>it all starts here</small>
        </h1>
       
      </section>
      {/* Main content */}
      <section className="content">
        {/* Default box */}
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Title</h3>
            <div className="box-tools pull-right">
              <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fa fa-minus" /></button>
              <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                <i className="fa fa-times" /></button>
            </div>
          </div>
          <div className="box-body">
            Start creating your amazing application!
          </div>
          {/* /.box-body */}
          <div className="box-footer">
            Footer
          </div>
          {/* /.box-footer*/}
        </div>
        {/* /.box */}
      </section>
      {/* /.content */}
    </Fragment>
    )
}

export default Dasboard;