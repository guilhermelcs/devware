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


//Aumentado altura do textArea dinamicamente
$( 'document' ).ready(function() {
    var default_height = $("#message-box").css('height');
    $("#message-box").on('input', function() {
        var scroll_height = $("#message-box").get(0).scrollHeight;
        $("#message-box").css('height', scroll_height + 'px');
        
        console.log(default_height)
        if( $( this ).val() === '' ) {
            $("#message-box").css('height', default_height );
        }
    });
});

//Escondendo ícone de Wpp em seções full-screen
$( 'document' ).ready(function() {
    let div_sobre_position = $('#sobre').offset().top;
    $( window ).scroll( function() {
        let wpp_btn_position = $('#whatsapp-btn').offset().top;
        if( wpp_btn_position > div_sobre_position) {
            $('#whatsapp-btn').css('opacity', 1);
            $('#whatsapp-btn').css('pointerEvents', 'auto');
        }
        else {
            $('#whatsapp-btn').css('opacity', 0);
            $('#whatsapp-btn').css('pointerEvents', 'none');
        }
    });
});