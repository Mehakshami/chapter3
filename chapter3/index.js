// Question 1 :
var age = 17
alert =("I am"+age +"years old")


// Question 2:
let count =localStorage.getItem("visitcount")|| 0;
count++; localStorage.setItem("visitcount",count);
document.body.innerHTML =`you have visited this site ${count} times."<br>"`


// Question 3:
let birthYear = 1990;
document.write("My birth year is " + birthYear + ".<br>");
document.write("Data type of my declared variable is " + typeof birthYear + "<br>" );


var  Visitors_name ="Visitors_name : John Doe"
var Producttitle ="Producttitle: Mehak"
var Quantity="Quantity: 5 T-shirt(s)"
document.write( Visitors_name +"<br>" );
document.write(Producttitle +"<br>" );
document.write(Quantity +"<br>" );
