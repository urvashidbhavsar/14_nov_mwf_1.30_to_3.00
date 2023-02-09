function check_form_valid() {
  let fname = document.getElementById("fname").value;
  let dob = document.getElementById("dob").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let other = document.getElementById("other").checked;
  let addr = document.getElementById("addr").value;
  let city = document.getElementById("city").value;
  let mno = document.getElementById("mno").value;
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;

  if (
    fname == "" &&
    dob == "" &&
    male == false &&
    female == false &&
    other == false &&
    addr == "" &&
    mno == "" &&
    mail == "" &&
    pass == "" &&
    cpass == ""
  ) {
    document.getElementById("msg1").innerHTML = "Enter Name";
    document.getElementById("fname").innerHTML =
      "<style>#fname{border-color:red;}</style>";

    document.getElementById("msg3").innerHTML = "Select Date of Birth";

    document.getElementById("dob").innerHTML =
      "<style>#dob{border-color:red;}</style>";

    document.getElementById("msg2").innerHTML = "select gender";

    document.getElementById("msg4").innerHTML = "Enter Address";

    document.getElementById("msg5").innerHTML = "Enter Mobile no";

    document.getElementById("msg7").innerHTML = "Enter Email";
    document.getElementById("msg8").innerHTML = "Enter Password";
    document.getElementById("msg9").innerHTML = "Enter Confirm Password";
    // document.getElementById("msg10").innerHTML = "Select city";
    return false;
  }
}
// function select_city() {
//   let city = document.getElementById("city").value;
//   if (city == -1) {
//     document.getElementById("msg10").innerHTML = "Select city";
//     return false;
//   }
// }

function first_name_check() {
  let fname = document.getElementById("fname").value;
  if (fname == "") {
    document.getElementById("msg1").innerHTML = "Enter name";
    return false;
  }
}

// show password
function show_pass() {
  let pass = document.getElementById("pass");
  let cpass = document.getElementById("cpass");

  if (pass.type == "password" && cpass.type == "password") {
    pass.type = "text";
    cpass.type = "text";
  } else {
    pass.type = "password";
    cpass.type = "password";
  }
}
