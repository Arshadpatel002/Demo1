function submit(){
    let usname = document.getElementById('user');
    let passw = document.getElementById('pass');

    let lowcaslet = /[a-z]/g;
    let uppcslet = /[A-Z]/g;
    let num = /[0-9]/g;
    let flag=0;

    if(usname.value.length == 0){
        alert("Please Enter Username");
    }else if(passw.value.length == 0){
        alert("Please Enter Password");
    }else if(usname.value.length == 0 && passw.value.length == 0){
        alert("Please enter Username and Password");
    }else if(!passw.value.match(uppcslet)){
        alert("Please add 1 Upper Case Letter");
    }else if(!passw.value.match(lowcaslet)){
        alert("Please add 1 Lower Case Letter");
    }else if(!passw.value.match(num)){
        alert("Please add Numeric Value");
    }
    else{
        localStorage.setItem('usname',usname.value);
        localStorage.setItem('passw',passw.value);
        alert("Sign in Succesfully");
        flag = 1;
    }

    if(flag){
        let strname = localStorage.getItem('usname');
        document.getElementById('result1').innerHTML = strname;

        let strpass = localStorage.getItem('passw');
        document.getElementById('result2').innerHTML = strpass;
    }

}