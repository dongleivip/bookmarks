$(document).ready(function() { 
	
	$("#keyword").bind("input propertychange", function(){
		filterKeyword($(this).val());
	});
	
//	$("#btn_search").click(function(){
//		$.ajax({  
//	        type:"GET",  
//	        url:"data/bookmarks.json",  
//	        dataType: "json",  
//	        success: function(data){  
//	            $.each(data,function(i,item){  
//	                var content = "<li>" + item.title + "</li>" + "<li>" + item.created + "</li>";  
//	                $("#list").append(content);  
//	            })
//	        }  
//		})  
//	}); 
	
});


function filterKeyword(key){

	//alert(key);
	var reg = new RegExp(key,'gi');
	
	$.ajax({  
        type:"GET",  
        url:"data/bookmarks.json",  
        dataType: "json",  
        success: function(data){
        	//alert("success");
        	//return ;
        	
        	createList(data);
        },
        error : function(){
        	alert("请求数据失败");
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
	$("#list").empty();
	$("#list").html(result);
}

	

    