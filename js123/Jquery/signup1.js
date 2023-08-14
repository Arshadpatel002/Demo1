$(document).ready(function () {
  // Validate Username
  $("#msgname").hide();
  $("#msgmail").hide();
  $("#msgnum").hide();
  $("#msgpass").hide();
  let usernameError = true;
  let emailidError = true;
  let conumError = true;
  let passwError = true;

  function validateUsername() {
    let usernameValue = $("#usname").val();
    if (usernameValue.length == "") {
      $("#msgname").show();
      usernameError = false;
      return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 20) {
      $("#msgname").show();
      $("#msgname").html("*length of username must be between 3 and 10");
      usernameError = false;
      return false;
    } else {
      $("#msgname").hide();
    }
    localStorage.setItem("usname", usernameValue);
  }

  
  function validateEmail() {
    let emailValue = $("#mail").val();
    let em = /@/;
    let em1 = /gmail.com/;
    if (emailValue.length == "") {
      $("#msgmail").show();
      emailidError = false;
      return false;
    } else if (
      (!em.test(emailValue) && !em1.test(emailValue)) ||
      !em.test(emailValue) ||
      !em1.test(emailValue)
    ) {
      $("#msgmail").show();
      $("#msgmail").html("*Please Enter valid mail id");
      emailidError = false;
      return false;
    } else {
      $("#msgmail").hide();
    }
    localStorage.setItem("mail", emailValue);
  }

  function validateConum() {
    let contValue = $("#num").val();
    if (contValue.length == "") {
      $("#msgnum").show();
      conumError = false;
      return false;
    } else if (contValue.length < 10 || contValue.length > 10) {
      $("#msgnum").show();
      $("#msgnum").html("*Please Enter valid contact number");
      conumError = false;
      return false;
    } else {
      $("#msgnum").hide();
    }
    localStorage.setItem("num", contValue);
  }

  function validatePassw() {
    let passValue = $("#pass").val();
    if (passValue.length == "") {
      $("#msgpass").show();
      passwError = false;
      return false;
    } else if (passValue.length < 4 || passValue.length > 10) {
      $("#msgpass").show();
      $("#msgpass").html("*Please Enter valid password");
      passwError = false;
      return false;
    } else {
      $("#msgpass").hide();
    }
    localStorage.setItem("pass", passValue);
  }

  $("#btn").click(function () {
    validateUsername();
    validateEmail();
    validateConum();
    validatePassw();

    if (
      usernameError == true &&
      emailidError == true &&
      conumError == true &&
      passwError == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});
