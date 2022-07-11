function setCookie(){
	let name = document.getElementById("fname").value;
	let rollno = document.getElementById("rollno").value;
	let cgpa = document.getElementById("cgpa").value;
	
	console.log(name);
	console.log(rollno);
	console.log(cgpa);

	document.cookie="name=" + name;
	document.cookie="rollno=" + rollno;
	document.cookie="cgpa=" + cgpa;
}