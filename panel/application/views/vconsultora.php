<div id="page-wrapper">
	<div class="container-fluid">
		<div class="row">
			<h1 class="page-header">Alta de Consultora</h1>
			<section>
				<div id="logform">
					<form name="form" id="form" action="<?php echo base_url();?>cconsultora/guardar" method="POST">
						<dl>
							<dt>
								<label>Nombre de Consultora: </label>
							</dt>
							<dd>
								<input class="form-control" type="text"  name="txtConsultora" id="txtConsultora" style="text-transform:uppercase">
							</dd>							
						</dl>
						<button class="btn btn-primary" type="submit" id="btnAltaConsultora" name="send" disabled>Guardar</button>
					</form>
				</div>				
			</section>
		</div>
	</div>
</div>


	