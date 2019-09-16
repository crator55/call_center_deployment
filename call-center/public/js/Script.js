
$(function () {
  $('#example1').DataTable({
    'paging'      : true,
    'lengthChange': false,
    'pagelength'  : 100,
    'searching'   : true,
    'ordering'    : true,
    'info'        : true,
    'autoWidth'   : false,
    "scrollX": true,
    'language'    :{
      paginate:{
        next:'Siguiente',
        previous:'Anterior',
        last:'Ultimo',
        first:'Primero'
      },
      info:'Mostrando _START_ a _END_ de _TOTAL_ resultados',
      emptytable:'No hay registros',
      infoEmpty:'0 Registros',
      search:'Buscar:'
    }
  });
 
}
  );
  