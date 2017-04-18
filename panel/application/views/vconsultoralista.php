<div id="page-wrapper">
	<div class="container-fluid">
		<div class="row">
			<h1 class="page-header">Listado de Consultoras</h1>
			<section>				
				<div class="row">
					<section>
						<div class="col-lg-12">
		                    <div class="panel panel-green">
		                        <div class="panel-heading">
		                            Resultado de Busqueda
		                        </div>
		                        <!-- /.panel-heading -->
		                        <div class="panel-body">
		                            <div class="table-responsive">
		                                <table class="table table-striped" id="tblResultado">
		                                    <thead>
		                                        <tr>		          
		                                            <th><h4>CODIGO</h4></th>
		                                            <th><h4>DESCRIPCION</h4></th>
		                                            <th><h4>INFORMACION</h4></th>
		                                        </tr>
		                                    </thead>
		                                    <tbody>
		                                    <?php
		                                    	foreach ($consultora as $key) {
		                                    		echo '<tr>';
		                                    		echo '<th>'.$key->idconsultora.'</th>';
		                                    		echo '<th>'.$key->descripcion.'</th>';
		                                    		echo '<th>MAS DATOS?</th>';
		                                    		echo '</tr>';
		                                    	}		                                    	
		                                    ?>
		                                    </tbody>
		                                </table>
		                            </div>
		                            <!-- /.table-responsive -->
		                        </div>
		                        <!-- /.panel-body -->
		                    </div>
		                    <!-- /.panel -->
		                </div>
					</section>			
				</div>
			</section>
		</div>
	</div>
</div>