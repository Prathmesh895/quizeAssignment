
function select_button1() {
  //Move to another page
  alert("You will redirect to Quiz \r Timer will be started ");
  window.location.href = "Quize_Questions.html";

}
/*function getname(){
  var userName=document.getElementById('nameInput');
  var yourname=userName.value.trim();
  if(yourname===""){
    alert("Please insert Your Name")
    return;
  }
  var Enteredname =document.getElementById('username');
  Enteredname.textcontent="Hello" +yourname+ "!" ;
 }*/
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
/*const UserName = document.getElementById('UserName');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const User_Name = UserName.value;
  localStorage.setItem('Username', User_Name);
})*/


