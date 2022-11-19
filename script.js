let selectedValue = document.getElementById("list").value;
function getSelectedValue() {
  selectedValue = document.getElementById("list").value;
}

const employeeArr = [
  { id: 1, name: "John", age: "18", profession: "developer" },
  { id: 2, name: "Jack", age: "20", profession: "developer" },
  { id: 3, name: "Karen", age: "19", profession: "admin" },
];

filterEmployee = () => {
  var filteredArray = employeeArr.filter(filteredEmployee);
  var text = "";
  filteredArray.forEach(myFun);

  function myFun(user) {
    text +=
      "<br>" +
      user.id +
      "&nbsp&nbsp&nbsp&nbsp&nbsp" +
      user.name +
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      user.age +
      "&nbsp&nbsp&nbsp&nbsp&nbsp" +
      user.profession +
      "&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "<br><br>";
  }
  document.getElementById("item").innerHTML = text;
};

filteredEmployee = (employee) => {
  if (selectedValue == "profession") {
    return true;
  }
  return employee.profession == selectedValue;
};
filterEmployee();
