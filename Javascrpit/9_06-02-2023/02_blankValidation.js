function check_form_valid() {
  let fname = document.getElementById("fname").value;
  let dob = document.getElementById("dob").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let other = document.getElementById("other").checked;
  let addr = document.getElementById("addr").value;

  if (
    fname == "" &&
    dob == "" &&
    male == false &&
    female == false &&
    other == false &&
    addr == ""
  ) {
    document.getElementById("msg1").innerHTML = "Enter Name";
    document.getElementById("fname").innerHTML =
      "<style>#fname{border-color:red;}</style>";

    document.getElementById("msg3").innerHTML = "Select Date of Birth";

    document.getElementById("dob").innerHTML =
      "<style>#dob{border-color:red;}</style>";

    document.getElementById("msg2").innerHTML = "select gender";

    document.getElementById("msg4").innerHTML = "Enter Address";
    document.getElementById("addr").innerHTML =
      "<style>#addr{border-color:red;}</style>";
    return false;
  }

  //   if (male == false && female == false && other == false) {
  //     document.getElementById("msg2").innerHTML = "select gender";
  //     return false;
  //   }
}
