function setCookie(){
	let name = document.getElementById("fname").value;
	let rollno = document.getElementById("rollno").value;
	let cgpa = document.getElementById("cgpa").value;
	
	console.log(name);
	console.log(rollno);
	console.log(cgpa);

	document.cookie="name=" + name + "; SameSite=None";
	document.cookie="rollno=" + rollno + "; SameSite=None";
	document.cookie="cgpa=" + cgpa + "; SameSite=None";
}