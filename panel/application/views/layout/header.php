

<!DOCTYPE html>
<html lang="es">
<head>
    <title>Sistema de Elecciones 2017</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    
    
    <!-- Bootstrap Core CSS -->
    <link href="<?php echo base_url();?>assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

     <!-- MetisMenu CSS -->
    <link href="<?php echo base_url();?>assets/vendor/metisMenu/metisMenu.min.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link href="<?php echo base_url();?>assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

     <!-- Custom CSS -->
    <link href="<?php echo base_url();?>assets/dist/css/sb-admin-2.css" rel="stylesheet">
        
     <!--Archivos CSS para DataTables -->
    
    
    <!--Archivos CSS para JQuery UI -->
    <link rel="stylesheet" href="<?php echo base_url();?>assets/jqueryUI/jquery-ui.min.css">
    <link rel="stylesheet" href="<?php echo base_url();?>assets/jqueryUI/jquery-ui.theme.min.css">
    
    

    
    <!--Archivos Javascript-->
    
     <!-- jQuery -->
    <script src="<?php echo base_url();?>assets/vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="<?php echo base_url();?>assets/vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="<?php echo base_url();?>assets/vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="<?php echo base_url();?>assets/dist/js/sb-admin-2.js"></script>

    <!--Archivos JS para DataTables -->
        

    <!--Código JS para JQuery UI -->
    <script src="<?php echo base_url();?>assets/jqueryUI/jquery-ui.min.js"></script>

    <!--Código custom JS para el autocomplete -->

    <script src="<?php echo base_url();?>assets/js/listpaciente.js"></script>
    <script src="<?php echo base_url();?>assets/js/btn_disabled.js"></script>

    <!--Archivos CSS para Alertify -->
    <!-- include the style -->
    <link href="<?php echo base_url();?>assets/vendor/alertifyjs/css/alertify.min.css" rel="stylesheet">
    <!-- include a theme -->
    <link href="<?php echo base_url();?>assets/vendor/alertifyjs/css/themes/bootstrap.min.css" rel="stylesheet">

    <!--Código custom JS para alertify -->
    <script src="<?php echo base_url();?>assets/vendor/alertifyjs/alertify.min.js"></script>

    <script type="text/javascript">
    //override defaults
    alertify.defaults.transition = "slide";
    alertify.defaults.theme.ok = "btn btn-primary";
    alertify.defaults.theme.cancel = "btn btn-danger";
    alertify.defaults.theme.input = "form-control";
    </script>


    
    
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
                <a class="navbar-brand" href='<?php echo base_url();?>admin'>Sistema de Elecciones 2017</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right"> 
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                        <i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>Hospital Zona 1</strong>
                                    
                                </div>
                                <div>Solicita eliminar Prestacion</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>Hospital Zona 2</strong>
                                    
                                </div>
                                <div>Solicita eliminar Prestacion</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>Hospital Zona 3</strong>
                                    
                                </div>
                                <div>Solicita eliminar Prestacion</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>Read All Messages</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-messages -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#"><img src="<?php echo base_url();?>assets/img/user.png" alt="" height="32" width="36">    
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a><i class="fa fa-user fa-fw"></i> Usuario </a>
                        </li>
                        
                        <!--Contiene el id del usuario en modo oculto -->
                        <input id="idUsuario" type="hidden" value="70">
                        
                        <li>             
                        <a href="#"><i class="fa fa-gear fa-fw"></i> Perfil de Usuario</a>
                        </li>
                        <li class="divider"></li>
                        <li class="active"><a href='<?php echo base_url();?>clogin'><i class="fa fa-sign-out fa-fw"></i> Cerrar Sesión</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->

            </ul>
            <!-- /.navbar-top-links -->