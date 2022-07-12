function setCookie(){
	let name = document.getElementById("name").value;
	let rollno = document.getElementById("rollno").value;
	
	console.log(name);
	console.log(rollno);

	document.cookie="name=" + name + "; expires=Thu, 1 Dec 2022 12:00:00 UTC";
	document.cookie="rollno="+rollno  + "; expires=Thu, 1 Dec 2022 12:00:00 UTC";;
	
	console.log(document.cookie);
}
