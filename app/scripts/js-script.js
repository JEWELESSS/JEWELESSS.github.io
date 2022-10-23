function buttonClick() {
			alert('Добро пожаловать')
		}	
		function buttonClick1(){
			alert('Да, это я')
		}
		function buttonClick2(){
			alert('Тут интересно')
		}

		var h3Showed = false;

		function changeDisplay() {
			const header3 = document.getElementById("1");
			header3.style.display=h3Showed ? 'block' : 'none';
			h3Showed = !h3Showed;
		}