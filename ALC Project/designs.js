function makeGrid() {
  console.log()
  
  // Declare the height, width 
  
  var canvas, cell, height, width, tableRows;
  
  canvas = $('#pixelCanvas');

  // Collect the selected input for heightand weight
  
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  

  //Remove all the current values for the children of the id , pixelCanvas which are majorly the inputheight and input weight
  canvas.children().remove()
  
  // for every value of x less than the value chosen by the user, add one more square on the table row

  for (x = 0; x < height; x++) {
  canvas.append('<tr></tr>');
  }
  
  tableRows = $('tr');
  
  for (y = 0; y < width; y++) {
  tableRows.append('<td></td>');
  } 
  

  //Find the all td in the canvas and assign it to the variable cell
  cell = canvas.find('td');
  
  // When any td is clicked on by the user, add the chosen color to it 
  cell.click(function() {
    // Select color input
    console.log();
    var color;
    color = $("#colorPicker").val();
    $(this).attr('bgcolor', color);
  });
  
}

// Call the makegrid() function whenever the user press the submit button
var submit;

submit = $('input[type="submit"]')

submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});
