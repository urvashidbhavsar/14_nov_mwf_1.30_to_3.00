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
