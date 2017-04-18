$(document).ready(function() {
	function abrirModalVentas() { 
		$('#tituloModalVentas').text("Buscar Ventas");
		$('#modal_ventas').modal('show');
	}  


	$("#devolucionEfectivo").change(function() {
		if(this.checked) {
			$("#txtDevolucionEfectivo").val(1);
		}else{
			$("#txtDevolucionEfectivo").val(0);
		}
	});
	
	if($("#estadoVenta").val() == "Anulada"){
		$("#btnConfirmarDev").prop('disabled', true );
		alertify.message('Venta Anulada');    
	}else
	if($("#estadoVenta").val() == "Dev_Parcial"){
		$("#btnConfirmarDev").prop('disabled', true );
		alertify.message('Venta con Dev. Parcial');    
	}

	$("#tablaDetalleVentas").on("click", "td", function() {
		$(this).closest('tr').find(".tdCantDevuelta").prop('disabled', false);
		$(this).closest('tr').find(".tdCantDevuelta").css("font-weight","Bold");
		$(this).closest('tr').find(".tdObservacion").prop('disabled', false);
		$(this).closest('tr').find(".tdObservacion").css("font-weight","Bold");
	});



	 $("#tablaDetalleVentas tbody td .tdCantDevuelta").blur(function() {
		var d_cant = parseInt($(this).closest('tr').find('td:eq(3)').text()) ; //capturo la cantidad
		var d_cantDev = parseInt($(this).closest('tr').find(".tdCantDevuelta").val()) ; //capturo la cantidad

		//controlamos que la cant a devolver no sea mayor qe lo que se vendió
		//tambien se controla que no se ingrese un valor negativo
		if(d_cantDev  > d_cant || d_cantDev < 0 ) {
			alertify.error('Valor fuera del rango.').delay(2);
			$(this).closest('tr').find(".tdCantDevuelta").val("");
			$(this).closest('tr').find(".tdCantDevuelta").focus();          
		}

	 });



		//script para capturar los valores de la tabla dinámica
		$(document).on("click", "#btnConfirmarDev", function(){ 

			var d_idArray = []; //array de IDs
			var d_codProdArray = []; //array de los codigos
			var d_nomProdArray = []; //array de los nombres
			var d_cantidadArray = []; //array de las cant vendidas
			var d_cantidadDevArray = []; //array de las cant devueltas
			var d_observacionDevArray = []; //array de las observaciones
			var d_preciounitArray = []; //array con los precios unitarios
			var d_subtotalArray = []; //array para los subtotales de la DEVOLUCION
			var d_total = 0; //total de la devolucion


			//variables para impuestos
			var porcentaje_imp_dec = 0;
			var porcentaje_imp = 0;
			var d_subTotNeto = 0;  
			var d_subTotImpuesto = 0;

			// Método 1//
			//recorro la tabla y extraigo los valores distintos de cero
			/*$("#tablaDetalleVentas tbody tr").each(function(e, tr) {
			  var cantidad = parseInt($('.tdCantDevuelta', tr).val());
			  //proceso solo las filas en que la cantidad es distinta de 0    
			  if(cantidad !== 0){
				 d_idArray.push($(this).find("td:eq(0)").text());      
				 d_cantidadArray.push($(this).find("td:eq(3)").text());  
				 d_cantidadDevArray.push(cantidad);
				 d_observacionDevArray.push($(this).find(".tdObservacion").val());
			  }
			});*/


			//Solo para comparar las cantidades y saber si corresponde dev parcial o total
			var cantVenArray = [];
			var cantDevArray = [];
			$("#tablaDetalleVentas tbody tr").each(function() {
				 cantVenArray.push($(this).find("td:eq(3)").text());  
				 cantDevArray.push($(this).find(".tdCantDevuelta").val());  
			});



			// Método 2//
			$('#tablaDetalleVentas tbody tr .tdCantDevuelta').filter(function(){ return this.value != 0; }).each(function() {
				var fila = $(this).closest("tr");
				d_idArray.push(fila.find("td:eq(0)").text());      
				d_codProdArray.push(fila.find("td:eq(1)").text());      
				d_nomProdArray.push(fila.find("td:eq(2)").text());      
				d_cantidadArray.push(fila.find("td:eq(3)").text());  
				d_cantidadDevArray.push(parseInt(fila.find(".tdCantDevuelta").val()));
				d_observacionDevArray.push(fila.find(".tdObservacion").val());
				d_preciounitArray.push(fila.find("td:eq(4)").text());
			});

			//multiplico cantDev por preciUnit y obtengo los subtotales de los prod devueltos
				for(var i = 0; i < d_cantidadDevArray.length; i++){
					var temp1 = d_cantidadDevArray[i] * d_preciounitArray[i];
					d_subtotalArray[i] = temp1.toFixed(2);
				}

			//obtengo el total final de la devolucion
				$.each(d_subtotalArray,function(){d_total+=parseFloat(this) || 0;});



			//prueba

					//obtengo 1.21 si el imp es del 21%
					porcentaje_imp_dec = (parseFloat($("#porc_imp").val()).toFixed(2)) / 100;
					porcentaje_imp  = 1 + porcentaje_imp_dec;

					//obtengo el precio de venta Neto
					d_subTotNeto = d_total / porcentaje_imp;

					//obtengo el impuesto de ese precio de venta
					d_subTotImpuesto = d_subTotNeto * porcentaje_imp_dec;




			//comprobamos que al menos ingresen una cantidad
			if(jQuery.isEmptyObject(d_cantidadDevArray)){
				alertify.error("Las cantidades son Nulas").delay(2);
			}else{
				/*        
				alert("Array ID: "+d_idArray+
				  " Array cant: "+d_cantidadArray+
				  " Array cant dev: "+d_cantidadDevArray+
				  " Array observacion: "+d_observacionDevArray+
				  " Array precios: "+d_preciounitArray+
					 " Array precios: "+d_subtotalArray+
					 " Total final: "+d_total);
				*/


				alertify.confirm(
				  "Devolución de Ventas",
				  "<strong>¿Confirma la Devolución?</strong>", 
				  function(){
					//Para actualizar el stock de productos

					$('#txtArrayDIdProd').val(JSON.stringify(d_idArray));
					$('#txtArrayDCantidadProdVen').val(JSON.stringify(d_cantidadArray));  
					$('#txtArrayDCantidadProdDev').val(JSON.stringify(d_cantidadDevArray));  
					$('#txtArrayDobservacion').val(JSON.stringify(d_observacionDevArray));  
					var d_total_negativo = 0;
					d_total_negativo = d_total * -1;  
					 $('#txtDtotal').val(d_total_negativo.toFixed(2));  //total negativo para tabla devoluiciones
					//$('#txtDtotal').val(d_total);  //total positivo


					//inicio - cálculo con impuestos


					$("#txtDSubTotal").val(d_subTotNeto.toFixed(2));    
					$("#txtDImpuesto").val(d_subTotImpuesto.toFixed(2));  


					//fin - cálculo con impuestos 


					//para convertir y guardar la fecha Actual 
					var fecha = $('#txtFechaActual').val();
					// convertimos la fecha de dd/mm/yyyy a yyyy/mm/dd
					var date = fecha;
					var fecha_actual = date.split("/").reverse().join("-");   

					$("#txtFechaVtaok").val(fecha_actual);

					$('#txtArrayDcodProd').val(JSON.stringify(d_codProdArray));    
					$('#txtArrayDnomProd').val(JSON.stringify(d_nomProdArray));    

					$('#txtArrayDPrecioUnit').val(JSON.stringify(d_preciounitArray));    
					$('#txtArrayDObservacion').val(JSON.stringify(d_observacionDevArray));      


					$('#cantVenArray').val(JSON.stringify(cantVenArray));          
					$('#cantDevArray').val(JSON.stringify(cantDevArray));        

					  
					//Ejecuto el boton para enviar todos los inputs del formulario  
					$("#btnDevolucionVenta").click();

					alertify.success('¡Devolución Exitosa!');
				  },
				  function(){
					alertify.error('Se canceló la Devolución');
				});

			}
		});
});	