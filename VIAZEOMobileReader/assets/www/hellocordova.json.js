    function JSONLoader(){
    	$.getJSON('http://viazeo.alwaysdata.net/api/users?user=phil', function(data) {
    		  var items = [];
				
    		  
    		  
    		  
    		  $.each(data, function(key, val) {
    			 // alert(val);
    		    items.push('<li id="' + key + '">' + val + '</li>');
    		  });
    		   
    		  $('<ul/>', {
    		    'class': 'my-new-list',
    		    html: items.join('')
    		  }).appendTo('#home_content');
    		});
    }