$(document).ready(function(){
    $('#content1').hide();

    $('#content2').css({
        "background-color": "#000",
        "color": "#fff"
    });

    $('#content2').on('click', function(){
        $(this).fadeOut('slow');
    });

    $('#content3').on('click', function(){
        $('#content2').fadeIn('slow')
    });

    let fourBig = false;
    $('#content4').on('click', function(){
        if(fourBig){
            $(this).width('50px');
            $(this).height('50px');
            fourBig = false;
        } else{
            $(this).width('400px');
            $(this).height('400px');
            fourBig = true;
        }
    });
});