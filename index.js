function setCookie(){
	let name = document.getElementById("fname").value;
	let rollno = document.getElementById("rollno").value;
	let cgpa = document.getElementById("cgpa").value;
	
	console.log(name);
	console.log(rollno);
	console.log(cgpa);

    let c = cookie="name=" + name + "; rollno=" + rollno + "; cgpa=" + cgpa + ";SameSite=Lax";
    
	document.cookie=c;
	
	console.log(document.cookie);
}