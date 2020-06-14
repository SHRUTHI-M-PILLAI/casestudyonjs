let userid=document.getElementById("userid");
let pwd=document.getElementById("pwd");


function validate(checkvalidation){
    if ((userid.value=="admin") && (pwd.value=="12345"))
    {
      checkvalidation();
      return true;
    }
   else
   {
     alert("wrong inputs");
      return false;
    }
}

function checkvalidation(){
  window.location.assign("./home.html");
}
