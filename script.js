// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let ulTag = document.querySelector("main ul");

participants.forEach(participant => {
    //<li><button id="myBtn"><img src="img/cv-photos/Enes/Enes-2.jpg" alt=""></button></li>
        let liTag = document.createElement("li");
    
        let btnTag = document.createElement("button");
        btnTag.setAttribute("id",`show-${participant.name.toLowerCase()}`)
    
        let imgTag = document.createElement("img");
        imgTag.setAttribute("src",participant.image);
        imgTag.setAttribute("loading","lazy");
        imgTag.setAttribute("alt",participant.name);
    
        liTag.appendChild(btnTag);
        btnTag.appendChild(imgTag);
        ulTag.appendChild(liTag);

        // When the user clicks the button, open the modal 
        btnTag.onclick = function() {
            modal.style.display = "block";
            //to do - add content according to the steps above - createElement, setAttribute, add textContent, append Child
        }
    });


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