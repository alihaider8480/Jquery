$('.event_div').click(function(){

    $('#event_h3').dblclick(function(){
        console.log('you have double click event called using jquery');
    });

    $('#event_h9').hover(function(){
        console.log('you have mouse Over event called using jquery');
    });


    $('#event_h10').on
    ({
        click : function()                  // mouse click function
        {
            console.log('mouse click function called');
        },
        mouseleave: function()              // mouse leave function
        {
            console.log('mouse leave function called');
        }
    });

    $.get('https://www.youtube.com/watch?v=YFlx1C8XwR0' , function(data,status){
    console.log('3333333333333');
});

  

});
  // hide and show method can take 2 arrguments like time and function
$('#hide_and_show').hide(3000 , function()   // 3000 means 3 sec
{
    console.log('Hide Wikipedia');
}); 

$('#hide_and_show').show(3000 , function(){
    console.log('show wikipedia');
});

$('#hide_and_show_button').click(2000 , function(){
    $('#hide_and_show').toggle();                       // toggle function is do if text is hide it will be show if text showing then it do hide
});

$('#hide_and_show_button_fadeOut').click(function(){
    $('#hide_and_show').fadeOut(5000);
});

$('#hide_and_show_button_fadeIn').click(function(){
    $('#hide_and_show').fadeIn(5000);
});

$('#hide_and_show_button_slideToggle').click(function(){  // toggle function is do if text is hide it will be show if text showing then it do hide
    $('#hide_and_show').slideToggle(5000);               // if we don't want to use toggle then we can use slideUp(5000) then slideDown(5000)
});

$('#light_and_bright_animation').click(function(){
    $('#hide_and_show').animate({opacity:0.3} , 4000);
    $('#hide_and_show').animate({opacity:0.9} , 1000);
});

