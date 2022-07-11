function setCookie(){
	let name = document.getElementById("name").value;
	let rollno = document.getElementById("rollno").value;
	
	console.log(name);
	console.log(rollno);

	document.cookie="name="+name;
	document.cookie="rollno="+rollno;
	
	console.log(document.cookie);
}