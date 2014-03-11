$(document).ready(function () {
    $('.tab').hide();
    $('#one').show();
    $('#onet').addClass("active");
    
    $('#onet').on('click', function(){
        $('.tab').hide();
        $(".ui.step").removeClass("active")
        $('#one').show();
        $('#onet').addClass("active");
    });
    $('#twot').on('click', function(){
        $('.tab').hide();
        $(".ui.step").removeClass("active")
        $('#two').show();
        $('#twot').addClass("active");
    });
    $('#threet').on('click', function(){
        $('.tab').hide();
        $(".ui.step").removeClass("active")
        $('#three').show();
        $('#threet').addClass("active");
    });
    $('#fourt').on('click', function(){
        $('.tab').hide();
        $(".ui.step").removeClass("active")
        $('#four').show();
        $('#fourt').addClass("active");
    });          













});
