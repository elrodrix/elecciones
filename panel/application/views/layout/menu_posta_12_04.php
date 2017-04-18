			
<?php $var1 =  $this->session->userdata('s_rol');?>

            <div class=" collapse navbar-collapse sidebar" role="navigation">
                <div class="sidebar-nav ">
                    <ul class="nav" id="side-menu">
                        
						<li>
                            <a href='<?php echo base_url();?>admin'><i class="fa fa-home fa-fw"></i> Página Principal</a>
                        </li>
						
                                                
                        <li>
                            <a href='#'><i class="fa fa-money fa-fw"></i> Expediente<span class="fa arrow"></span></a>
                             <ul class="nav nav-second-level collapse">
                                 <?php 
                                 if ($var1 == 1){
                                ?>
                                    <li>
                                        <a href='<?php echo base_url();?>ciniciarexpediente'>Iniciar Ejem 1</a>
                                    </li>                                    
                                    <li>
                                        <a href='<?php echo base_url();?>cexpediente'>ANTERIOR</a>
                                    </li>
                                    <li>
                                        <a href='<?php echo base_url();?>cexpconsulta'>Consulta ANTERIOR</a>
                                    </li>
                                     <li>
                                    <a href="#">Gestion de Prestacion <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="<?php echo base_url();?>cgestaddpres">Agregar Prestacion</a>
                                        </li>
                                        <li>
                                            <a href="#">Eliminar Prestacion</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                                <?php
                                }else{
                                ?>
                                    <li>
                                        <a href='<?php echo base_url();?>ciniciarexpediente'>Iniciar</a>
                                    </li>

                                    <li>
                                        <a href='<?php echo base_url();?>cexpconsulta'>Consultar</a>
                                    </li>
                                <?php } ?>
                            </ul>
                        </li>
                        
                        
                        <li>
                            <a href="#"><i class="fa fa-tasks fa-fw"></i> Paciente<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href='<?php echo base_url();?>cpaciente'>Agregar</a>
                                </li>
                                <li>
                                    <a href='<?php echo base_url();?>clistarpaciente'>Listar</a>
                                </li>
                            <?php 
                            if ($var1 == 1){
                            ?>
                                <li>
                                    <a href='#'>Eliminar</a>
                                </li>
                            <?php } ?>                                                             
                            </ul>
                        </li>
                        
                        <li>
                            <a href="#"><i class="fa fa-shopping-cart fa-fw"></i> Prestaciones<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <?php
                                    if ($var1 == 1){
                                    ?>
                                        <li>
                                            <a href='<?php echo base_url();?>cprestacion'>Agregar</a>
                                        </li>
                                        <li>
                                            <a href='#'>Editar</a>
                                        </li>
                                        <li>
                                            <a href='<?php echo base_url();?>clistarprestacion'>Listar</a>
                                        </li>
                                    <?php
                                    }else{
                                    ?>
                                        <li>
                                            <a href='<?php echo base_url();?>clistarprestacion'>Listar</a>
                                        </li>
                                <?php } ?>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                       

                        <li>
                            <a href="#"><i class="fa fa-tasks fa-fw"></i> Categorias<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href='<?php echo base_url();?>ccategoria'>Agregar</a>
                                </li>
                                <li>
                                    <a href='#'>Editar</a>
                                </li>
                                <li>
                                    <a href='<?php echo base_url();?>clistarcategoria'>Listar</a>
                                </li>
                                
                            </ul>
                        </li>



                        
                        
                        <li>
                            <a href="#"><i class="fa fa-truck fa-flip-horizontal fa-fw"></i> Obra Social<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href='<?php echo base_url();?>cobrasocial'> Agregar
                                    </a>
                                </li>
                                <li>
                                    <a href='<?php echo base_url();?>clistarobrasocial'>Listar</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        
                        <li>
                            <a href="#"><i class="fa fa-line-chart fa-fw"></i> Seguro<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href='<?php echo base_url();?>cseguro'>Agregar</a>
                                </li>
                                <li>
                                    <a href='<?php echo base_url();?>clistarseguro'>Listar</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        
                        <?php
                            if ($var1 == 1){
                        ?>
                            <li>
                                <a href="#"><i class="fa fa-cog fa-fw"></i> Config. del Sistema<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level collapse">
                                     <li>
                                        <a href='#'>Parámetros <i class="fa fa-wrench" aria-hidden="true"></i>
                                        </a> 
                                    </li>
                                    
                                    <li>
                                        <a href='#'>Usuarios</a>    
                                    </li>
                                </ul>
                                <!-- /.nav-second-level -->
                            </li>
                        <?php } ?>
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

</div><!-- Fin "wrapper" -->


<!--<br>
<br>
<br>-->

