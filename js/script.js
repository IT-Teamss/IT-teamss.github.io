
window.addEventListener("load",function(){
	
	var toggle = document.querySelector(".menu_toggle");
	
	menu = document.querySelector(".section_1 .menu");
	
	toggle.addEventListener("click",show_hide_menu);
});

function show_hide_menu(){
	if(menu.style.display=='none'|| menu.style.display==""){
		menu.style.display='block';
	}
	else{
		menu.style.display='none';
	}
}

