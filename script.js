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
    

    
        $(this).keydown(function(e){
        if (e.which === 74) {
            $("e").id = j

    });
    
    
    
    
        // console.log(e.which); 
    
    //     $(this).keyup(function(e){
    //     if (e.which === 16) {
    //         $("#keyboard-upper-container").hide();
    //         $("#keyboard-lower-container").show();  
    //     }
    // })
    
    //e.which
   //change ids to numbers
  //on click, change css for button background color to blue and letter on button to white
  
  //when we press a key, add a class to the dom - highlight
  //corresponding ascii with id for key
  
  //change ascii to symbol
  
  
    // $(".well well-lg key").keypress(function(e) {
    // $(this).append($(this).css({
    // "background-color": "blue",
    // "color": "white"
    // }));
    
    
// e.which
// make a class "highlight" that has the css for what would happen when you press a key,
// keyup
    

//     event listener for a keypress -->function(e) {
//         console.log(e.which);
//         charCode(54) will become A or whatever
//     }
    
// turn ascii into text