$(document).ready(function() { 
	var tipoFlujo = 0;
	
	//Para abrir la ventana modal Ingresos y Egresos
	$("#btnEgreso").click(function(){
		$("#cabecera_modal").css( "background-color", "#d9534f");
		$("#cabecera_modal").css( "color", "white" );
		$('#titulo_modal_flujos').text("Egreso de Dinero");
		$("#importeFlujo").val("").focus();
		$("#descripcionFlujo").val("");
        $('#modal_flujos').modal('show');
		tipoFlujo = 0;
	});
	
	//Para abrir la ventana modal Ingresos y Egresos
	$("#btnIngreso").click(function(){
		$("#cabecera_modal").css( "background-color", "#5cb85c");
		$("#cabecera_modal").css( "color", "white" );
		$('#titulo_modal_flujos').text("Ingreso de Dinero");
		$("#importeFlujo").val("").focus();
		$("#descripcionFlujo").val("");
        $('#modal_flujos').modal('show');	
		tipoFlujo = 1;
	});
   
	 
	var importeFlujo = 0;
	var descripcionFlujo;
	
	var fecha;
	var descripcion;
	var entrada;
	var salida;
	var saldoActual;
	
	var t = $('#tablaFlujos').DataTable(); //creo una varible para usar el row.add()

	//BTN busca enviar flujo de cajas con ajax
	$("#btnEnviarFlujo").click(function(){ 
		if ($("#descripcionFlujo").val() == ""){
			alertify.warning("Ingrese una descripción");
			//$("#importeFlujo").focus();
		}
		
		else{
			importeFlujo = parseFloat($("#importeFlujo").val()).toFixed(2);		
			descripcionFlujo = $("#descripcionFlujo").val();		

			
			 $.ajax({
			  url: "libreria/ORM/flujoDeCajas.php",
			  type: "POST",
			  datatype:"json",    
			  data:  {tipoFlujo:tipoFlujo ,importeFlujo:importeFlujo, descripcionFlujo: descripcionFlujo},    
			  success: function(data) {
					//recibo el json desde PHP y lo parseo	
				    //console.log(data);
					var datos = JSON.parse(data); 
				  	
				  	id = datos[0].id;
				  	fecha = datos[0].fecha;
					descripcion = datos[0].descripcion;	
				   	entrada = datos[0].entrada;	
				    salida = datos[0].salida;	
				    saldoActual = datos[0].saldoActual;	
				  
					t.row.add( [
						id,
						fecha,
						descripcion,
						entrada.toFixed(2),
						salida.toFixed(2),
						saldoActual.toFixed(2)
						//'<button class="btn btn-primary btn-sm" data-toggle="tooltip" title="Ver detalle"><span class="glyphicon glyphicon-search"></span></button>'
					] ).draw();
			   }
			});
		
		$('#modal_flujos').modal('hide');
		}
		
	});
	
	
}); 