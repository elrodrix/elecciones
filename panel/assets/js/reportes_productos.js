var chart2; //definimos como variable Global
var options;
  
$(document).ready(function(){
        
   var opcion;
   $("#btnReporteProd").click(function(){ 
                //capturo la opcion
                opcion = parseInt($("#select1 option:selected").val());    
                
                $.ajax({
                  url: "libreria/ORM/reportes_productos.php",
                  type: "POST",
                  datatype:"json",    
                  data:  {opcion:opcion},    
                  success: function(data) {
                              //recibo el json desde PHP y lo paso a string
                              options.series[0].data = data;
                              var chart2 = new Highcharts.Chart(options);
                              //console.log(data);
                   }
                });

                switch(opcion) {
                     case 3:
                        opcion3();
                        break;
                     case 4:
                       opcion4();
                       break;
                    case 5:
                       opcion5();
                       break;    
                }   
        });   
    

	
    /// opcion 3 - Productos con mayor stock
    function opcion3() {
        var theModal = $("#modalGraficos").modal({
                            show: false
                            });   

        options = {
                    chart: {
                        renderTo: 'container1',
                        width: 500,
                        height: 500,
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: "pie",
                    },
                    title: {
                        text: "Productos con mayor Stock"
                        
                    },
                    subtitle: {
                    text: "Productos"
                    },
                    tooltip: {
						//pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
					pointFormat: "{series.name}: <b>{point.y:.0f}</b>" //muestra el stock sin decimales (.0f)
                    },
                    plotOptions: {
                        pie: {	
                            allowPointSelect: true,
                            cursor: "pointer",
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        name: "Stock",
                        colorByPoint: true,
                        data: [
                           
                        ],
                    }]
                };

        theModal.on("shown",function(){
           // Recreate the chart now and it will be correct
        });

        theModal.modal("show");

    }

    /// opcion 4 - Productos más caros    
    function opcion4(){
        var theModal = $("#modalGraficos").modal({
                            show: false
                            });   

        options = {
            chart: {
                renderTo: 'container1',
                type: "column"
            },
            title: {
                text: "Productos más caros - 2016"
            },
            subtitle: {
                text: "Origen de datos, tabla: productos"
            },
            xAxis: {
                type: "category"
            },
            yAxis: {
                title: {
                    text: "Precios"
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: "{point.y:.2f}"
                    }
                }
            },

            tooltip: {
                headerFormat: "<span style='font-size:11px'>{series.name}</span><br>",
                pointFormat: "<span style='color:{point.color}'>{point.name}</span>: <b> ${point.y:.2f}</b><br/>"
            },

            series: [{
                name: "Marca/Modelo",
                colorByPoint: true,
                data: [
                ],
            }]
        };

        theModal.on("shown",function(){
           // Recreate the chart now and it will be correct
        });

        theModal.modal("show");
    }
    
    /// opcion 5 - Productos más vendidos    
    function opcion5(){ 
        var theModal = $("#modalGraficos").modal({
                            show: false
                            });   

        options = {
        chart: {
            renderTo: 'container1',
            type: "bar"
        },
        title: {
            text: "Productos más Vendidos - 2016"
        },
        subtitle: {
            text: "Productos que más se vendieron"
        },
        xAxis: {
            type: "category",
            title: {
                text: "Productos"
            }
        },
        yAxis: {
			title: {
                text: "Cantidad"
            },
            labels: {
                overflow: "justify"
            }
        },
        tooltip: {
            
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "bottom",
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || "#FFFFFF"),
            shadow: true
        },
        credits: {
            enabled: false
        },
           series: [{
                name: "Cantidad",
                colorByPoint: true,
                data: [
                ],
            }]
    };
    
    
        theModal.on("shown",function(){
           // Recreate the chart now and it will be correct
        }); 
        theModal.modal("show");
    }      
   
    
    $("#modalGraficos").draggable({ handle: ".modal-header" });
});