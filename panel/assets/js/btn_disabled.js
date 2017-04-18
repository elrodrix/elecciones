$(document).ready(function(){

	//DESABILIDAR BOTONES
	$('#txtBuscarApellido').keyup(function(){
		if($(this).val()){
			$('#btnBuscarPaciente').prop('disabled', false);
		}else{
			$('#btnBuscarPaciente').prop('disabled', true);
		}
	});

	//DESABILIDAR BOTONES
	$('#txtBuscarPacienteDni').keyup(function(){
		if($(this).val()){
			$('#btnBuscarPacienteDni').prop('disabled', false);
		}else{
			$('#btnBuscarPacienteDni').prop('disabled', true);
		}
	});

	//DESABILIDAR BOTONES
	$('#txtBuscarPrestacion').keyup(function(){
		if($(this).val()){
			$('#btnBuscarPrestacion').prop('disabled', false);
		}else{
			$('#btnBuscarPrestacion').prop('disabled', true);
		}
	});

	//DESABILIDAR BOTONES VPACIENTE
	$('#txtDni').keyup(function(){
		if($(this).val()){
			$('#bntSelectDni').prop('disabled', false);
		}else{
			$('#bntSelectDni').prop('disabled', true);
		}
	});

	//DESABILIDAR BOTONES VEXPCONSULTA
	$('#txtNumExp').keyup(function(){
		if($(this).val()){
			$('#btnBuscarExp').prop('disabled', false);
		}else{
			$('#btnBuscarExp').prop('disabled', true);
		}
	});


	//DESABILIDAR BOTONES VGESTIONAREXP
	$('#txtNumExp').keyup(function(){
		if($(this).val()){
			$('#btnGestionarExp').prop('disabled', false);
		}else{
			$('#btnGestionarExp').prop('disabled', true);
		}
	});

	//DESABILIDAR BOTONES VEXPCONSULTA
	$('#txtApePaciente').keyup(function(){
		if($(this).val()){
			$('#btnGestionarExpApe').prop('disabled', false);
		}else{
			$('#btnGestionarExpApe').prop('disabled', true);
		}
	});



	//DESABILIDAR BOTONES VEXPCONSULTA
	$('#txtApePaciente').keyup(function(){
		if($(this).val()){
			$('#btnBuscarExpApe').prop('disabled', false);
		}else{
			$('#btnBuscarExpApe').prop('disabled', true);
		}
	});

	//DESABILIDAR BOTONES VPRESTACION
	$('#txtPresNombre').keyup(function(){
		if($(this).val()){
			$('#btnGuardarPrestacion').prop('disabled', false);
		}else{
			$('#btnGuardarPrestacion').prop('disabled', true);
		}
	});


	//DESABILIDAR BOTONES Vcategoria
	$('#txtCategoria').keyup(function(){
		if($(this).val()){
			$('#btnAltaCategoria').prop('disabled', false);
		}else{
			$('#btnAltaCategoria').prop('disabled', true);
		}
	});



		//DESABILIDAR BOTONES VCONSULTORA
	$('#txtConsultora').keyup(function(){
		if($(this).val()){
			$('#btnAltaConsultora').prop('disabled', false);
		}else{
			$('#btnAltaConsultora').prop('disabled', true);
		}
	});



			//DESABILIDAR BOTONES VCANDIDATO
	$('#txtNombre').keyup(function(){
		if($(this).val()){
			$('#btnAltaCandidato').prop('disabled', false);
		}else{
			$('#btnAltaCandidatos').prop('disabled', true);
		}
	});





		//DESABILIDAR BOTONES VPARTIDO
	$('#txtNombre').keyup(function(){
		if($(this).val()){
			$('#btnAltaPartido').prop('disabled', false);
		}else{
			$('#btnAltaPartido').prop('disabled', true);
		}
	});

	//DESABILIDAR BOTONES Vobrasocial
	$('#txtNombreOS').keyup(function(){
		if($(this).val()){
			$('#btnAltaOb').prop('disabled', false);
		}else{
			$('#btnAltaOb').prop('disabled', true);
		}
	});


	//DESABILIDAR BOTONES Vsguro
	$('#txtNombreSeguro').keyup(function(){
		if($(this).val()){
			$('#btnAltaSeguro').prop('disabled', false);
		}else{
			$('#btnAltaSeguro').prop('disabled', true);
		}
	});

/* --------------------------------------------------*/



	$('#checkPolicial').change(function() {
        if($(this).is(":checked")) {
            $('#txtPolicial').prop('disabled', false);
        }else{
        	$('#txtPolicial').prop('disabled', true);
        }
    });


/* --------------------------------------------------*/




});