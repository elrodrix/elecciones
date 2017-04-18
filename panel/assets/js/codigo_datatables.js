$(document).ready(function() { 
	 
  //-- Código para traducir datatable a español --//     
    var table = $('.tabla').DataTable({		
						"bDestroy": true,
						lengthChange: false,
						"deferRender": true,
		 				"bProcessing": true,
    					"bDeferRender": true,
						//configuro lenguaje en español
                        "language": {
                            "sProcessing":    "Procesando...",
                            "sLengthMenu":    "Mostrar _MENU_ registros",
                            "sZeroRecords":   "No se encontraron resultados",
                            "sEmptyTable":    "Ningún dato disponible en esta tabla",
                            "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                            "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
                            "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
                            "sInfoPostFix":   "",
                            "sSearch":        "Buscar:",
                            "sUrl":           "",
                            "sInfoThousands":  ",",
                            "sLoadingRecords": "Cargando...",
                            "oPaginate": {
                                "sFirst":    "Primero",
                                "sLast":    "Último",
                                "sNext":    "Siguiente",
                                "sPrevious": "Anterior"
                            },
                            "oAria": {
                                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                            }
                        },
					 
						//extension para BUTTONS
						dom: 'Bfrtip', //para ver opciones de 10, 20 o mas paginas hay que añadir letra "l"
						//configuro los buttons
						
						//botones con estilo dropdown	
						/*buttons: [
							{
								extend: 'collection',
								text: 'Enviar a...',
								className: 'btn btn-primary',
								buttons: [
									{
										text:'<i class="fa fa-file-excel-o fa-lg"></i> Exportar a Excel',
									},
									{
										text:'<i class="fa fa-file-pdf-o fa-lg"></i> Guardar como PDF',
									},
									{
										text:'<i class="fa fa-print fa-lg"></i> Imprimir',
									}
								]
							}
						]*/
						
						//botones position horizontal agrupados	
						buttons:[
							{
								extend:    'excelHtml5',
								text:      '<i class="fa fa-file-excel-o fa-lg"></i> ',
								titleAttr: 'Exportar a Excel',
								className: 'btn btn-default'
							},
							{
								extend:    'pdfHtml5',
								text:      '<i class="fa fa-file-pdf-o fa-lg"></i> ',
								titleAttr: 'Exportar a PDF',
								className: 'btn btn-default'
							},
							{
								extend:    'print',
								text:      '<i class="fa fa-print fa-lg"></i> ',
								titleAttr: 'Imprimir',
								className: 'btn btn-default'
							},
						]
					
						//codigo para scroller
						/*deferRender:    true,
						scrollY:        400,
						scrollCollapse: true,
						scroller:       true,*/
		
		
                    });
	
	
	
	//script para que funcione bien el estilo bootstrap en los buttons de datable
	//table.buttons().container().appendTo( '#example_wrapper .col-sm-6:eq(0)' );
});