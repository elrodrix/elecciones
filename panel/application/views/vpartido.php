<div id="page-wrapper">
	<div class="container-fluid">
		<div class="row">
			<h1 class="page-header">Alta de Partido</h1>
			<section>
				<div id="logform">
					<form name="form" id="form" action="<?php echo base_url();?>cpartido/guardar" method="POST">
						<dl>
							<dt>
								<label>Nombre de Partido: </label>
							</dt>
							<dd>
								<input class="form-control" type="text"  name="txtNombre" id="txtNombre" style="text-transform:uppercase">
							</dd>							
						</dl>
						<button class="btn btn-primary" type="submit" id="btnAltaPartido" name="send" disabled>Guardar</button>
					</form>
				</div>				
			</section>
		</div>
	</div>
</div>


	