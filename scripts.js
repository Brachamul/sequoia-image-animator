function runScript() {
	// On regarde si jQuery est chargé, sinon on patiente un peu
	if( window.jQuery ) {
		// jQuery est chargé !
		jQuery( document ).ready(function(){

			jQuery('.bigimage-deploys').click(function(){
				jQuery(this).toggleClass('active')
			})

			$("head").append("<link rel='stylesheet' href='https://gist.githubusercontent.com/Brachamul/e3a12e19ef00ba47c8ff/raw/ae9dc74e8b203b036f2a7a21f9aeb6a4a882860f/styles.css' type='text/css' media='screen'>");

		})

	} else {
		// jQuery n'est pas chargé, on retente dans 50 milisecondes
		window.setTimeout( runScript, 50 )
	}
}

runScript()