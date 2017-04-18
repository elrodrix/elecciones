var chart3; //definimos como variable Global
var options;

$(document).ready(function() { 
   
    var fechaInicio; 
    var fechaFin;
    var opcionCompras;
     
   $("#btnGenerarReporteCompras").click(function(){ 
            
            fechaInicio = $("#fechaInicioC").val();
            fechaFin = $("#fechaFinC").val();
            
       
            if(fechaInicio.length > 0 && fechaFin.length > 0){
                //capturo la opcion
                opcionCompras = parseInt($("input:radio[name ='opcionCompras']:checked").val());    

                $.ajax({
                  url: "libreria/ORM/reportes_compras.php",
                  type: "POST",
                  datatype:"json",    
                  data:  {fechaInicio:fechaInicio, fechaFin:fechaFin, opcionCompras:opcionCompras },    
                  success: function(data) {
                              //recibo el json desde PHP y lo paso a string
                              options.series[0].data = data;
                              var chart3 = new Highcharts.Chart(options);
                              //console.log(data);
                   }
                });

                switch(opcionCompras) {
                     case 1:
                        opcion1();
                        break;
                     case 2:
                       opcion2();
                       break;
            }  
               
            } else{
                alertify.warning("Ingrese el rango de fechas.");
                $("#fechaInicio").focus();
            }             
        });     
     
    
    /// opcion 1 - Compras Diarias
    function opcion1(){
        var theModal = $("#modalGraficos").modal({
                            show: false
                            });   
        options = {
            chart: {
                renderTo: 'container1',
                type: "area"
            },
            title: {
                text: "Compras Diarias"
            },
            subtitle: {
                text: "Volumen de Compras."
            },
             xAxis: { 
                 type: "category"
            },
            yAxis: {
                title: {
                    text: "Compras en Dinero"
                },

            },
            dataLabels: {
                enabled: true,
                format: "{point.y:,.2f}"
            },

            tooltip: {
                //pointFormat: "{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}"
                pointFormat: "Total: <b>${point.y:,.2f}</b><br/>"
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
            data: [
                     
                ],
            }]
        
        };
        theModal.on("shown",function(){
           // Recreate the chart now and it will be correct
        });

        theModal.modal("show");

    }
    
    
     ///opcion 2 - Compras Mensuales
    function opcion2(){
     
    var theModal = $("#modalGraficos").modal({
                            show: false
                            });   
    
    //defino la var options para usar como param del objeto chart3
    options = {    
                chart: {
                    renderTo: 'container1', // es lo mismo que $("#container1").highcharts()
                    type: "column"               
                },
                title: {
                    text: "Compras Mensuales"
                },
                subtitle: {
                    text: "Período consultado, desde: <strong>"+fechaInicio+"</strong> hasta: <strong>"+fechaFin+"</strong>"
                },
                xAxis: {
                    type: "category",
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: "13px",
                            fontFamily: "Verdana, sans-serif"
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: "Dinero"
                    }
                },
                //establecemos los colores de las columnas por Mes
                colors: [
                    "#4572A7", 
                    "#80699B",
                    "#ff8e31", 
                    "#89A54E", 
                    "#3D96AE", 
                    "#92A8CD", 
                    "#A47D7C", 
                    "rgba(142, 162, 110, 0.81)"
                    ],

                    plotOptions: {
                        column: {
                            colorByPoint: true
                        }
                    },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: "Total del Mes: <b> ${point.y:.2f}</b>"     
                },
                series: [{
                    name: "Compras por mes",
                    dataLabels: {
                        enabled: true,
                        //rotation: -90,
                        rotation: 0,
                        color: "#ffffff",
                        align: "center",
                        format: "{point.y:,.2f}", 
                        y: 30, // 10 pixels down from the top
                        style: {
                            fontSize: "13px",
                            fontFamily: "Verdana, sans-serif"
                        }
                    },
                    data:[

                    ],
                }]
    }; //fin options
       
        theModal.on("shown",function(){
           // Recreate the chart now and it will be correct
        }); 
        theModal.modal("show");   
    }
    
    $("#modalGraficos").draggable({ handle: ".modal-header" });
});  