// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
   $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            console.log(response);
            $("body").append("<img src=" + "https://media3.giphy.com/media/4nGYmLsCoHNXa/200w.gif?cid=" +search +  "e1bb72ff5ca5184f78614f724d030c1e"
            + ">");
            var search= $("input").val();
            
            console.log(search);
            
            
        
        }
    }); 
  
  
});

































