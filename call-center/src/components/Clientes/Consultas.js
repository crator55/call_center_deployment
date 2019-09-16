import React, { useState, useEffect, useContext } from 'react';
import axios from '../../config/config';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap-daterangepicker/daterangepicker.css';
// you will also need the css that comes with bootstrap-daterangepicker
import { CRMContext } from '../../context/CRMLContext'
import { PromiseProvider } from 'mongoose';
function Consulta({ history }) {

    const [auth, guardarAuth] = useContext(CRMContext);

    //consulta =state, consultar_base = funcion para guaradar la consulta
    const [consulta, consultar_base] = useState([]);
    const consultar = e => {

        e.preventDefault();
        axios.post('/prueba', consulta,{ headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJhZG1pbiIsImlkIjoiNWQ1MGQ0ODJlZTM3ZTUwM2UwM2NhZTA1IiwiaWF0IjoxNTY2NTMxMjAyLCJleHAiOjE1NjY1NTI4MDJ9.XDTsvunbqdhlBeLUtiTV6QsxWnGk0Rud3oZcr4RTCOQ`}}).then(res => {

            history.push('/Clientes', res.data);
            Swal.fire(
                'Consulta ingresada con éxito!',
                '...',
                'success'
            )
        })
    }
    const numero_mayor = e => {
        consultar_base({ ...consulta, ["PROMEDIO"]: { $gte: e.target.value } })

    }
    const handleEvent = (event, picker) => {

        console.log(picker.startDate);

        consultar_base({ ...consulta, ["FECHA_DE_ALTA"]: { $gte: picker.startDate, $lte: picker.endDate } })
        //consultar_base({ ["$gte"]:picker.startDate,["$lte"]:picker.endDate})

    }
    const updateState = e => {

        consultar_base(


            {
                ...consulta,
                [e.target.name]: e.target.value

            })
        console.log(e.target.name);
    }

    useEffect(() => {
        
        const script = document.createElement("script");
        script.src = "js/Script.js";
        script.async = true;
        document.body.appendChild(script);

    }, []);
    if(!auth.auth &&(localStorage.getItem('token')===auth.token)){
        history.push('/iniciar-sesion');
    };
    return (

        <section className="content">


            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">Formulario</h3>
                </div>
                {/* /.box-header */}
                {/* form start */}
                <form
                    onSubmit={consultar}

                >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Operadora</label>
                                    <input type="text"
                                        className="form-control"
                                        name="OPERADORA"
                                        placeholder="Ingresar Operadora"
                                        onChangeCapture={updateState}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputtext1">Portabilidad</label>
                                    <input type="text"
                                        className="form-control"
                                        name="PORTABILIDAD"
                                        placeholder="Ingresar Portabilidad"
                                        onChange={updateState}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputtext1">Provincia</label>
                                    <input type="text"
                                        className="form-control"
                                        name="PROVINCIA"
                                        placeholder="Ingresar Provincia"
                                        onChange={updateState}
                                    />
                                </div>
                            </div>
                            <div className="box-footer">
                                <button
                                    type="submit"
                                    className="btn btn-block btn-info"

                                >Buscar <i className="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputtext1">Cantón</label>
                                <input type="text"
                                    className="form-control"
                                    name="CANTON"
                                    placeholder="Ingresar Cantón"
                                    onChange={updateState}
                                />
                            </div>
                            <label htmlFor="exampleInputtext1">Elegir Fecha</label>
                            <DateRangePicker onApply={handleEvent} >
                                <a className="btn btn-app">
                                    <i className="fa fa-calendar-check-o"></i> Fecha
              </a>
                            </DateRangePicker>

                            <div className="form-group">
                                <label htmlFor="exampleInputtext1">Línea de negocio</label>
                                <input type="text"
                                    className="form-control"
                                    name="LINEA_DE_NEGOCIO"
                                    placeholder="Ingresar Linea de negocio"
                                    onChange={updateState}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputtext1">Promedio</label>
                                <input type="text"
                                    className="form-control"
                                    name="PROMEDIO"
                                    placeholder="Ingresar Promedio"
                                    onChange={numero_mayor}
                                />
                            </div>




                            {/* /.box-body */}

                        </div>
                    </div>
                    {/* /.row */}
                </form>
            </div>


        </section>
    )
}
export default withRouter(Consulta);