let selectedValue = document.getElementById("list").value;
function getSelectedValue() {
  selectedValue = document.getElementById("list").value;
}

const employeeArr = [
  { id: 1, name: "John", profession: "Developer",age: "19"  },
  { id: 2, name: "Jack",  profession: "Developer",age: "20" },
  { id: 3, name: "Karen",  profession: "Admin",age: "19", },
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
      user.profession+
      "&nbsp&nbsp&nbsp&nbsp&nbsp" +
      user.age +
      "&nbsp&nbsp&nbsp&nbsp&nbsp"
      +"<br><br>";
  }
  document.getElementById("item").innerHTML = text;
};

filteredEmployee = (employee) => {
  if (selectedValue == "Profession") {
    return true;
  }
  return employee.profession == selectedValue;
};
filterEmployee();
