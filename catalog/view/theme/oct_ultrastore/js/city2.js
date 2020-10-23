$(document).ready(function(){

    if (localStorage.getItem("myKey")) 
    {
        var stored_select = localStorage.getItem("myKey");
        var city_name = localStorage.getItem("cityName");

        $('.' + stored_select).show();
        //$('#city_selected').html('<img src="catalog/view/theme/oct_ultrastore/img/location-arrow.svg" class="us-navbar-account" alt="" />'+'<span class="hidden-xs">Ваш город: </span>'+'<span class="hidden-xs city_name">'+city_name+'</span>');
        $('#city_selected').html(city_name);
    }
    else 
    {
        $('.achinsk').show();
        $('#city_selected').html('<img src="catalog/view/theme/oct_ultrastore/img/location-arrow.svg" class="us-navbar-account" alt="" />'+'<span class="hidden-xs">Ваш город: </span>'+'<span class="hidden-xs city_name">'+'Ачинск'+'</span>');
    }
});

$("#selectItem").change(function(){
    $('.containerss').find('div').hide();
    var selected = $('#selectItem option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});  