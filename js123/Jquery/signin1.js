$(document).ready(function () {
    let matched = false;

    function cheakUser() {
    let nme = $("#Name").val();
    let pss = $("#psw").val();

    let nme1 = localStorage.getItem("usname");
    let pss1 = localStorage.getItem("pass");

    if (nme===nme1 && pss===pss1) {
      
      console.log(nme1);
      console.log(pss1);
      console.log(nme);
      console.log(pss);

    } else {
      console.log("Not working");
    }
  }

  $("#btn2").click(function(){
    cheakUser();

   

    /*if(matched==true){
        alert("Sign In Sussecfully");
        console.log(nme1);
        console.log(pss1);
    }else{
        alert("Please Enter Correct id and password");
    }*/

  });

});
