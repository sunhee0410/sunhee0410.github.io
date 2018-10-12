$( window ).scroll( function() {
  if ( $( this ).scrollTop() > 200 ) {
    $( '.top_button' ).fadeIn();
  } else {
    $( '.top_button' ).fadeOut();
  }
} );



$( '.top_button' ).click( function() {
  $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
  return false;
} );