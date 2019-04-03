// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
     var search= $("input").val();
    var request_url ="https://api.giphy.com/v1/gifs/search?q=" + search + "&rating=pg&api_key=dc6zaTOxFJmzC";
   $.ajax({
        url: request_url,
        method: "GET",
        success: function(response) {
            console.log(response);
            $("body").append("<img src=" + "https://media3.giphy.com/media/4nGYmLsCoHNXa/200w.gif?cid=" +search +  "e1bb72ff5ca5184f78614f724d030c1e"
            + ">");
           
            
            console.log(search);
            
            
        
        }
    }); 
  
  
});

































