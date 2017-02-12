var height = 800;
var width = 800;
var x = 5;

function changeGrid(x) {
  //X is the amount of boxes in each row and column
  jQuery("#etch").html('');
  for (i = 0; i < x; i++) {
    var row = document.createElement("div");
    row.className = "row";
    for (cell = 0; cell < x; cell ++){
      var square = document.createElement('div');
      square.className = "square"
      square.style.height = (height / x) + "px";
      square.style.width = (width / x) + "px";
      row.appendChild(square);
    }
    document.getElementById("etch").appendChild(row);
  }
}

$(document).ready(function() {
  changeGrid(x);

  $("#reset_button").click(function(event) {
    x = $("#numberBoxes").val();
    changeGrid(x);
  });

  $('.btn-group .btn').on("click",function(){
     color = this.id;
  })

  var color = "black";
  $( ".square" ).hover(function() {
    $(this).removeClass();
    $(this).addClass("square");
    $(this).addClass(color);
  }, function() {
    /* Stuff to do when the mouse leaves the element */
  });
});
