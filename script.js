function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here !");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here !");

  let weOb = document.getElementById("aq");
  let weAddButtonOb = document.getElementById("aqAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

// Generating CV
function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  let nameT2 = document.getElementById("nameT2");
  nameT1.innerHTML = nameField;
  nameT2.innerHTML = nameField;
  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  // Address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
  //code for setting image
let file=document.getElementById("imageField").files[0];
// console.Log(file);
let reader=new FileReader ();
reader.readAsDataURL(file);
// console.Log(reader.result);
//set the image to template
reader.onloadend = function(){
  document.getElementById("imageT").src=reader.result;
}
  // Facebook
  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;
    
  document
    .getElementById("fbT")
    .setAttribute("href", document.getElementById("fbField").value);
  // instagram
  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;
  document
    .getElementById("instaT")
    .setAttribute("href", document.getElementById("instaField").value);
  // linkedin
  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;
  document
    .getElementById("linkedT")
    .setAttribute("href", document.getElementById("linkedField").value);
  // objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;
  // work experience
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;
  // Academic Qualification
  let aqs = document.getElementsByClassName("eqField");
  let st1 = "";
  for (let e of aqs) {
    st1 = st1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = st1;


  // hide cv 
  document.getElementById("cv-form").style.display= "none";
  document.getElementById("cv-template").style.display= "block";
  
}
// print CV
function printCV(){
window.print();
}
