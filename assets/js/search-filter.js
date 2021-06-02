$(document).ready(function(){
	$('#level').on('change', function() {
	  var val = $(this).val();
	  var typeVal = $('#type').val();
	  if ( val == '00'){
	  if(typeVal == '000'){
		  $(".textIc").show();
	  }else{
		$('.textIc').each(function(){
		  if($(this).children("p").text().indexOf(typeVal)!==-1){
			$(this).show();
		  }else{
			$(this).hide();
		  }
		});
	   }
	  }else{

		$('.textIc').each(function(){
		  if($(this).children("p").text().indexOf(val) !==-1 && (typeVal=='000' || $(this).children("p").text().indexOf(typeVal)!==-1)){
			$(this).show();
		  }else{
			$(this).hide();
		  }
		});
	  }
	});
  });

  $(document).ready(function(){
	$('#type').on('change', function() {
	  var val = $(this).val();
	  var levelVal = $('#level').val();
	  if ( val == '000'){
		  if(levelVal == '00'){
			  $(".textIc").show();
		}else{
		  $('.textIc').each(function(){
			if($(this).children("p").text().indexOf(levelVal)!==-1){
			  $(this).show();
			}else{
			  $(this).hide();
			}
		  });
		 }
	  }else{

		$('.textIc').each(function(){
		  if($(this).children("p").text().indexOf(val) !==-1 && (levelVal=='00' || $(this).children("p").text().indexOf(levelVal)!==-1)){
			$(this).show();
		  }else{
			$(this).hide();
		  }
		});
	  }
	});
  });

  $(document).ready(function(){
	$('#num').on('change', function() {
	  var val = $(this).val();
	  var levelVal = $('#level').val();
	  if ( val == '000'){
		  if(levelVal == '00'){
			  $(".textIc").show();
		}else{
		  $('.textIc').each(function(){
			if($(this).children("p").text().indexOf(levelVal)!==-1){
			  $(this).show();
			}else{
			  $(this).hide();
			}
		  });
		 }
	  }else{

		$('.textIc').each(function(){
		  if($(this).children("p").text().indexOf(val) !==-1 && (levelVal=='00' || $(this).children("p").text().indexOf(levelVal)!==-1)){
			$(this).show();
		  }else{
			$(this).hide();
		  }
		});
	  }
	});
  });