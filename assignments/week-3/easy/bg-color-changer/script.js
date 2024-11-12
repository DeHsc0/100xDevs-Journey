

document.addEventListener("DOMContentLoaded", function() {
 
  document.getElementById("red").addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
  });

  document.getElementById("yellow").addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
  });

  document.getElementById("black").addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
  });

  document.getElementById("purple").addEventListener("click", function() {
    document.body.style.backgroundColor = "purple";
  });

  document.getElementById("green").addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
  });

  document.getElementById("blue").addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
  });

  // Set default color when the "Default" button is clicked
  document.getElementById("def").addEventListener("click", function() {
    document.body.style.backgroundColor = "#323131";
  });
});

