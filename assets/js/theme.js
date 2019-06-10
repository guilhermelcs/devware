// @Author: Davi

// O VERDADEIRO Parallax
var elements = document.getElementsByClassName( 'parallax' );

    for( let element of elements ) {
        let position = element.offsetTop;
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

$( 'document' ).ready(function() {
    $('#menu-icon, .menu-cover').hover( function() {
        $('.menu-cover, .menu-list').addClass('appear');
    }, function(){
        $('.menu-cover, .menu-list').removeClass('appear');
    });
});