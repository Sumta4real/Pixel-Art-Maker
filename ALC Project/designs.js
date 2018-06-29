
    
  	const height = $('#inputHeight').val();
  	const width = $('#inputWeight').val();

  	 function makeGrid(x,y){
  	for (var i = 1; i<= height; i++){
  		$('pixelCanvas').append('<tr></tr>');

  		for (var j = 1; i<= width; j++);{
  			$('tr').append('<td></td>');
  		}
  	}
  
  	$('#sizePicker').on('click',makeGrid(height, width));
 
 /* 		event.preventDefault();
  		makeGrid(height, width);

  	})

  	Console.log(makeGrid(height, width);
*/