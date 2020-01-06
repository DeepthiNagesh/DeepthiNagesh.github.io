document.getElementById("myModal").style.height = window.innerHeight;
document.getElementById("myModal").style.width = window.innerWidth;


var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal

function displayImage(ele) {
  modal.style.display = "block";
  var img=document.getElementById("sourceimage");
  img.src=ele.src;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}