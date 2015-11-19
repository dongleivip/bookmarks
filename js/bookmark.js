
$(function(){
	$("#btn_search").click(function(){
		$.ajax({
			type:"post",
			dataType:"json",
			url:"bookmarks.json",
			success:function(bookmarks){
				var str = "";
				for(i in bookmarks){
					str += "<li>" + bookmarks[i].title + "</li>";
					str += "<li>" + bookmarks[i].created + "</li>";
				}

				$("#list").append(str);
			
			}
		});
	});
	
});