document.getElementById("reset").onclick = function() {
	$(".row div").each(function(){
		$(this).removeClass("painted");
	})
}

$(".row div").hover(function() {
	$(this).addClass("painted");

})

/*
	OdinProject challenge JS/JQuery
	airtonbjunior[at]gmail.com
*/