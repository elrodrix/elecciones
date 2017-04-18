$(document).ready(function() {

	window.v_total = 0; //var global con el total de las ventas

	$('#btnBuscarPaciente').click(function(){
		//alert($('input:text[name=txtBuscarApellido]').val());
			
		$('#tblPaciente tbody').html(''); //limpio contenido tabla
		var v_ape = $("#txtBuscarApellido").val();

		$.post(baseurl+"cexpediente/buscarApePaciente", {texto:v_ape},
			function(data){
				var obj = JSON.parse(data);
				var output = '';
				if(obj != null){
					$.each(obj, function(i,item){
						output +=
							'<tr>' + 
							'	<td>'+item.dni+'</td>'+
							'	<td>'+item.apellido+'</td>'+
							'	<td>'+item.nombre+'</td>'+
							'	<td><button id="btnSelecPaciente" class="btn btn-success btn-circle" onclick="selPaciente(\''+item.dni+'\',\''+item.apellido+'\',\''+item.nombre+'\',\''+item.idobrasocial+'\',\''+item.obrasocial+'\',\''+item.idseguro+'\',\''+item.seguro+'\');" data-dismiss="modal"><i class="fa fa-check"></i></button></td>'+
							'</tr>';
					});
					$('#tblPaciente > tbody:last-child').append(output);
					$('#modalSelecPaciente').modal();
				
				}else{
					$('#modalSinResultado').modal();
				}
		}); 
	});


	//----BUSCAR DNI VPACIENTE--->
	$('#bntSelectDni').click(function(){

		var v_dni = $("#txtDni").val();

		if($('#txtDni').val().length > 1){

			$.post(baseurl+"cpaciente/buscarDniPaciente", {texto:v_dni},
				function(data){
					var obj = JSON.parse(data);
					if(obj != null){
						alertify.confirm(
							"<strong>Alta de Paciente</strong>",
							"<p>¿Desea agregar Paciente?</p>",
							function(){
								alertify.success('¡Paciente Agregado!');

								setTimeout(function(){
									$('#btnGuardarPaciente').click();
								}, 2000);
																
							},
							function(){
								alertify.error('Registro Cancelado');
							});
						
					}else{
						alertify.alert(
							"<strong>ALERTA!</strong>",
							"<h1>Ya existe DNI!</h1>",
							function(){
								$('#txtDni').val('');
								$('#txtDni').focus();
							});					
					}
			});
		}else{
			alertify.error("Debe ingresar una DNI");
       		$("#txtDni").focus();
		}
	});


/* --------------------------------------------------*/

	$('#btnBuscarPacienteDni').click(function(){
		//alert($('input:text[name=txtBuscarApellido]').val());
		$('#tblPaciente tbody').html(''); //limpio contenido tabla

		var v_dni = $("#txtBuscarPacienteDni").val();

		$.post(baseurl+"cexpediente/buscarDniPaciente", {texto:v_dni},
			function(data){
				var obj = JSON.parse(data);
				var output = '';
				if(obj == null){					
					$('#modalSinResultado').modal();
				}else{
					//alert(obj[0].obrasocial);
					$.each(obj, function(i,item){
						output +=
							'<tr>' +
							'	<td>'+item.dni+'</td>'+
							'	<td>'+item.apellido+'</td>'+
							'	<td>'+item.nombre+'</td>'+
							'<td><button id="btnSelecPaciente" class="btn btn-success btn-circle" onclick="selPaciente(\''+item.dni+'\',\''+item.apellido+'\',\''+item.nombre+'\',\''+item.idobrasocial+'\',\''+item.obrasocial+'\',\''+item.idseguro+'\',\''+item.seguro+'\');" data-dismiss="modal"><i class="fa fa-check"></i></button></td>'+
							'</tr>';
					});
					$('#tblPaciente > tbody:last-child').append(output);
					$('#modalSelecPaciente').modal();
				}
		});		
	});




/* --------------btnIniciarBuscarDni------------------------------------*/

	$('#btnIniciarBuscarDni').click(function(){

		var v_dni = $("#txtBuscarPacienteDni").val();

		$.post(baseurl+"cexpediente/buscarDniPaciente", {texto:v_dni},
			function(data){
				var obj = JSON.parse(data);
				var output = '';
				if(obj == null){					

					alertify.confirm(
							"<strong>Alta de Paciente</strong>",
							"<p>¿Desea agregar Paciente?</p>",
							function(){
								$('#txtApellido').prop('disabled', false);
								$('#txtNombre').prop('disabled', false);
								$('#txtApellido').focus();
							},
							function(){
								alertify.error('Registro Cancelado');
							});
					//$('#modalSinResultado2').modal();
				}else{
					$('#txtApellido').val(obj[0].apellido);
					$('#txtNombre').val(obj[0].nombre);
				}
		});		
	});





/* --------------btnIniciarExpediente------------------------------------*/

	$('#btnIniciarExpediente').click(function(){

		var v_dni = $("#txtBuscarPacienteDni").val();
		var v_ape = $("#txtApellido").val();
		var v_nom = $("#txtNombre").val();
		var v_userid = iduser;

		$.post(baseurl+"ciniciarexpediente/iniciarExpediente", {dni:v_dni, ape:v_ape, nom:v_nom, userid:v_userid},
			function(data){
				var obj = JSON.parse(data);
				var output = '';
				if(obj == null){
					alert('NULL');
				}else{
					var n_exp = ("0000000" + obj).slice(-6);

					alertify.alert('Gestion de Expediente', 'Expediente Iniciado Nro: ' + n_exp, function(){ 
						alertify.success('Expediente Iniciado'); 

						setTimeout(function(){
							$('#txtSendIdExp').val(n_exp);
							$('#btnInitExpPres').click();
						}, 2000);
					});
					//alertify.alert('Gestion de Expediente', 'Expediente Iniciado Nro: ' + n_exp);
					

					


					//alert(n_exp);
					//$('#btnInitExpPres').click();
				}
		});		
	});
















/* --------BUSCAR EXP DE VEXPCONSULTA	------------------------------------------*/

	$('#btnBuscarExp').click(function(){
		$('#tblResultado tbody').html('');
		var v_exp = $('#txtNumExp').val();
		$.post(baseurl+"cexpconsulta/buscar", {texto:v_exp}, 
			function(data){
				var obj = JSON.parse(data);
				var output = '';
				if(obj == null){
					alertify.error("No existe Expediente!");
				}else{
					$.each(obj, function(i,item){
						output +=
						'<tr>' +
							'	<td style="display:none;">'+item.idexpediente+'</td>'+
							'	<td>'+item.nrosiniestro+'</td>'+
							'	<td>'+item.fechaingreso+'</td>'+
							'	<td>'+item.dni+'</td>'+
							'	<td>'+item.apellido+'</td>'+
							'	<td>'+item.nombre+'</td>'+
							'<td><button id="btnSelecPaciente" class="btn btn-success btn-circle" onclick="verDetalle2(\''+item.idexpediente+'\',\''+item.dni+'\');"><i class="fa fa-check"></i></button></td>'+
						'</tr>';
					});
					$('#tblResultado > tbody:last-child').append(output);
				}
			});
	});



	/* --------BUSCAR EXP DE VGESTIONAREXP	------------------------------------------*/

	$('#btnGestionarExp').click(function(){
		$('#tblResultado tbody').html('');
		var v_exp = $('#txtNumExp').val();
		$.post(baseurl+"cgestaddpres/buscar", {texto:v_exp}, 
			function(data){
				var obj = JSON.parse(data);
				var output = '';
				if(obj == null){
					alertify.error("No existe Expediente!");
				}else{
					$.each(obj, function(i,item){
						output +=
						'<tr>' +
							'	<td style="display:none;">'+item.idexpediente+'</td>'+
							'	<td>'+item.idexpediente+'</td>'+
							'	<td>'+item.fechaingreso+'</td>'+
							'	<td>'+item.dni+'</td>'+
							'	<td>'+item.apellido+'</td>'+
							'	<td>'+item.nombre+'</td>'+
							'<td><button id="btnSelecPaciente" class="btn btn-success btn-circle" onclick="verDetalle(\''+item.idexpediente+'\',\''+item.dni+'\');"><i class="fa fa-check"></i></button></td>'+
						'</tr>';
					});
					$('#tblResultado > tbody:last-child').append(output);
				}
			});
	});






	/* --------BUSCAR EXP DE VGESTIONAREXP POR APELLIDO	------------------------------------------*/

	$('#btnGestionarExpApe').click(function(){
		$('#tblResultado tbody').html('');
		var v_exp = $('#txtApePaciente').val();
		$.post(baseurl+"cexpconsulta/buscarApe", {texto:v_exp}, 
			function(data){
				var obj = JSON.parse(data);
				var output = '';
				if(obj == null){
					alertify.error("No Existe Paciente!");
				}else{
					$.each(obj, function(i,item){
						output +=
						'<tr>' +
							'	<td style="display:none;">'+item.idexpediente+'</td>'+
							'	<td>'+item.nrosiniestro+'</td>'+
							'	<td>'+item.fechaingreso+'</td>'+
							'	<td>'+item.dni+'</td>'+
							'	<td>'+item.apellido+'</td>'+
							'	<td>'+item.nombre+'</td>'+
							'<td><button id="btnSelecPaciente" class="btn btn-success btn-circle" onclick="gestionarExp(\''+item.idexpediente+'\',\''+item.dni+'\');"><i class="fa fa-check"></i></button></td>'+
						'</tr>';
					});
					$('#tblResultado > tbody:last-child').append(output);
				}
			});
	});










	/* --------BUSCAR EXP DE VEXPCONSULTA POR APELLIDO	------------------------------------------*/

	$('#btnBuscarExpApe').click(function(){
		$('#tblResultado tbody').html('');
		var v_exp = $('#txtApePaciente').val();
		$.post(baseurl+"cexpconsulta/buscarApe", {texto:v_exp}, 
			function(data){
				var obj = JSON.parse(data);
				var output = '';
				if(obj == null){
					alertify.error("No Existe Paciente!");
				}else{
					$.each(obj, function(i,item){
						output +=
						'<tr>' +
							'	<td style="display:none;">'+item.idexpediente+'</td>'+
							'	<td>'+item.nrosiniestro+'</td>'+
							'	<td>'+item.fechaingreso+'</td>'+
							'	<td>'+item.dni+'</td>'+
							'	<td>'+item.apellido+'</td>'+
							'	<td>'+item.nombre+'</td>'+
							'<td><button id="btnSelecPaciente" class="btn btn-success btn-circle" onclick="verDetalle(\''+item.idexpediente+'\',\''+item.dni+'\');"><i class="fa fa-check"></i></button></td>'+
						'</tr>';
					});
					$('#tblResultado > tbody:last-child').append(output);
				}
			});
	});





/* --------------------------------------------------*/

	selPaciente = function(dni, apellido, nombre, idobrasocial, obrasocial, idseguro, seguro){
		var output = '';
		//$("#txtId").val(idpaciente);
		$("#txtDni").val(dni);
		$("#txtApellido").val(apellido);
		$("#txtNombre").val(nombre);
		$("#radioObraSocial").val(idobrasocial);
		$("#txtObraSocial").val(obrasocial);
		$("#radioSeguro").val(idseguro);
		$("#txtSeguro").val(seguro);
		//$("#radioSeguro").prop("checked", true)
		alertify.success('PACIENTE agregado');

		//limpio y desabled
		$('#btnBuscarPaciente').prop('disabled', true);
		$('#txtBuscarApellido').val('');
		$('#btnBuscarPacienteDni').prop('disabled', true);
		$('#txtBuscarPacienteDni').val('');

	};

/* --------------------------------------------------*/
	verDetalle = function(idexpediente, dni){
		$('#txtDetalleIdExp').val(idexpediente);
		$('#txtDetalleDni').val(dni);

		$("#btnGestionarPres").click();
	}
/* --------------------------------------------------*/


/* --------------------------------------------------*/

	deletePres = function(detallepres, idexp){
		
		alertify.confirm(
			"<strong>Eliminar Prestacion</strong>",
			"<p>¿Desea eliminar Prestacion?</p>",
			function(){
				alertify.success('¡Pedido Agregado!');

				setTimeout(function(){
					$('#txtDeleteIdPres').val(detallepres);
					$('#txtDeleteIdExp').val(idexp);
					$("#btnDeletePres").click();

				}, 2000);
				
			},
			function(){
				alertify.error('Registro Cancelado');
			});
	}




/* --------------------------------------------------*/

/* --------------------------------------------------*/
	verDetalle2 = function(idexpediente, dni){
		$('#txtDetalleIdExp').val(idexpediente);
		$('#txtDetalleDni').val(dni);

		$("#btnDetalle").click();
	}
/* --------------------------------------------------*/


/* --------------------------------------------------*/
	gestionarExp = function(idexpediente, dni){
		$('#txtDetalleIdExp').val(idexpediente);
		$('#txtDetalleDni').val(dni);

		$("#btnDetalle").click();
	}
/* ------------FORM MODAL PARA EDIT--------------------------------------*/

	$('#btnEditPol').click(function(){

		$('#txtExp').val($('#txtIdExpediente').val());
		$('#modalEditPol').modal();
		//$('#tblPrestacion tbody').html('');
		//var v_pres = $("#txtBuscarPrestacion").val();		
	});




	$('#btnEditDateEg').click(function(){

		$('#txtExpDate').val($('#txtIdExpediente').val());
		$('#modalEditDateEg').modal();
		//$('#tblPrestacion tbody').html('');
		//var v_pres = $("#txtBuscarPrestacion").val();		
	});

/* --------------------------------------------------*/













	$('#btnBuscarPrestacion').click(function(){

		$('#tblPrestacion tbody').html('');
		var v_pres = $("#txtBuscarPrestacion").val();

		$.post(baseurl+"cexpediente/buscarPrestacion", {texto:v_pres}, 
			function(data){
				var obj = JSON.parse(data);
				var output = '';
				var v_cant = 1;

				if(obj != null){
					$.each(obj, function(i,item){
						output +=
							'<tr>' + 
							'	<td>'+item.idprestacion+'</td>'+
							'	<td>'+item.descripcion+'</td>'+
							'	<td>'+item.importe+'</td>'+
							'	<td>'+item.categoria+'</td>'+
							'	<td><button id="btnSelecPaciente" class="btn btn-success btn-circle" onclick="selPrestacion(\''+item.idprestacion+'\',\''+item.descripcion+'\',\''+item.importe+'\',\''+item.categoria+'\',\''+v_cant+'\');" data-dismiss="modal"><i class="fa fa-check"></i></button></td>'+
							'</tr>';
					});
					$('#tblPrestacion > tbody:last-child').append(output);
					$('#modalSelecPrestacion').modal();
				}else{
					$('#modalSinResultado').modal();
				}
		});
	});


	selPrestacion = function(idprestacion, descripcion, importe, categoria, cantidad){
		var output = '';
		$("#txtSelecIdPres").val(idprestacion);
		$("#txtSelecNomPres").val(descripcion);
		$("#txtSelecImportePres").val(importe);
		$("#txtSelecCategPres").val(categoria);
		$("#txtSelecCantidadPres").val(cantidad);
		$("#txtSelecCantidadPres").focus();
	};


	$('#btnAgregarPrestacion').click(function(){

		if($('#txtSelecNomPres').val().length < 1){
			alertify.error("Debe ingresar una PRESTACION");
       		$("#txtBuscarPrestacion").focus();
		}else{
			var v_id = $("#txtSelecIdPres").val();
			var v_nom = $("#txtSelecNomPres").val();
			var v_imp = $("#txtSelecImportePres").val();
			var v_cant = $("#txtSelecCantidadPres").val();
			var v_subtotal = v_cant * v_imp;

			v_total = v_total + v_subtotal

			var output = '';
			output +=
				'<tr>' + 
				'	<td>'+v_id+'</td>'+
				'	<td>'+v_nom+'</td>'+
				'	<td>'+v_imp+'</td>'+
				'	<td>'+v_cant+'</td>'+
				'	<td><strong>'+v_subtotal+'</strong></td>'+
				'</tr>';

			$("#txtTotalPres").val(v_total);

			$('#tblSelecPrestacion > tbody:last-child').append(output);
			$('#tblNuevaPrestacion > tbody:last-child').append(output);

			alertify.success('Prestacion agregada');

			//eliminao valores
			$("#txtSelecNomPres").val('');
			$("#txtSelecImportePres").val('');
			$("#txtSelecImportePres").val('');
			$("#txtSelecCategPres").val('');
			$("#txtSelecCantidadPres").val('');
			$("#txtBuscarPrestacion").val('');
			$('#btnBuscarPrestacion').prop('disabled', true);
			$("#txtBuscarPrestacion").focus();
									
		}
	});



/* ---------Boton Gestion Pres Agregar Mod--------------*/

	$('#btnAddPresMod').click(function(){

		if($('#txtSelecNomPres').val().length < 1){
			alertify.error("Debe ingresar una PRESTACION");
       		$("#txtBuscarPrestacion").focus();
		}else{

			var v_total_ant = parseInt($('#txtTotalPres').val());
			var v_id = $("#txtSelecIdPres").val();
			var v_nom = $("#txtSelecNomPres").val();
			var v_imp = $("#txtSelecImportePres").val();
			var v_cant = $("#txtSelecCantidadPres").val();
			var v_subtotal = v_cant * v_imp;

			v_total = v_total_ant;
			v_total = v_total + v_subtotal;

			var output = '';
			output +=
				'<tr>' + 
				'	<td>'+v_id+'</td>'+
				'	<td>'+v_nom+'</td>'+
				'	<td>'+v_imp+'</td>'+
				'	<td>'+v_cant+'</td>'+
				'	<td><strong>'+v_subtotal+'</strong></td>'+
				'</tr>';

			$("#txtTotalPres").val(v_total);

			$('#tblSelecPrestacion > tbody:last-child').append(output);
			$('#tblNuevaPrestacion > tbody:last-child').append(output);

			alertify.success('Prestacion agregada');

			//eliminao valores
			$("#txtSelecNomPres").val('');
			$("#txtSelecImportePres").val('');
			$("#txtSelecImportePres").val('');
			$("#txtSelecCategPres").val('');
			$("#txtSelecCantidadPres").val('');
			$("#txtBuscarPrestacion").val('');
			$('#btnBuscarPrestacion').prop('disabled', true);
			$("#txtBuscarPrestacion").focus();
									
		}
	});
















	$('#btnConfirmar2').click(function(){

		if($('#radioObraSocial').is(':checked')){
			alert("it's checked");
		}else{
			alert("NOOOOO");
		}


	});




	$('#btnConfirmar').click(function(){
		
		var idArray = []; //Array con los IDs de las prestaciones
       	var importeArray = [];
       	var cantidadArray = []; //Array las cantidad de cada prestacion
       	var subtotalArray = []; 

       	if($('#txtDni').val().length < 1){
       		alertify.error("Ingrese DNI o APE");
       		$("#txtBuscarApellido").focus();
       	}else if($('#txtSiniestro').val().length < 1){
       		alertify.error("Ingrese Nro Siniestro");
       		$("#txtSiniestro").focus();
       	}else{
       		//recorro tabla de detalle
			$('#tblSelecPrestacion tbody tr').each(function(){
				idArray.push($(this).find("td:eq(0)").text());
				importeArray.push($(this).find("td:eq(2)").text());
				cantidadArray.push($(this).find("td:eq(3)").text());
				subtotalArray.push($(this).find("td:eq(4)").text());			

			});

			//asigno valores finales tabal detalle a los inputs del hidden form
			$('#txtSendArrayIdPres').val(JSON.stringify(idArray));
	        $('#txtSendArrayImportePres').val(JSON.stringify(importeArray));
	        $('#txtSendArrayCantPres').val(JSON.stringify(cantidadArray));
	        $('#txtSendArraySubTotalPres').val(JSON.stringify(subtotalArray));

	        //asigno valores de inputs a inputs hidden
	        $('#txtSendNroSinistro').val($('#txtSiniestro').val());
	        $('#txtSendExpPolicial').val($('#txtExpediente').val());
	        $('#txtSendFechaIngreso').val($('#txtFechaIngreso').val());
	        $('#txtSendTotal').val($('#txtTotalPres').val());
	        
	        //datos paciente
	        $('#txtSendDni').val($('#txtDni').val());
	        $('#txtSendObraSocial').val($('#radioObraSocial').val());
	        $('#txtSendSeguro').val($('#radioSeguro').val());



	        //var fecha = $('#txtFechaIngreso').val();
	        //var date = fecha;
	        //var fecha_actual = fecha.split("/").reverse().join("-");

			//alert($('#txtSendArrayIdPres').val());

			//alert(fecha);

			//alert(idArray);
			$("#btnInregarExp").click();
       	}
	});



// ------btnIniciarExpediente------//

	$('#btnInitConfirmar').click(function(){

		alertify.confirm(
		"<strong>Gestion de Expediente</strong>",
		"<p>¿Desea agregar Nuevo Expediente?</p>",
		function(){
			alertify.success('¡Expediente Agregado!');

			setTimeout(function(){
				var idArray = []; //Array con los IDs de las prestaciones
		       	var importeArray = [];
		       	var cantidadArray = []; //Array las cantidad de cada prestacion
		       	var subtotalArray = []; 

		   		//recorro tabla de detalle
				$('#tblSelecPrestacion tbody tr').each(function(){
					idArray.push($(this).find("td:eq(0)").text());
					importeArray.push($(this).find("td:eq(2)").text());
					cantidadArray.push($(this).find("td:eq(3)").text());
					subtotalArray.push($(this).find("td:eq(4)").text());			

				});

				//asigno valores finales tabal detalle a los inputs del hidden form
				$('#txtSendArrayIdPres').val(JSON.stringify(idArray));
		        $('#txtSendArrayImportePres').val(JSON.stringify(importeArray));
		        $('#txtSendArrayCantPres').val(JSON.stringify(cantidadArray));
		        $('#txtSendArraySubTotalPres').val(JSON.stringify(subtotalArray));

		        //asigno valores de inputs a inputs hidden
		        $('#txtSendIdExp').val(v_idexp);
		 
		        $('#txtSendTotal').val($('#txtTotalPres').val());

				$("#btnInitSendFinal").click();
			}, 2000);
											
		},
		function(){
			alertify.error('Gestion Cancelado');
		});		

	});


























	$('#btnAddPresConf').click(function(){

		alertify.confirm(
		"<strong>Gestion de Expediente</strong>",
		"<p>¿Confirmar Gestion de Expediente?</p>",
		function(){
			alertify.success('¡Expediente Editado!');

			setTimeout(function(){
		
				var idArray = []; //Array con los IDs de las prestaciones
		       	var importeArray = [];
		       	var cantidadArray = []; //Array las cantidad de cada prestacion
		       	var subtotalArray = [];

		   		//recorro tabla de detalle
				$('#tblNuevaPrestacion tbody tr').each(function(){
					idArray.push($(this).find("td:eq(0)").text());
					importeArray.push($(this).find("td:eq(2)").text());
					cantidadArray.push($(this).find("td:eq(3)").text());
					subtotalArray.push($(this).find("td:eq(4)").text());			

				});

				//asigno valores finales tabal detalle a los inputs del hidden form
				$('#txtSendArrayIdPres').val(JSON.stringify(idArray));
		        $('#txtSendArrayImportePres').val(JSON.stringify(importeArray));
		        $('#txtSendArrayCantPres').val(JSON.stringify(cantidadArray));
		        $('#txtSendArraySubTotalPres').val(JSON.stringify(subtotalArray));

		        //asigno valores de inputs a inputs hidden
		        $('#txtSendIdExpediente').val($('#txtIdExpediente').val());
		        $('#txtSendTotal').val($('#txtTotalPres').val());
		        


		        //$('#txtSendExpPolicial').val($('#txtExpediente').val());
		        //$('#txtSendFechaEgreso').val($('#txtFechaEgreso').val());
		        


		        //var fecha = $('#txtFechaIngreso').val();
		        //var date = fecha;
		        //var fecha_actual = fecha.split("/").reverse().join("-");

				//alert($('#txtSendArrayIdPres').val());

				//alert(fecha);

				//alert(idArray);
				$("#btnGestAddPresMod").click();
			}, 2000);
		},
		function(){
			alertify.error('Gestion Cancelada');
		});
	});


	$('#btnGestionConfirmar23').click(function(){

		if ($('#checkPolicial').is(':checked')){
			alert('CHEEECK');
		}else{
			alert('NOOO');
		}

	});


	$('#btnInitCancelar').click(function(){

		$(location).attr('href', baseurl + 'ciniciarexpediente');

	});


	$('#btnConfirmEditPol').click(function(){

		
	});



	

});