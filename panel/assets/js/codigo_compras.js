$(document).ready(function() {
    //Para cambiar el puntero del mouse en las tablas que permiten seleccionar
    $("#tabla_productos tr").css('cursor', 'pointer');
    $("#tabla_proveedores tr").css('cursor', 'pointer');
    
    //-- INICIO Agregar al carrito para COMPRAS--//

    //--Definición de variables de Agregar al carrito--//

    var c_subTotal = 0;
    window.c_total = 0; //var global con el total de compras
	
	var c_num = 0;   
    var c_codigosArray = []; //array en tiempo real para los codigos
    var c_subTotArray = []; //array en tiempo real para los subtotales
	
	//array para impuestos
	var c_subTotImpuestoArray = []; //array en tiempo real para los impuestos
	var c_subtTotNetoArray = []; //array en tiempo real para subTotal neto (sin impuestos)
	
    var c_codigo;
	
	var c_porcentaje_imp = 0;
	var c_porcentaje_imp_dec = 0;
	var precioCompraNeto = 0;
	
	var c_subTotNeto = 0;
	var c_subTotImpuesto = 0;
	
    var c_subtotalR = 0; 
    
    
  $("#btnAgregarCarritoCompras").click(function(){ 
  	c_codigo = $("#txtCodigo").val();
      
    if($("#txtCodigo").val().length < 1){
        alertify.warning("Debe ingresar un producto");
        $("#buscar_producto").focus();
    }          
    else
    if($.inArray(c_codigo,c_codigosArray) != -1) {    
            alertify.error("El producto ya está en el carrito");
            $("#buscar_producto").focus();
    }
    else
    {   
        var c_fila1 = 0; //bandera para saber si el carrito tiene un producto o no
        var c_id = $("#txtId").val();
        c_codigo = $("#txtCodigo").val();
        var c_nombre = $("#txtNombre").val();
        var c_precioCompra = parseFloat($("#txtPrecioCompra").val()).toFixed(2);
        var c_stock = parseFloat($("#txtStock").val());
        var c_cantidad = parseFloat($("#txtCantidad").val());

        c_desc = parseFloat($("#txtDescuentoCompra").val()).toFixed(2) / 100;

        c_precioConDesc = (c_precioCompra - (c_precioCompra * c_desc));

        c_subTotal = c_cantidad * c_precioConDesc;
		
		
		//inicio - cálculo con impuestos

			//obtengo 1.21 si el imp es del 21%
			c_porcentaje_imp_dec = (parseFloat($("#porcentaje_imp").val()).toFixed(2)) / 100;
			c_porcentaje_imp  = 1 + c_porcentaje_imp_dec;

			//obtengo el precio de venta Neto
			precioCompraNeto = c_subTotal / c_porcentaje_imp;

			//obtengo el impuesto de ese precio de venta
			impuesto_PrecioCompra = precioCompraNeto * c_porcentaje_imp_dec;

			//obtengo los subtotales
			c_subTotImpuesto = c_subTotImpuesto + impuesto_PrecioCompra;
			c_subTotNeto = c_subTotNeto + precioCompraNeto;

			
		//fin - cálculo con impuestos
		
        
        c_total = c_total + c_subTotal;    

        //obtenemos el nro de filas de la tabla HTML
        var n_celdas = $('tr:last td', $("#tablaCompras")).length;

        c_num = c_num + 1;
        if(c_fila1 = 0) {
            $('#tablaCompras > tbody:last-child').append('<td style="display:none;">'+c_id+'</td><td>'+c_codigo+'</td><td>'+c_nombre+'</td><td>'+c_cantidad+'</td><td>'+c_precioCompra+'</td><td>'+c_desc.toFixed(2)+'</td><td>'+impuesto_PrecioCompra.toFixed(2)+'</td><td>'+precioCompraNeto.toFixed(2)+'</td><td>'+c_subTotal.toFixed(2)+'</td><td><button class="removerCarritoCompras btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span></button></td>');
            c_fila1 = 1;
            alertify.success('¡Producto Agregado!').delay(2);
        }
        if(c_fila1 = 1){
            $('#tablaCompras > tbody:last-child').append('<tr><td style="display:none;">'+c_id+'</td><td>'+c_codigo+'</td><td>'+c_nombre+'</td><td>'+c_cantidad+'</td><td>'+c_precioCompra+'</td><td>'+c_desc.toFixed(2)+'</td><td>'+impuesto_PrecioCompra.toFixed(2)+'</td><td>'+precioCompraNeto.toFixed(2)+'</td><td><strong>'+c_subTotal.toFixed(2)+'</strong></td><td><button class="removerCarritoCompras btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span></button></td></tr>');
            alertify.success('¡Producto Agregado!').delay(2);
        }

 
        //capturo los valores de los productos que estan en el carrito en tiempo real 
        var c_filaActual = $('#tablaCompras').find('tbody').find('tr');
        for (var i = 0; i < c_filaActual.length; i++) {
            var c_codigoCapturado = $(c_filaActual[i]).find('td:eq(1)').html();
			//nuevo
			var c_impuestoCapturado = parseFloat($(c_filaActual[i]).find('td:eq(6)').text());
			var precioCompraNetoCapturado = parseFloat($(c_filaActual[i]).find('td:eq(7)').text());
            var c_subTotCapturado = parseFloat($(c_filaActual[i]).find('td:eq(8)').text());
        }
		
		//guardo los valores capturados en sus respectivos array
        c_codigosArray.push(c_codigoCapturado);
		
		c_subTotImpuestoArray.push(c_impuestoCapturado);
		c_subtTotNetoArray.push(precioCompraNetoCapturado);
		
        c_subTotArray.push(c_subTotCapturado);
		
		//mostramos los totales de impuestos
		$('#txtImpuestoCompra').val(c_subTotImpuesto.toFixed(2)); 
		$('#txtSubTotalCompra').val(c_subTotNeto.toFixed(2));
		
        //para guardar con 2 decimales (.toFixed(2))
        $('#txtTotalCompra').val(c_total.toFixed(2));

        //limpia los campos
        $('#txtCodigo').val('');
        $('#txtNombre').val('');
        
		$('#txtPrecioCompra').val('');
		$("#txtPrecioCompra").prop('disabled', true);
		
        $('#txtStock').val('');
        $('#txtCantidad').val(1);
        $('#txtCantidad').prop('disabled', true);
        $('#txtDescuentoCompra').val(0);
        $('#txtDescuentoCompra').prop('disabled', true);
        $('#busca').focus();

    }     
  });

//-- FIN Agregar al carrito para COMPRAS--//
    
	
	
    // Evento que selecciona la fila y la elimina 
    $(document).on("click", ".removerCarritoCompras", function(){        
        
        //elimino el codigo del producto del array
        var c_codigo_r = $(this).closest('tr').find('td:eq(1)').text(); //capturo el codigo
        c_codigosArray.splice($.inArray(c_codigo_r, c_codigosArray),1); //elimino el codigo
        
		//elimino el impuesto del array
		var c_subtotalImpuestoR = parseFloat($(this).closest('tr').find('td:eq(6)').text());//capturo
		c_subTotImpuestoArray.splice($.inArray(c_subtotalImpuestoR, c_subTotImpuestoArray),1);//elimino
		
		//elimino el subtotal NETO del array
		var c_subtotalNetoR = parseFloat($(this).closest('tr').find('td:eq(7)').text());//capturo
		c_subtTotNetoArray.splice($.inArray(c_subtotalNetoR, c_subtTotNetoArray),1);//elimino
		
        //elimino el subtotal del array
        var c_subtotalR = parseFloat($(this).closest('tr').find('td:eq(8)').text());
        c_subTotArray.splice($.inArray(c_subtotalR, c_subTotArray),1);
        
        if(c_subTotArray.length == 0){
            c_total = 0;
			//nuevo de impuestos
			c_subTotImpuesto = 0;
			c_subTotNeto = 0;
			
			$('#txtImpuestoCompra').val(c_subTotImpuesto.toFixed(2)); 
			$('#txtSubTotalCompra').val(c_subTotNeto.toFixed(2));
            $('#txtTotalCompra').val(c_total.toFixed(2));
        }else{
			//calculo del nuevo total cada vez q se elimina un producto del carrito en tiempo real
			var c_subTotImpuestoR = 0;
			var c_subTotNetoR = 0;
            var c_totalR = 0;
			
            for (var i = 0; i < c_subTotArray.length; i++) {
				c_subTotImpuestoR = c_subTotImpuestoR + c_subTotImpuestoArray[i];
				c_subTotNetoR = c_subTotNetoR + c_subtTotNetoArray[i];
                c_totalR = c_totalR + c_subTotArray[i];
            }
			
			c_subTotImpuesto = c_subTotImpuestoR;
            $('#txtImpuestoCompra').val(c_subTotImpuesto.toFixed(2));
			
			c_subTotNeto = c_subTotNetoR;
            $('#txtSubTotalCompra').val(c_subTotNeto.toFixed(2));
			
            c_total = c_totalR;
            $('#txtTotalCompra').val(c_total.toFixed(2));
        }
        alertify.error('Producto removido').delay(2);
        //captura la fila seleccionada y la elimina
        $(this).closest('tr').remove();
    });
    
	
	
	//*** Inicio PRODUCTOS ***// 
    //Para abrir la ventana modal BUSCAR PRODUCTOS
	 $("#buscar_producto").click(function(){
        $('#tituloModalProductos').text("Buscar Productos");
           $('#modal_productos').modal('show');
    });
        

    //Activa la extension SELECT para seleccionar una fila en PRODUCTOS
	 tableProductos = $('#tabla_productos').DataTable( {
        select: true, //activa para que se pueda seleccionar
		keys: true,	//activa para que las celdas se marquen	usando el teclado
		
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
                        }
		 
    });
	
	
	//codigo para navegar la tabla por filas usando el teclado
	tableProductos.on('key-focus', function (e, datatable, cell) {
      datatable.rows().deselect();
      datatable.row( cell.index().row ).select();
    });
	
	
	

    //Selecciona producto
    $(document).on("click", "#btn_seleccionar_producto", function(){
        //captura la fila seleccionada y la elimina
        
        var_id = tableProductos.cell('.selected', 0).data();
        var_codigo = tableProductos.cell('.selected', 1).data();
        var_nombre = tableProductos.cell('.selected', 2).data();
        var_precioCompra = tableProductos.cell('.selected', 3).data();
        var_stock = tableProductos.cell('.selected', 4).data();
        
        $("#txtId").val(var_id);
        $("#txtCodigo").val(var_codigo);
        $("#txtNombre").val(var_nombre);
        
		$("#txtPrecioCompra").val(var_precioCompra);
		$("#txtPrecioCompra").prop('disabled', false);
		
        $("#txtStock").val(var_stock);
		
        $('#txtCantidad').prop('disabled', false);
        $('#txtDescuentoCompra').prop('disabled', false);
        $('#modal_productos').modal('hide'); 
    });
    
	
	$("#modal_productos").on("hidden.bs.modal",function(e){
	   setTimeout(function(){
		  $('#btnAgregarCarritoCompras').focus();         
	   },50);  
	});
	
    //*** Fin PRODUCTOS ***// 



    //*** Inicio PROVEEDORES ***//
    //Para abrir la ventana modal BUSCAR Proveedores
	
	 $("#btnBuscarProveedor").click(function(){
        $('#tituloModal').text("Buscar Proveedores");
        $('#modal_proveedores').modal('show');
    });
	
    //Activa la extension SELECT para seleccionar una fila en PROVEEDORES
    tableProveedores = $('#tabla_proveedores').DataTable( {
        select: true,
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
                        }
    });

    //Selecciona razón social y cuit del proveedor
    $(document).on("click", "#btnSeleccionarProveedor", function(){
        //captura la fila seleccionada 
        v_idProveedor = tableProveedores.cell('.selected', 0).data();
        v_razon_social = tableProveedores.cell('.selected', 1).data();
        v_cuit_proveedor = tableProveedores.cell('.selected', 2).data();
		v_condTribuP = tableProveedores.cell('.selected', 5).data();

        $("#idProveedor").val(v_idProveedor);
        $("#razonSocial").val(v_razon_social);
        $("#cuitProveedor").val(v_cuit_proveedor);
		$("#txtCondTribuP").val(v_condTribuP);
        
        $('#modal_proveedores').modal('hide'); 
    });
    
    //*** Fin PROVEEDORES ***//



	//--  INICIO FORMAS DE PAGO --//

    

	//-- INICIO Calculo de vueltos --//
    c_vuelto = 0;

    $("#importeRecibidoC").blur(function() {
        if($("#importeRecibidoC").val() != "0"){
            c_vuelto =  ($("#importeRecibidoC").val() - $("#totCompraConDesc").val());            
            $("#vueltoC").val(c_vuelto.toFixed(2));      
        }    
    });
	//-- FIN Calculo de vueltos --//

 	//-- INICIO DESCUENTOS --//
    var c_descGral = 0;
    var c_totalCompra = 0;
    var c_totCompraConDesc = 0;
    var c_calculo= 0;
	
	//nuevo para impuestos
	var c_totImpConDesc = 0;
	var c_subTotNetoConDesc = 0;

    $("#btnCalculaDescGralCompra").click(function(){
            c_descGral = $("#descGralCompra").val(); 
            c_totalCompra = parseFloat($("#txtTotalCompra").val());        
            c_totCompraConDesc = c_totalCompra - ((c_totalCompra * c_descGral) / 100);
            $("#totCompraConDesc").val(c_totCompraConDesc.toFixed(2));
			
			//nuevo para impuestos
			 c_subTotNetoConDesc = c_totCompraConDesc / c_porcentaje_imp; //precio de compra neto con desc
			 c_totImpConDesc = 	c_subTotNetoConDesc * c_porcentaje_imp_dec;		
    });

    //-- FIN DESCUENTOS --//
	
 	$("#btnVolverPantalla1C").click(function(){
        c_reiniciarFormasPago();
		$("#totCompraConDesc").val(c_total.toFixed(2));
        $(".pantalla2").hide();
        $(".pantalla1").show();
    });

    //var efectivoCant = 0.00;
    //var debitoCant = 0.00;
    //var creditoCant = 0.00;
    var c_idFormaPago = 0;
    
    function c_reiniciarFormasPago(){
        c_idFormaPago = 0;
        $('#optionEfectivo').prop('checked', false);
        $('#optionDebito').prop('checked', false);
        $('#optionCredito').prop('checked', false);
		
        $("#efectivoCantCompra").val(0.00);
        $("#debitoCantCompra").val(0.00).prop('disabled', true);
        $("#creditoCantCompra").val(0.00);
		
        $("#importeRecibidoC").val(0.00);
        $("#vueltoC").val(0.00); 
        
		//reinicio comprobantes
		$('select[name="txtComprobante"]').val('1');
		
		//reinicio select de tarjetas
		$('#tarjetaDebitoC option:first-child').prop("selected", true);
        $('#tarjetaCreditoC option:first-child').prop("selected", true);
		
        $('#comprobanteCompra option:selected').prop("selected", false); 
        $("#txtNroCompProv").val(""); //nro comprobante provisto por el proveedor
		
		//reinicio cuotas
        $("#cuotasC").val(1);
        
        //descuentos
        $("#descGralCompra").val(0.00);
        
    }

    $("#btnFormaDePagoCompras").click(function(){ 
			c_reiniciarFormasPago();
            $("#modal_pagos").modal("show");
            $("#modal_pagos").draggable({ handle: ".modal-header" });
            $("#btnVolverPantalla1C").click();
            $("#totCompraConDesc").val($("#txtTotalCompra").val());
            $("#btnContinuarPantalla2C").click(function(){   
                
				 $("#btnCalculaDescGralCompra").click();//ejecuto por si no se hizo antes	
				
                //Evalúo todas las combinaciones posibles con 3 opciones 
                
                //Solo EFECTIVO
                if( $('#optionEfectivo').prop('checked') && !$('#optionDebito').prop('checked') && !$('#optionCredito').prop('checked')) {
                    $(".pantalla1").hide();
                    $(".pantalla2").show();
                    $("#efectivoOpcion").show();
                    $("#debitoOpcion").hide();
                    $("#creditoOpcion").hide();
					$("#div_calculo").show();
                    
                    $("#efectivoCantCompra").val(c_totCompraConDesc.toFixed(2)).prop('disabled', true);
                    
                    c_idFormaPago = 1;
                }else
                
                //Solo DEBITO    
                if( !$('#optionEfectivo').prop('checked') && $('#optionDebito').prop('checked') && !$('#optionCredito').prop('checked')) {
                    $(".pantalla1").hide();
                    $(".pantalla2").show();
                    
                    $("#efectivoOpcion").hide();
                    $("#debitoOpcion").show();
                    $("#creditoOpcion").hide();
                    $("#div_calculo").hide();
                                       
                    $("#debitoCantCompra").val(c_totCompraConDesc.toFixed(2)).prop('disabled', true);
					
                    c_idFormaPago = 2;            
                }else    
                
                //Solo CREDITO       
                if( !$('#optionEfectivo').prop('checked') && !$('#optionDebito').prop('checked') && $('#optionCredito').prop('checked')) {
                    $(".pantalla1").hide();
                    $(".pantalla2").show();                    
                    $("#efectivoOpcion").hide();
                    $("#debitoOpcion").hide();
                    $("#creditoOpcion").show();
                    $("#div_calculo").hide();
                    
                    $("#creditoCantCompra").val(c_totCompraConDesc.toFixed(2)).prop('disabled', true);
					
                    c_idFormaPago = 3;
                }else
                    
                //Efectivo y Débito
                if( $('#optionEfectivo').prop('checked') && $('#optionDebito').prop('checked') && !$('#optionCredito').prop('checked')) {
                    $(".pantalla1").hide();
                    $(".pantalla2").show();                    
                    $("#efectivoOpcion").show();
                    $("#debitoOpcion").show();
                    $("#creditoOpcion").hide();                    
                    $("#div_calculo").hide();
                    
                    $("#efectivoCantCompra").val(c_totCompraConDesc.toFixed(2)).prop('disabled', false);
					$("#efectivoCantCompra").focus();
					$("#debitoCantCompra").val(0.00);
                    
					
					$("#efectivoCantCompra").focusout(function() {
						var n1, n2, tot = 0;
					  	//capturo y los paso a numero
					  	n1 = parseFloat($("#efectivoCantCompra").val());
					  	n2 = parseFloat($("#debitoCantCompra").val()); 
						tot = n1 + n2; //sumo los numeros	
						if(tot  > c_totCompraConDesc){
							$("#efectivoCantCompra").val(c_totCompraConDesc.toFixed(2));
                        	$("#debitoCantCompra").val(0.00);
						}else{
							var temp1 = 0;
							temp1 = c_totCompraConDesc - n1;    
							$("#debitoCantCompra").val(temp1.toFixed(2));     
						}
                    });
                    
                    c_idFormaPago = 4;
                }else

                //Efectivo y Credito    
                if ($('#optionEfectivo').prop('checked') && $('#optionCredito').prop('checked') && !$('#optionDebito').prop('checked')) {
                    $(".pantalla1").hide();
                    $(".pantalla2").show();                    
                    $("#efectivoOpcion").show();
                    $("#debitoOpcion").hide();
                    $("#creditoOpcion").show();
                    $("#div_calculo").hide();
                    
                    $("#efectivoCantCompra").val(c_totCompraConDesc.toFixed(2)).prop('disabled', false);
					 $("#efectivoCantCompra").focus();
                    $("#creditoCantCompra").val(0.00);
					
                   
					$("#efectivoCantCompra").focusout(function() {
						var n1, n3, tot = 0;
					  	//capturo y los paso a numero
					  	n1 = parseFloat($("#efectivoCantCompra").val());
					  	n3 = parseFloat($("#creditoCantCompra").val()); 
						tot = n1 + n3; //sumo los numeros	
						if(tot  > c_totCompraConDesc){
							$("#efectivoCantCompra").val(c_totCompraConDesc.toFixed(2));
                        	$("#creditoCantCompra").val(0.00);
						}else{
							var temp1 = 0;
							temp1 = c_totCompraConDesc - n1;    
							$("#creditoCantCompra").val(temp1.toFixed(2));     
						}
                    });
					
                    c_idFormaPago = 5;
                }else

                //Debito y Credito    
                if ( $('#optionDebito').prop('checked') && $('#optionCredito').prop('checked') && !$('#optionEfectivo').prop('checked')) {
                    $(".pantalla1").hide();
                    $(".pantalla2").show();                    
                    $("#efectivoOpcion").hide();
                    $("#debitoOpcion").show();
                    $("#creditoOpcion").show();
                    $("#div_calculo").hide();
                    
                    $("#debitoCantCompra").val(c_totCompraConDesc.toFixed(2)).prop('disabled', false);
					$("#debitoCantCompra").focus();
                    $("#creditoCantCompra").val(0.00);
					
					
					$("#debitoCantCompra").focusout(function() {
						var n2, n3, tot = 0;
					  	//capturo y los paso a numero
					  	n2 = parseFloat($("#debitoCantCompra").val());
					  	n3 = parseFloat($("#creditoCantCompra").val()); 
						tot = n2 + n3; //sumo los numeros	
						if(tot  > c_totCompraConDesc){
							$("#debitoCantCompra").val(c_totCompraConDesc.toFixed(2));
                      		$("#creditoCantCompra").val(0.00);
						}else{
							var temp1 = 0;
							temp1 = c_totCompraConDesc - n2;    
							$("#creditoCantCompra").val(temp1.toFixed(2));     
						}
                    });
                    
                    c_idFormaPago = 6;
                    
                }else

                //Efectivo, Debito y Credito    
                if ( $('#optionEfectivo').prop('checked') && $('#optionDebito').prop('checked') && $('#optionCredito').prop('checked')) {
                    $(".pantalla1").hide();
                    $(".pantalla2").show();                    
                    $("#efectivoOpcion").show();
                    $("#debitoOpcion").show();
                    $("#creditoOpcion").show();
                    $("#div_calculo").hide();
                    
                    $("#efectivoCantCompra").val(c_totCompraConDesc.toFixed(2)).prop('disabled', false);
					$("#efectivoCantCompra").focus();
                    $("#debitoCantCompra").val(0.00).prop('disabled', false);;                    
					$("#creditoCantCompra").val(0.00);
                   
					
					$("#efectivoCantCompra").focusout(function() {	
					   var n1, n2, n3, tot = 0;
					  //capturo y los paso a numero
					  n1 = parseFloat($("#efectivoCantCompra").val());
					  n2 = parseFloat($("#debitoCantCompra").val()); 
					  n3 = parseFloat($("#creditoCantCompra").val());
					  tot = n1 + n2 + n3; //sumo los numeros
					  //alert("n1 ="+n1+" n2 ="+n2+" n3 = "+n3+" tot = "+tot+" vta tot ="+v_totVtaConDesc);
					
					  if(parseFloat(tot.toFixed(2)) > parseFloat(c_totCompraConDesc.toFixed(2))){
						  $("#efectivoCantCompra").val(c_totCompraConDesc.toFixed(2));
						  $("#debitoCantCompra").val(0.00);                    
						  $("#creditoCantCompra").val(0.00);
					   }else{
							var temp1 = 0;
							temp1 = c_totCompraConDesc - (n1 + n3);    
							$("#debitoCantCompra").val(temp1.toFixed(2));   	
					   }
					});
					
					
					$("#debitoCantCompra").focusout(function() {	
					   var n1, n2, n3, tot = 0;
					  //capturo y los paso a numero
					  n1 = parseFloat($("#efectivoCantCompra").val());
					  n2 = parseFloat($("#debitoCantCompra").val()); 
					  n3 = parseFloat($("#creditoCantCompra").val());
					  tot = n1 + n2 + n3; //sumo los numeros
					   if(parseFloat(tot.toFixed(2)) > parseFloat(c_totCompraConDesc.toFixed(2))){
							$("#efectivoCantCompra").val(c_totCompraConDesc.toFixed(2));
						  $("#debitoCantCompra").val(0.00);                    
						  $("#creditoCantCompra").val(0.00);
					   }else{
						   var temp1 = 0;
							temp1 = c_totCompraConDesc - (n1 + n2);    
							$("#creditoCantCompra").val(temp1.toFixed(2));   	
					   }
					});
					
                    c_idFormaPago = 7;
                 }
            });
    });
 

    //--Inicio COMPROBANTE  --//
    var idComprobante = $('select#txtComprobanteC').val();
    $('#txtIdComprobanteCompra').val(idComprobante);
    
	//obtengo el texto de la opción (ej, factura, recibo)
	var descComprobanteC = $('select#txtComprobanteC').find("option:selected").text();
	descComprobanteC = jQuery.trim(descComprobanteC); //quito los espacios en blanco
	$('#prevComprobanteC').val(descComprobanteC);

	//Obtener el valor "value" de un campo de selección “select” despues del evento "change"
    $('select#txtComprobanteC').on('change',function(){
        //obtengo el value del select (ej el id 1, 2, etc)
        idComprobante = $(this).val();
        $('#txtIdComprobanteCompra').val(idComprobante);
        
		//obtengo el texto de la opción (ej, factura, recibo)
		descComprobanteC = $(this).find("option:selected").text();
		descComprobanteC = jQuery.trim(descComprobanteC); //quito los espacios en blanco
		$('#prevComprobanteC').val(descComprobanteC);
        
    });
    //--Fin COMPROBANTE  --//



     //Finalmente aplico la forma de pago y descuento global
        $("#btnAplicarFormaPagoC").click(function(){
            if(c_idFormaPago !== 0){
                c_tipoComprobante = $('#comprobanteCompra option:selected').val(); 
                c_nroCompProv = $("#txtNroCompProv").val();
				
				//selecciona el value que figura en el option del select
				c_tarjetaDebito = $('#tarjetaDebitoC option:selected').val(); 
                c_tarjetaCredito = $('#tarjetaCreditoC option:selected').val(); 
				
                c_pagoEfectivo = parseFloat($("#efectivoCantCompra").val()).toFixed(2);
                c_pagoDebito = parseFloat($("#debitoCantCompra").val()).toFixed(2);
                c_pagoCredito = parseFloat($("#creditoCantCompra").val()).toFixed(2);
                c_cuotas = parseInt($("#cuotasC").val());
                
                $("#frmPagosCompras").show();
                //paso los valores
                switch(c_idFormaPago) {
                    case 1:
                        $("#prevIdFpC").val(1);
                        $("#prevFormaPagoC").val("Efectivo");
                        break;
                    case 2:
                        $("#prevIdFpC").val(2);
                       $("#prevFormaPagoC").val("Débito");
                       break;
                    case 3:
                        $("#prevIdFpC").val(3);
                       $("#prevFormaPagoC").val("Crédito");
                       break;    
                    case 4:
                        $("#prevIdFpC").val(4);
                        $("#prevFormaPagoC").val("Efectivo-Débito");
                        break;
                    case 5:
                        $("#prevIdFpC").val(5);
                       $("#prevFormaPagoC").val("Efectivo-Crédito");
                       break;
                    case 6:
                        $("#prevIdFpC").val(6);
                       $("#prevFormaPagoC").val("Débito-Crédito");
                       break;        
                    case 7:
                        $("#prevIdFpC").val(7);
                       $("#prevFormaPagoC").val("Efectivo-Débito-Crédito");
                       break;            
                }  
                
                $("#prevTDnombreC").val(c_tarjetaDebito);
                $("#prevTCnombreC").val(c_tarjetaCredito);
                $("#prevCantCuotasC").val(c_cuotas);
                
                $("#prevNroCompProvC").val(c_nroCompProv);
				
                $("#prevEfectivoC").val(c_pagoEfectivo);
                $("#prevTDC").val(c_pagoDebito);
                $("#prevTCC").val(c_pagoCredito);
                
                $("#prevDescC").val(c_descGral); 
                $("#prevDescGlobalC").val(c_totCompraConDesc.toFixed(2));
                
                c_reiniciarFormasPago();
                $("#btnVolverPantalla1C").click();
                $("#modal_pagos").modal("hide");
                $("#btnFormaDePagoCompras").hide();
				
				//deshabilito los botones que funcionan en la venta
                $("#btnAgregarCarritoCompras").prop('disabled', true);
                $('#tablaCompras > tbody > tr > td > .removerCarritoCompras').prop('disabled', true);
				
				//habilito el boton de registrar VENTA
				$('#btnRegistrarCompra').prop('disabled', false); 
				$("html, body").animate({ scrollTop: 0 }, "slow"); //hago un scroll hasta arriba
				$('#btnRegistrarCompra').focus();
				
				$("#txtImpuestoCompra").val(c_totImpConDesc.toFixed(2));
				$("#txtSubTotalCompra").val(c_subTotNetoConDesc.toFixed(2));
				$("#txtTotalCompra").val($("#prevDescGlobalC").val());
            }    
        });
   
	
		//btn cancela el pago y cierra el formulario
        $("#btnCancelarFormaPagoCompras").click(function(){
            //limpio los campos
            //$("#btnConfirmarFormaPagoCompras").removeClass('disabled');
            $("#btnFormaDePagoCompras").show();
            $("#frmPagosCompras").hide();
            $('#btnRegistrarCompra').prop('disabled', true);
			
			//dejo los subtotales de impuesto y neto con valores sin decuentos
			$('#txtImpuestoCompra').val(c_subTotImpuesto.toFixed(2)); 
			$('#txtSubTotalCompra').val(c_subTotNeto.toFixed(2));
			
			//dejo el total de la compra sin el descuento, en su estado normal
			$("#txtTotalCompra").val(c_totalCompra.toFixed(2));
            
			//habilito los botones que funcionan en la venta
            $("#btnAgregarCarritoCompras").prop('disabled', false);
            $('#tablaCompras > tbody > tr > td > .removerCarritoCompras').prop('disabled', false);
        });

    //--  FIN FORMAS DE PAGO --//





   //INICIO //-- Registrar COMPRA - Validación --//
    
    $("#btnRegistrarCompra").click(function(){
       idUsuario  = $('#idUsuario').val();     
       idProveedor  = $('#idProveedor').val();   
       nroCompra  = $('#txtNroCompra').val();   

       tipoPago = $('#pago option:selected').val();
        
       //inicio - nuevo para tipo de pago
        if (tipoPago == "Credito"){
            c_cuotas = parseInt($("#cuotasC").val());
        }else{
            //si es efectivo o debito es un (1) solo pago
            c_cuotas = 1;
        }
       //fin    
        
       
       var fecha = $('#txtFechaActual').val();
        // convertimos la fecha de dd/mm/yyyy a yyyy/mm/dd
            var date = fecha;
            var c_fecha_actual = date.split("/").reverse().join("-");  
       
       
       //Obtenemos la cantidad de productos en el carrito
        var c_rowCount = $('#tablaCompras tbody tr').length; //se resta 1 porque es la fila de encabezado
       
       //Obtenemos todos los IDs de los productos en el carrito y lo guardamos en el array c_idArray[]
        var c_idArray = [];
	    var c_codArray = [];
		var c_nombresArray = [];	
		var c_cantidadArray = [];
		var precioCompraArray = [];
		var c_descuentoArray = [];
		var c_subTotalArray = [];
		
       $("#tablaCompras tbody tr").each(function(){
		   c_idArray.push($(this).find("td:eq(0)").text());
		   c_codArray.push($(this).find("td:eq(1)").text());   
		   c_nombresArray.push($(this).find("td:eq(2)").text());
		   c_cantidadArray.push($(this).find("td:eq(3)").text());
		   precioCompraArray.push($(this).find("td:eq(4)").text());
		   c_descuentoArray.push($(this).find("td:eq(5)").text());   
		   c_subTotalArray.push($(this).find("td:eq(8)").text());
        });
       
       
        
        
        //controlamos que la Compra no sea 0
        if(c_totCompraConDesc.toFixed(2) == 0){
            alertify.warning("La Compra no puede ser igual a 0");
        }else{ 
            alertify.confirm(
               
               "<strong>¿Confirma la Compra?</strong>", 
               "<br> Total de la Compra: "+ c_totCompraConDesc.toFixed(2),
               
              function(){
                //Para tabla COMPRAS  
                $("#txtIdUsuario").val(idUsuario);
                $("#txtIdProveedor").val(idProveedor);
                $("#txtNroCompraOk").val(nroCompra);
                $("#txtTipoComprobanteCompra").val(c_tipoComprobante);
                $("#txtNroComprobanteCompra").val(c_nroCompProv);
                  
                $("#txtDescC").val(c_descGral);
                  
				$("#txtImpuestoCompraOk").val(c_subTotImpuesto.toFixed(2));
				$("#txtSubTotalCompraOk").val(c_subTotNeto.toFixed(2));
				  
                $("#txtTotalCompraOk").val(c_totCompraConDesc.toFixed(2));
                $("#txtFechaActualOk").val(c_fecha_actual);
                
                
                //Para tabla DETALLECOMPRA
                  
                $('#txtArrayIdProd').val(JSON.stringify(c_idArray));
                $('#txtArrayCodxProd').val(JSON.stringify(c_codArray));
                $('#txtArrayNomxProd').val(JSON.stringify(c_nombresArray));
                $('#txtArrayCantxProd').val(JSON.stringify(c_cantidadArray));
                $('#txtArrayDescxProd').val(JSON.stringify(c_descuentoArray));
                $('#txtArrayPrecioCompraxProd').val(JSON.stringify(precioCompraArray));
                $('#txtArraysubTotalxProd').val(JSON.stringify(c_subTotalArray));
                $('#txtRowCount').val(c_rowCount);
                
                  
                //para tabla PAGOS
                
                $("#txtIdFormaPagoC").val($("#prevIdFpC").val());
                $("#txtCuotasC").val($("#prevCantCuotasC").val());
                
                $("#txtPagoEfectivoC").val(c_pagoEfectivo);
                $("#txtPagoDebitoC").val(c_pagoDebito);
                $("#txtPagoCreditoC").val(c_pagoCredito);
                
                $("#txtTarjetaDebitoC").val(c_tarjetaDebito);
                $("#txtTarjetaCreditoC").val(c_tarjetaCredito);
                  
				//habilito los botones que funcionan en la compra
                $("#btnAgregarCarritoCompras").prop('disabled', false);
                $('#tablaCompras > tbody > tr > td > .removerCarritoCompras').prop('disabled', false);  
                  
                //Ejecuto el boton para enviar todos los inputs del form compras  
                $("#btnCompra").click();
                $('#txtTotalCompra').val(0.00);
                  
                alertify.success('¡Compra Exitosa!');
              },
              function(){
                alertify.error('Se canceló la Compra');
				//dejo los subtotales de impuesto y neto con valores sin decuentos
				$('#txtImpuestoCompra').val(c_subTotImpuesto.toFixed(2)); 
				$('#txtSubTotalCompra').val(c_subTotNeto.toFixed(2));

				//dejo el total de la venta sin el descuento, en su estado normal
				$("#txtTotalCompra").val(c_total.toFixed(2));  
				  
              });
        }
            
    });
    //FIN //-- Registrar COMPRA - Validación --//
});      