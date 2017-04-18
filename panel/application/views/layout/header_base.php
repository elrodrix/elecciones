

<!DOCTYPE html>
<html lang="es">
<head>
    <title>Sistea de Gastos Sanatoriales</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Para ICONOS -->
    <link rel="apple-touch-icon" sizes="57x57" href="/infodp/assets/img/icoDP/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/infodp/assets/img/icoDP/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/infodp/assets/img/icoDP/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/infodp/assets/img/icoDP/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/infodp/assets/img/icoDP/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/infodp/assets/img/icoDP/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/infodp/assets/img/icoDP/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/infodp/assets/img/icoDP/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/infodp/assets/img/icoDP/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/infodp/assets/img/icoDP/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/infodp/assets/img/icoDP/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/infodp/assets/img/icoDP/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/infodp/assets/img/icoDP/favicon-16x16.png">
    <link rel="manifest" href="/infodp/assets/img/icoDP/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/infodp/assets/img/icoDP/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="shortcut icon" href="/infodp/assets/img/icoDP/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/infodp/assets/img/icoDP/favicon.ico" type="image/x-icon">
    
    
    <!-- Bootstrap Core CSS -->
    <link href="<?php echo base_url();?>assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">

     <!-- MetisMenu CSS -->
    <link href="<?php echo base_url();?>assets/metisMenu/dist/metisMenu.min.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link href="<?php echo base_url();?>assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

     <!-- Custom CSS -->
    <link href="<?php echo base_url();?>assets/dist/css/sb-admin-2.css" rel="stylesheet">
        
     <!--Archivos CSS para DataTables -->
    <link rel="stylesheet" href="<?php echo base_url();?>assets/datatables/css/dataTables.bootstrap.min.css">
    
    
    <!--extension BUTTONS para DataTables -->
    <link rel="stylesheet" href="<?php echo base_url();?>assets/datatables/extensions/Buttons/css/buttons.dataTables.min.css">
    
    <!--estilo bootstrap para extension BUTTONS -->
    <!--<link rel="stylesheet" href="<?php echo base_url();?>assets/datatables/extensions/Buttons/css/buttons.bootstrap.min.css">-->
    
     <!--extension SELECT para DataTables -->
    <link rel="stylesheet" href="<?php echo base_url();?>assets/datatables/Select/css/select.bootstrap.min.css">
    
    <!--scroller para datatables -->
    <link rel="stylesheet" href="<?php echo base_url();?>assets/datatables/extensions/scroller/css/scroller.bootstrap.min.css">
    
    <!--Archivos CSS para JQuery UI -->
    <link rel="stylesheet" href="<?php echo base_url();?>assets/jqueryUI/jquery-ui.min.css">
    <link rel="stylesheet" href="<?php echo base_url();?>assets/jqueryUI/jquery-ui.theme.min.css">
    
    <!--Archivos CSS para Alertify -->
    <!-- include the style -->
    <link href="<?php echo base_url();?>assets/alertify/css/alertify.min.css" rel="stylesheet">
    <!-- include a theme -->
    <link href="<?php echo base_url();?>assets/alertify/css/themes/bootstrap.min.css" rel="stylesheet">
    
    

    
    <!--Archivos Javascript-->
    
     <!-- jQuery -->
    <script src="<?php echo base_url();?>assets/plugins/jQuery/jquery-2.2.3.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="<?php echo base_url();?>assets/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="<?php echo base_url();?>assets/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="<?php echo base_url();?>assets/dist/js/sb-admin-2.js"></script>

    <!--Archivos JS para DataTables -->
    <script src="<?php echo base_url();?>assets/datatables/js/jquery.dataTables.min.js"></script>

    <!--Archivos JS para DataTables estilo Bootstrap -->
    <script src="<?php echo base_url();?>assets/datatables/js/dataTables.bootstrap.min.js"></script>
    
    <!--extension BUTTONS para DataTables -->
    <script src="<?php echo base_url();?>assets/datatables/extensions/Buttons/js/dataTables.buttons.min.js"></script>
    <script src="<?php echo base_url();?>assets/datatables/extensions/Buttons/js/buttons.bootstrap.min.js"></script>
    <script src="<?php echo base_url();?>assets/datatables/extensions/Buttons/js/jszip.min.js"></script>
    <script src="<?php echo base_url();?>assets/datatables/extensions/Buttons/js/pdfmake.min.js"></script>
    <script src="<?php echo base_url();?>assets/datatables/extensions/Buttons/js/vfs_fonts.js"></script>
    <script src="<?php echo base_url();?>assets/datatables/extensions/Buttons/js/buttons.html5.min.js"></script>
    <script src="<?php echo base_url();?>assets/datatables/extensions/Buttons/js/buttons.print.min.js"></script>
    <script src="<?php echo base_url();?>assets/datatables/extensions/Buttons/js/buttons.colVis.min.js"></script>
    
    <!--extension SELECT para DataTables -->
    <script src="<?php echo base_url();?>assets/datatables/Select/js/dataTables.select.min.js"></script>    
    
    <!--extension KEYTABLES para DataTables -->
    <script src="<?php echo base_url();?>assets/datatables/extensions/keytable/dataTables.keyTable.min.js"></script>    

    <!--Código JS para JQuery UI -->
    <script src="<?php echo base_url();?>assets/jqueryUI/jquery-ui.min.js"></script>

    <!--Código custom JS para el autocomplete -->
    <script src="<?php echo base_url();?>assets/js/autocomplete_prod.js"></script
    
    
    
    <!--Plugin para Imprimir -->
    <script src="<?php echo base_url();?>assets/jquery-PrintArea/jquery.PrintArea.js"></script>
   
    <!--Código JS propio -->
    <script src="<?php echo base_url();?>assets/js/codigo_base.js"></script>

    <!--Código JS propio para datatables -->
    <script src="<?php echo base_url();?>assets/js/codigo_datatables.js"></script>

    <!--Código JS reportes Ventas-->
    <script src="<?php echo base_url();?>assets/js/reportes_ventas.js"></script>

    <!--Código JS reportes Productos -->
    <script src="<?php echo base_url();?>assets/js/reportes_productos.js"></script>

    <!--Código JS reportes Compras-->
    <script src="<?php echo base_url();?>assets/js/reportes_compras.js"></script>
    
    <!--Código JS reportes Varios-->
    <script src="<?php echo base_url();?>assets/js/reportes_varios.js"></script>
    
   <!--Código JS para COMPRAS -->
    <script src="<?php echo base_url();?>assets/js/codigo_compras.js"></script>

    <!--Código JS para VENTAS -->
    <script src="<?php echo base_url();?>assets/js/codigo_ventas.js"></script>

    <!--Código JS para Devoluciones VENTAS -->
    <script src="<?php echo base_url();?>assets/js/codigo_ventas_devoluc.js"></script>

    <!--Código JS para Flujo de Cajas -->
    <script src="<?php echo base_url();?>assets/js/codigo_flujoDeCajas.js"></script>

    <!--Código custom JS para alertify -->
    <script src="<?php echo base_url();?>assets/alertify/alertify.min.js"></script>
    
    
</head>
 
<body>
    <div id="wrapper"><!-- Inicio "wrapper" -->
        <!-- Navigation -->
<!--        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">-->
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <!--boton tipo menu aparece solo en pantallas pequeñas-->
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Menú de navegación</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href='/infodp/admin'><img src="<?php echo base_url();?>assets/img/LogoMenuSup.png">SGS</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right"> 
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        admin2                  <img src="<?php echo base_url();?>assets/img/user.png" alt="" height="32" width="36">    
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a><i class="fa fa-user fa-fw"></i> Usuario demo2</a>
                        </li>
                        
                        <!--Contiene el id del usuario en modo oculto -->
                        <input id="idUsuario" type="hidden" value="70">
                        
                        <li>             
                        <a href="/infodp/usuarios/editar_perfil?id=70"><i class="fa fa-gear fa-fw"></i> Perfil de Usuario</a>
                        </li>
                        <li class="divider"></li>
                        <li class="active"><a href='/infodp/login/cerrarSesion'><i class="fa fa-sign-out fa-fw"></i> Cerrar Sesión</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->