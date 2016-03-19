function loadStyle(href){
    // avoid duplicates
    for(var i = 0; i < document.styleSheets.length; i++){
        if(document.styleSheets[i].href == href){
            return;
        }
    }
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    head.appendChild(link);
}

loadStyle('https://brachamul.github.io/sequoia-image-animator/styles.css')

function runScript() {
	// On regarde si jQuery est chargé, sinon on patiente un peu
	if( window.jQuery ) {
		// jQuery est chargé !
		jQuery( document ).ready(function(){

			jQuery('.bigimage-deploys').click(function(){
				jQuery(this).toggleClass('active')
			})

		})

	} else {
		// jQuery n'est pas chargé, on retente dans 50 milisecondes
		window.setTimeout( runScript, 50 )
	}
}

runScript()



//	function runScript() {
//		// On regarde si jQuery est chargé, sinon on patiente un peu
//		if( window.jQuery ) {
//			// jQuery est chargé !
//			jQuery( document ).ready(function(){
//	
//				jQuery('.bigimage-deploys').click(function(){
//					jQuery(this).toggleClass('active')
//				})
//	
//		//		jQuery("head").append("<link rel='stylesheet' href='' type='text/css' media='screen'>");
//	
//			})
//	
//		} else {
//			// jQuery n'est pas chargé, on retente dans 50 milisecondes
//			window.setTimeout( runScript, 50 )
//		}
//	}
//	
//	runScript()