document.querySelectorAll(".ds2c-accordion-switcher").forEach(function(cur,index){
	cur.toggleActive = function(itemNumber){
		//number selectors
		Array.from(cur.children[0].children).forEach(function(tab, index){
			tab.classList.remove('ds2m-active');
		});
		cur.children[0].children[itemNumber].classList.add('ds2m-active');
		//tabs
		Array.from(cur.children[1].children).forEach(function(tab, index){
			tab.classList.remove('ds2m-active');
		});
		cur.children[1].children[itemNumber].classList.add('ds2m-active');
		//images
		Array.from(cur.children[2].children[0].children).forEach(function(tab, index){
			tab.classList.remove('ds2m-active');
		});
		cur.children[2].children[0].children[itemNumber].classList.add('ds2m-active');
	}
	Array.from(cur.children[1].children).forEach(function(tab, index){
		tab.addEventListener("click", function(){cur.toggleActive(index)});
	});
	Array.from(cur.children[0].children).forEach(function(tab, index){
		tab.addEventListener("click", function(){cur.toggleActive(index)});
	});
	cur.toggleActive(0);
});
