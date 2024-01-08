function myform(){
	var fn=document.getElementById("firstname").value;
	var ln=document.getElementById("lastname").value;
	var cont=document.getElementById("contact").value;
	var id=document.getElementById("id").value;

	var result =  "First Name: " + fn + "\n" +
                   "Last Name: " + ln + "\n" +
                   "Phone Number: " + cont + "\n" +
                   "Email ID: " + id;

	alert(result);
}

