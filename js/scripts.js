/*$(document).ready(function() { 
    var str=location.href.toLowerCase(); 
    $("nav ul li a").each(function() { 
        if (str.indexOf(this.href.toLowerCase()) > -1) {
            $("li.current").removeClass("current"); 
            $(this).parent().addClass("current"); 
        }
    });
})*/

jQuery(document).ready(function($){
    var path = window.location.pathname.split("/").pop();
    if (path == '' ) { path = 'index.html'; }
    var target = $('nav a[href="'+path+'"]');
    target.addClass('active');  
});