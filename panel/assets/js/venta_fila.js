$(document).ready(function() {

	$("#btnSelecPaciente").click(function(){ 

		var fila1 = 0;
		var v_dni = $("#dni").val();
		var v_nombre = $("#nombre").val();
		var v_apellido = $("#apellido").val();


		//var v_codigo = $("#codigo").val(); //lee propiedad id de input codigo

		var n_celdas = $('tr:last td', $("#tablaPaciente")).length; //lee propiedad id de tabla

		if(fila1 = 0) {
            $('#tablaPaciente > tbody:last-child').append('<td style="display:none;">'+v_dni+'</td><td>'+v_nombre+'</td><td>'+v_apellido+'</td><td><button class="removerCarritoVentas btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign">boton</span></button></td>');
            fila1 = 1;
                 
        }

        if(fila1 = 1){
            $('#tablaPaciente > tbody:last-child').append('<tr><td style="display:none;">'+v_dni+'</td><td>'+v_nombre+'</td><td>'+v_apellido+'</td><td><button class="removerCarritoVentas btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign">boton</span></button></td></tr>');
            
        }


	});


});