// @Author: Davi

// Parallax
var elements = [document.getElementsByClassName( 'section-marcante' ), document.getElementsByClassName( 'section-experiencia' )];
    for( var element of elements ) {
        var position = element.offsetTop;
        position = position - 500;
        if( position < 0 ) {
            position = 0;
        }
        document.addEventListener( 'scroll', function( event ) {
            if( window.pageYOffset > position ) {
                element.style.backgroundPositionY = -(window.pageYOffset - position + 500) * 0.15 + 'px';
            }
            // console.log( window.pageYOffset * 0.03 );
        });
    }