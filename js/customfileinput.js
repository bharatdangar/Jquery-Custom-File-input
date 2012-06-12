/*--------------------------------------------------------------//
// 	CustomFile Input - jQUERY Plugin for Custome File design 	//
//                                                	 			//
//  Author: Bharat Dangar (bharatdangar@gmail.com) 				//
//  Version: 1.0                                   				//	
//  Date: 09-Mar 2012                                			//	
//  License: GNU General Public License v2.0       				//
//                                                				//
----------------------------------------------------------------*/
;(function($){
/*----------------------------------------------------------------------------------------------------*/
	$.fn.extend({
		//Plugin Code Start here
		customFileinput: function(options){
			
			//Set Default setting for plugin
			var defaults = {
                buttiontext : 'Send',
				customboxwidth : 400,
				customboxclass : 'customfile',
				fileinputclass : 'fileinput'
            };
			
			//Define Default option using extend 
            var options = $.extend(defaults, options);
			
			var fileinput = $(this).find('input[type=file]');
			fileinput.addClass(options.fileinputclass); //adding Class in to File input
			fileinput.css({opacity:0}); // Hide File input
			
			//create Element for custom design
			var customfile = $('<div class="'+options.customboxclass+'"></div>'); //custome file wrapper
			var cfilefield = $('<span class="cust-field"></span>'); //custome file field
			var cfilebutton = $('<span class="cust-btn"></span>').text(options.buttiontext); //custome file button
			
			//Adding file name In Custome design
			fileinput.bind('change', function(){
				var filename = $(this).val().split(/\\/).pop();
				$(this).next().next(cfilefield).text(filename); 
			})
			
			//Implement HTML object For Custom Design
			fileinput.wrap(customfile);
			fileinput.after(cfilebutton);
			fileinput.next(cfilebutton).after(cfilefield);
			var movebox = customfile.attr('class');
			
			//Follow Mouse in custom file block area region
			$("."+movebox).bind('mousemove',function(e){ 
				var offleft = $(this).offset().left;
				var offtop = $(this).offset().top;
				var leftpos =  e.pageX - offleft - 190;
				var toppos =  e.pageY - offtop-5 ;
				$(this).find('input[type=file]').css({left: leftpos, top: toppos});
			}).bind('mouseout', function(e){
				$(this).find('input[type=file]').css({left: 0, top: 0});
			}).width(options.customboxwidth);
		}
	});
/*----------------------------------------------------------------------------------------------------*/	
})(jQuery);
