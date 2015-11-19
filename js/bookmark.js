$(document).ready(function() { 

	$("#btn_search").click(function(){
		$.ajax({  
        type:"GET",  
        url:"data/bookmarks.json",  
        dataType: "json",  
        success: function(data){  
            $.each(data,function(i,item){  
                var content = "<li>" + item.title + "</li>" + "<li>" + item.created + "</li>";  
                $("#list").append(content);  
            })  
        }  
    })  
	});  
});
	

    