function submit() {
  let name = document.getElementById("usname");
  let mailid = document.getElementById("mail");
  let conum = document.getElementById("num");
  let passw = document.getElementById("pass");

  let lowcaslet = /[a-z]/g;
  let uppcslet = /[A-Z]/g;
  let num = /[0-9]/g;
  let chmail = ["@", "gmail.com"];
  let flag = 0;

  if (name.value.length == 0) {
    alert("Please Enter Username");
  } else if (mailid.value.length == 0) {
    alert("Please Enter mail id");
  } else if (
    (!mailid.value.match(chmail[0]) && !mailid.value.match(chmail[1])) ||
    !mailid.value.match(chmail[0]) ||
    !mailid.value.match(chmail[1])
  ) {
    alert("Please Enter a valid email");
  } else if (conum.value.length == 0) {
    alert("Please Enter contact number");
  } else if (
    !conum.value.match(num) &&
    conum.value.match(uppcslet) &&
    conum.value.match(lowcaslet)
  ) {
    alert("Please Enter a valid contact number");
  } else if (
    (!conum.value.match(num) && conum.value.match(lowcaslet)) ||
    (!conum.value.match(num) && conum.value.match(uppcslet))
  ) {
    alert("Please Enter a valid contact number");
  } else if (
    conum.value.match(num) &&
    conum.value.match(uppcslet) &&
    conum.value.match(lowcaslet)
  ) {
    alert("Please Enter a valid contact number");
  } else if (
    (conum.value.match(num) && conum.value.match(lowcaslet)) ||
    (conum.value.match(num) && conum.value.match(uppcslet))
  ) {
    alert("Please Enter a valid contact number");
  } else if (conum.value.length > 10) {
    alert("Please Enter a Valid contact number");
  } else if (conum.value.length < 10) {
    alert("Please Enter a Valid contact number");
  } else if (passw.value.length == 0 || passw.value.length < 4) {
    alert("Please Enter a valid Password");
  }
  else{
    localStorage.setItem('usname', name.value);
    localStorage.setItem('mail', mailid.value);
    localStorage.setItem('num', conum.value);
    localStorage.setItem('pass', passw.value);
    flag = 1;
  }

  if(flag){
    alert("Account Created Succesfully");
    let nm = localStorage.getItem('usname');
    let mai = localStorage.getItem('mail');
    let con = localStorage.getItem('num');
    let ps = localStorage.getItem('pass');

    //document.getElementsByClassName('disp1').innerHTML = nm;
    //document.getElementsByClassName('disp2').innerHTML = mai;
    //document.getElementsByClassName('disp3').innerHTML = con;
    //document.getElementsByClassName('disp4').innerHTML = ps;

    console.log(nm);
    console.log(mai);
    console.log(con);
    console.log(ps);

  }



  
}
