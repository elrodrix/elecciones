$(document).ready(function() { 
	var porc_Ing;
	var porc_Egr;
	var porc_Tot;
	
	$("#btnReporteIyE").click(function(){ 
			var mes;
			var anio;
			var ingresos = 0;
			var egresos = 0;
		
		
            mes = $("#mesReporte").val();
			anio = $("#anioReporte").val();
        	
			 $.ajax({
                  url: "libreria/ORM/reportes_varios.php",
                  type: "POST",
                  datatype:"json",    
                  data:  {mes: mes, anio:anio},     
                  success: function(data) {
					  		var datos = JSON.parse(data);
                            //recibo el json desde PHP y lo paso a string
					  		//options.series[0].data = data;
                            //var chart4 = new Highcharts.Chart(options);	
					  		console.log(data);
					  
					  		var datos = JSON.parse(data);
							if(datos[0][0] == null || datos[0][1] == null){
								ingresos = 0;
								egresos = 0;
								porc_Ing = 0;
								porc_Egr = 0;
							}else{
								ingresos = parseFloat(datos[0][0]).toFixed(2);
								egresos = parseFloat(datos[0][1]).toFixed(2);	
								total = parseFloat(ingresos) + parseFloat(egresos);
								porc_Ing = Math.round(ingresos/total * 100);
								porc_Egr = Math.round(egresos/total * 100);
								porc_Tot = Math.round(total/total * 100);
								//console.log(porc_Ing, porc_Egr, porc_Tot);
							}	
					  		$("#totIng").text(": $ "+ingresos);
							$("#totEgr").text(": $ "+egresos);
					  		move1();
							move2();
					}
                });
		
		
			
	});
	
	function move1() {
	  var elem = document.getElementById("myBar");
	  var width = 0;
	  var id = setInterval(frame, 10); //velocidad que crece la barra
		function frame() {
			if (width >= porc_Ing) {
			  clearInterval(id);
			  
			  elem.style.width = width + '%';
			  document.getElementById("label").innerHTML = width * 1  + '%';	
				
			} else {
			  width++;
			  elem.style.width = width + '%';
			  document.getElementById("label").innerHTML = width * 1  + '%';
			}
		  }
	}
	
	function move2() {
	  var elem = document.getElementById("myBar2");
	  var width = 0;
	  var id = setInterval(frame, 10);
		  function frame() {
			if (width >= porc_Egr) {
			  clearInterval(id);
				
			  elem.style.width = width + '%';
			  document.getElementById("label").innerHTML = width * 1  + '%';		
			} else {
			  width++;
			  elem.style.width = width + '%';
			  document.getElementById("label2").innerHTML = width * 1  + '%';
			}
		  }
	}
	
	
	//toma el año actual
	$("#anioReporte").val((new Date).getFullYear());
	
});