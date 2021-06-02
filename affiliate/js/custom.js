
			$(".reply").click(function () {
			    var myelement = $(this).attr("data-target")
			    $(myelement).slideToggle("slow");
			    $(".hidden:visible").not(myelement).show();
			
			});
		
		
		
			$('.table').footable();
			
		
		
		
			var clipboard = new ClipboardJS('.copy-btn');
			
			clipboard.on('success', function(e) {
			    console.log(e);
			});
			
			clipboard.on('error', function(e) {
			    console.log(e);
			});
		
		<script type="text/javascript">
			// $('.tab-left').hide();
			
			
				// $('.tab-left ul li span').hide();
				
			
							
			// 			$('#left-side-menu').mouseover(function(){
			
			// 			$('#left-side-menu').addClass('extended');
				
			// 			$('.tab-right').addClass("shorten");
			// 			$('#left-side-menu').find('span').show();
			// 		},delay);
				
			// 		}).mouseout(function(){
			
			// 			 clearTimeout(setTimeoutConst );
			// setTimeoutConst2 = setTimeout(function(){
			// 			$('#left-side-menu').removeClass('extended');
				
			// 			$('.tab-right').removeClass("shorten");
			// 			$('#left-side-menu').find('span').hide();
				 
			// },delay2);
			
			// 		});
			
			
			// clearTimeout(timer);
			$('.tab-left ul li span').hide();
			
			$('.panel-menu-button').on('click',function(){
				// $('.tab-left').toggle('slow');
				if($('.panel-menu-button').hasClass('open')){
				$('.panel-menu-button').removeClass('open');
				$('.panel-menu-button').addClass('close');
				$('.panel-menu-button i').removeClass('left');
				$('.panel-menu-button i').addClass('right');
				$('.tab-right').removeClass('shorten');
				$('.tab-left').removeClass('extended');
				$('.tab-left ul li span').hide();
					
				
				}
				// if($('.tab-left').hasClass('hidden')){
				// 	$('.tab-right').addClass('full-panel-width');
				// }
				else{
					$('.panel-menu-button').addClass('open');
					$('.panel-menu-button').removeClass('close');
				$('.panel-menu-button i').removeClass('right');
				$('.panel-menu-button i').addClass('left');
				$('.tab-right').addClass('shorten');
				$('.tab-left').addClass('extended');
				$('.tab-left ul li span').delay(400).fadeIn(1600);
					
					
				}
			})
			
			
			
		