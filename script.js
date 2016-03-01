$(document).ready(function() {
    $("#keyboard-upper-container").hide();

});      
    
    $(this).keydown(function(e){
        if (e.which === 16) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();            
        }
    });
    
    $(this).keyup(function(e){
        if (e.which === 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();  
        }
    })
    
    $(document).keydown(function(e) {
        $("#" + e.which) 
        $("#113").css({ "background": "blue",
               "color": "white"});
    });
        $(document).keyup(function(e) {
        $("#" + e.which) 
        $("#113").css({ "background": "",
               "color": ""});
    });

// to move yellow box - css calculation to change position as letters are typed.