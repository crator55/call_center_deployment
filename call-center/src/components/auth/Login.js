import React, { useState,useContext } from 'react';
import Swal from 'sweetalert2';
import axios from '../../config/config';
import { withRouter } from 'react-router-dom';
import {CRMContext} from '../../context/CRMLContext'
function Login(props) {
    const [auth, guardarAuth] =useContext(CRMContext);

    const [credenciales, guardaCredenciales] = useState({});
    const iniciarSesion = async e => {
        e.preventDefault();
        try {
            const respuesta = await axios.post('/iniciar-sesion', credenciales);
            const { token } = respuesta.data;
            localStorage.setItem('token', token);
            guardarAuth({
                token,
                auth:true
            })
            Swal.fire(
                'Login Correcto',
                '...',
                'success'
            )
            props.history.push('/consultas');
        } catch (error) {
            if (error.response) {
                Swal.fire({
                    type: 'error',
                    title: 'Hubo un error',
                    text: error.response.data.mensaje
                })
            } else{
                Swal.fire({
                    type: 'error',
                    title: 'Hubo un error',
                    text: 'Hubo un error'  })
            }
           
        }
    }
    const leerDatos = e => {
        guardaCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value

        })

    }
    return (

        <div className="login-box">
            <div className="login-logo">
                <b>Call</b>Center
        </div>

            <div className="login-box-body">
                <p className="login-box-msg">Inicia sesión aquí</p>
                <form onSubmit={iniciarSesion}>
                    <div className="form-group has-feedback">
                        <input type="text"
                            className="form-control"
                            placeholder="Usuario"
                            name="nombre" 
                            required
                            onChange={leerDatos}
                        />
                        <span className="glyphicon glyphicon-user form-control-feedback" />
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            name="password"
                            required
                            onChange={leerDatos}

                        />
                        <span className="glyphicon glyphicon-lock form-control-feedback" />

                    </div>

                    <input type="submit"
                        className="btn btn-primary btn-block btn-flat"
                        value='Iniciar sesion'
                    />
                </form>

            </div>
        </div>

    )
}
export default withRouter(Login);