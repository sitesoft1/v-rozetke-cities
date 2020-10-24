function city_popup(act)
{   
    if(act == 'show')
    {
        //$('#' + localStorage.getItem("myKey")).addClass("active");
        $('.fixed-overlay').show();
        $('#city_popup').show(); 
        
        $('#city_popup').animate({
            top: 100
        });
    }
    else
    {
        $('#city_popup').animate(
            { top: -100}, function() 
            { $('.fixed-overlay').hide(); }
        );
    }

    return false;
}

function change_city(name)
{   
    //var city_name = $('#' + name + ' a').attr('title');
    var city_name = name;
    city_name = '<img src="catalog/view/theme/oct_ultrastore/img/location-arrow.svg" class="us-navbar-account" alt="" />'+'<span class="hidden-xs">Ваш город: </span>'+'<span class="hidden-xs city_name">'+city_name+'</span>';
    
    //$('.containerss').find('div').hide();  
    //$('.list li').removeClass('active');    
    localStorage.setItem("myKey", name);
    localStorage.setItem("cityName", city_name);    

    //$('.' + name).show();
    //$('#' + name).addClass("active");
    
    $('#city_selected').html(city_name);
    
    city_popup('hide');
    
    return false;
}