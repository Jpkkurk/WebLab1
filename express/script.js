
 // Automatic Slideshow - change image every 4 seconds
    var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);    
    }

    // Used to toggle the menu on small screens when clicking on the menu button
    function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
    }
        
    var modal = document.getElementById('ticketModal');
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
    $(document).ready(function () {
        $("#changeColorButton").click(function () {
            $("#band").css("background-color", "red");
        });
    });
    $(document).ready(function () {
        $(".animate-me").hide().fadeIn(1000);
    });
    
    document.getElementById("ticket-button").addEventListener("click", function () {
        alert("Tickets aren't available right now, come back later.");
    });

    