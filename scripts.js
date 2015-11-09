function runScript() {
	// On regarde si jQuery est chargé, sinon on patiente un peu
	if( window.jQuery ) {
		// jQuery est chargé !
		jQuery( document ).ready(function(){

			jQuery('.bigimage-deploys').click(function(){
				jQuery(this).toggleClass('active')
			})

			$("head").append("<link rel='stylesheet' href='https://brachamul.github.io/sequoia-image-animator/styles.css' type='text/css' media='screen'>");

		})

	} else {
		// jQuery n'est pas chargé, on retente dans 50 milisecondes
		window.setTimeout( runScript, 50 )
	}
}

runScript()