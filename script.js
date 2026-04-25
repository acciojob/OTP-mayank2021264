//your JS code here. If required.
let inputArr = document.querySelectorAll('.code');
console.log(inputArr);

inputArr.forEach((item) => {
	inputArr[0].focus();

	item.addEventListener('input', focusNext);
	item.addEventListener('keydown', focusBack);
});

function focusNext(){
	let arr = [...inputArr];
	let currIndex = arr.indexOf(this);
	
	if(this.value !== "" && currIndex < arr.length-1){
		arr[currIndex+1].focus();
	}
}
function focusBack(event){
	let arr = [...inputArr];
	let currIndex = arr.indexOf(this);

	if(event.key === "Backspace"){
		if(this.value==="" && currIndex>0){
			arr[currIndex-1].focus();
		}
	}
}