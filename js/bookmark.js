$(document).ready(function() { 
	
	$("#keyword").bind("input propertychange", function(){
		filterKeyword($(this).val());
	});
	
});


function filterKeyword(key){

	//alert(key);
	var reg = new RegExp(key,'gi');
	
	$.ajax({  
        type:"GET",  
        url:"data/bookmarks.json",  
        dataType: "json",  
        success: function(data){
        	
        	if(key == ""){
        		createList(data);
        	} else {
        		
        		var result = data.filter(function(item){
    				return item.title.match(reg);
    			}).map(function(item){
    				item.title = item.title.replace(reg,'<span class="key">$&</span>');
    				return item;
    			});
        		createList(result);
        	}
        },
        error : function(){
        	alert("Request Data Failed...");
        }
	})
	
}


function createList(data){
	
	var result = data.reduce(function(str,item){
		str += "<li class=\"list\"><div class=\"title\">" + item.title 
			+  "</div><div class=\"createDate\">Created@" + item.created 
			+  "</div></li>";
		return str;
	},"");
	//$("#list").empty();
	$("#list").html(result);
}

	

    