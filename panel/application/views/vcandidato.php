<div id="page-wrapper">
	<div class="container-fluid">
		<div class="row">
			<h1 class="page-header">Alta de Candidato</h1>
			<section>
				<div id="logform">
					<form name="form" id="form" action="<?php echo base_url();?>ccandidato/guardar" method="POST">
						<dl>
							<dt>
								<label>Nombre: </label>
							</dt>
							<dd>
								<input class="form-control" type="text"  name="txtNombre" id="txtNombre" style="text-transform:uppercase">
							</dd>
							<dt>
								<label>Apellido: </label>
							</dt>
							<dd>
								<input class="form-control" type="text" name="txtApellido" id="txtApellido" style="text-transform:uppercase">
							</dd>
							<dt>
								<label>Bio: </label>
							</dt>
							<dd>
								<input class="form-control" type="text" name="txtBio" id="txtBio" style="text-transform:uppercase">
							</dd>
							<dt>
								<label>Seleccione un Cargo: </label>
							</dt>
							<dd>
								<select name="txtCargo" class="form-control">
									<?php 
										foreach ($cargo as $fila) {
										echo '<option value="' .$fila->idcargo. '">' . $fila->descripcion . '</option>';
									} ?>
								</select>

							</dd>
							
						</dl>
						<button class="btn btn-primary" type="submit" id="btnAltaCandidato" name="send" disabled>Guardar</button>
					</form>
				</div>				
			</section>
		</div>
	</div>
</div>


	