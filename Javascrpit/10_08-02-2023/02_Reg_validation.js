// reg expression for name
function name_reg_ex() {
  let reg_ex = /^[a-zA-Z]*$/;
  let fname = document.getElementById("fname").value;
  if (reg_ex.test(fname)) {
    document.getElementById("msg1").innerHTML = "";
    return false;
  } else {
    document.getElementById("msg1").innerHTML = "Digits are not allowed";
    return false;
  }
}

function address_range() {
  let addr = document.getElementById("addr").value;
  if (addr.length < 10) {
    document.getElementById("msg4").innerHTML =
      "Enter address more than 10 characters.";
    return false;
  } else if (addr.length > 100) {
    document.getElementById("msg4").innerHTML =
      "Enter address not more than 100 characters.";
    return false;
  } else {
    document.getElementById("msg4").innerHTML = "";
    return false;
  }
}

function reg_ex_mobile() {
  let mno = document.getElementById("mno").value;
  let reg_ex = /^[0-9]*$/;
  if (reg_ex.test(mno)) {
    document.getElementById("msg5").innerHTML = "";
    return false;
  } else {
    document.getElementById("msg5").innerHTML = "Alphabets not allowed";
    return false;
  }
}

function mobile_length() {
  let mno = document.getElementById("mno").value;
  if (mno.length < 10) {
    document.getElementById("msg6").innerHTML = "Mobile no must be 10 digits";
    return false;
  } else {
    document.getElementById("msg6").innerHTML = "";
    return false;
  }
}

function email_reg_ex() {
  let mail = document.getElementById("mail").value;
  let reg_ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg_ex.test(mail)) {
    document.getElementById("msg7").innerHTML = "";
    return false;
  } else {
    document.getElementById("msg7").innerHTML = "Enter Email Properly";
    return false;
  }
}

function pass_reg_ex() {
  let pass = document.getElementById("pass").value;
  let pass_reg_ex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;

  if (pass_reg_ex.test(pass)) {
    document.getElementById("msg8").innerHTML = "";
    return false;
  } else {
    document.getElementById("msg8").innerHTML =
      "Please enter password format proper";
    return false;
  }
}

function check_pass() {
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;
  if (cpass != pass) {
    document.getElementById("msg9").innerHTML =
      "password and confirm password does not match";
    return false;
  } else {
    document.getElementById("msg9").innerHTML = "";
    return false;
  }
}
