$(document).ready(function() { 
    var str=location.href.toLowerCase(); 
    $("nav ul li a").each(function() { 
        if (str.indexOf(this.href.toLowerCase()) > -1) {
            $("li.current").removeClass("current"); 
            $(this).parent().addClass("current"); 
        }
    });
})