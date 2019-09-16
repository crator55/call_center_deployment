import React,{Fragment, useContext}  from 'react'





function tablaclientes({cliente}){

  
const { LINEA_NEGOCIO,TELEFONO,FECHA_DE_ALTA,FECHA_DE_BAJA,ESTADO_ABONADO,PLAN_NOMBRE_ACTUAL,PLAN_CATEGORIA_ACTUAL,TARIFA_BASICA_PLAN_ACTUAL,TIPO_DOC_CLIENTE,DOCUMENTO,NOMBRE_CLIENTE,PROVINCIA,CANTON,CICLO_FACTURACION,EMAIL,FORMA_PAGO,PORTABILIDAD,OPERADORA,PROCEDENCIA_EQUIPO,PROMEDIO} = cliente;

var formatear_fecha =new Date(FECHA_DE_ALTA);
var ano=formatear_fecha.getFullYear();
var mes=formatear_fecha.getMonth();
var dia=formatear_fecha.getDate();
var formatear_fecha1 =new Date(FECHA_DE_BAJA);
var ano1=formatear_fecha1.getFullYear();
var mes1=formatear_fecha1.getMonth();
var dia1=formatear_fecha1.getDate();




return(
    

              
    <Fragment> 
              
                  <tr>
                 
                  <td>{LINEA_NEGOCIO}</td>
                  <td>{TELEFONO}</td>
                  <td>{ano}-{mes}-{dia}</td>
                  <td>{ano1}-{mes1}-{dia1}</td>
                  <td>{ESTADO_ABONADO}</td>
                  <td>{PLAN_NOMBRE_ACTUAL}</td>
                  <td>{PLAN_CATEGORIA_ACTUAL}</td>
                  <td>{TARIFA_BASICA_PLAN_ACTUAL}</td>
                  <td>{TIPO_DOC_CLIENTE}</td>
                  <td>{DOCUMENTO}</td>
                    <td>{NOMBRE_CLIENTE}</td>
                    <td>{PROVINCIA}</td>
                    <td>{CANTON}</td>
                    <td>{TELEFONO}</td>       
                    <td>{CICLO_FACTURACION}</td>
                    <td>{EMAIL}</td>
                    <td>{FORMA_PAGO}</td>
                    <td>{PORTABILIDAD}</td>
                    <td>{OPERADORA}</td>
                    <td>{PROCEDENCIA_EQUIPO}</td>
                    <td>{PROMEDIO}</td>
                  </tr>
                 
                
        </Fragment>   
   
)

 
}
export default tablaclientes;