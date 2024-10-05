// admin panel javscript //
function userName() {
  const loginUser = JSON.parse(localStorage.getItem("userLogedIn"));

  let printUserName = document.getElementById("show-user-name");
  if (printUserName) {
    printUserName.innerHTML = loginUser.name;
  }
}

function LoggedInUserFirstLetter() {
  let loggedInUser = JSON.parse(localStorage.getItem("userLogedIn"));
  let userName = loggedInUser.name;
  // console.log(userName.charAt(0));
  document.getElementById("logedinuser-firstname").innerText =
    userName.charAt(0);
}

function countTest() {
  const userTest = JSON.parse(localStorage.getItem("userTest"));
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const currentUser = JSON.parse(localStorage.getItem("userLogedIn"));

  count = 0;
  for (let i = 0; i < userTest.length; i++) {
    if (currentUser.email === userTest[i].email) {
      count++;
    }
  }

  for (let i = 0; i < user.length; i++) {
    if (currentUser.email === userTest[i].email) {
      user[i].givenTestOfUser = count;
      break;
    }
  }

  for (let i = 0; i < user.length; i++) {
    for (let j = 0; j < userTest.length; j++) {
      if (currentUser.email == user[i].email) {
        user[i].latestScore = userTest[j].score;
        console.log(user[i].latestScore);
      }
    }
  }

  localStorage.setItem("user", JSON.stringify(user));
}
countTest();

function hideAndShowMenuBar() {
  let menuBar = document.getElementById("admin-page-menu").style;
  let content = document.getElementsByClassName("content");
  // menuBar.marginLeft = "0px";
  if(menuBar.marginLeft === "0px" || menuBar.marginLeft === ""){
    menuBar.marginLeft = "-200px";
    content.style.marginLeft = "30px";
  }else 
  {
    menuBar.marginLeft = "0px";
    content.style.marginLeft = "230px"
  }
  // menuBar.classList.toggle("hide-menu");
}

function quizeTableMarginLeft() {
  let menuBar = document.getElementById("admin-page-menu").style;
  let content = document.getElementById("Quize-page")
  // menuBar.marginLeft = "0px";
  if(menuBar.marginLeft === "0px" || menuBar.marginLeft === ""){
    menuBar.marginLeft = "-200px";
    content.style.marginLeft = "30px";
  }else 
  {
    menuBar.marginLeft = "0px";
    content.style.marginLeft = "230px"
  }
  // menuBar.classList.toggle("hide-menu");
}


function userTableMarginLeft(){
  let menuBar = document.getElementById("admin-page-menu").style;
  let usersContent = document.getElementById("users-page")
  // menuBar.marginLeft = "0px";
  if(menuBar.marginLeft === "0px" || menuBar.marginLeft === ""){
    menuBar.marginLeft = "-200px";
    usersContent.style.marginLeft = "30px";
  }else 
  {
    menuBar.marginLeft = "0px";
    usersContent.style.marginLeft = "230px"
  }
  // menuBar.classList.toggle("hide-menu");
}

function addQuestionMarginLeft(){
  let menuBar = document.getElementById("admin-page-menu").style;
  let addQuizeContent = document.getElementById("add-quize-section")
  // menuBar.marginLeft = "0px";
  if(menuBar.marginLeft === "0px" || menuBar.marginLeft === ""){
    menuBar.marginLeft = "-200px";
    addQuizeContent.style.marginLeft = "30px";
  }else 
  {
    menuBar.marginLeft = "0px";
    addQuizeContent.style.marginLeft = "230px"
  }
  // menuBar.classList.toggle("hide-menu");
}

function countingStudent() {
  let users = JSON.parse(localStorage.getItem("user"));
  console.log(users);
  let countingUsers = document.getElementById("student-counting");
  for (let i = 0; i < users.length; i++) {
    countingUsers.innerText = `${i + 1}`;
  }
}

function informationOfUsers() {
  const user = JSON.parse(localStorage.getItem("user"));
  for (let i = 0; i < user.length; i++) {
    let tableBody = document.getElementById("users-list");
    let tRow = document.createElement("tr");
    tableBody.append(tRow);
    let td1 = document.createElement("td");
    td1.innerText = `${i + 1}`;
    let td2 = document.createElement("td");
    td2.innerText = user[i].name;
    let td3 = document.createElement("td");
    td3.innerText = user[i].email;
    let td4 = document.createElement("td");
    td4.innerHTML = user[i].givenTestOfUser ? `<a href="#">${user[i].givenTestOfUser}</a>` : "Not Attemped";
    let td5 = document.createElement("td");
    td5.innerText = user[i].latestScore || "Not Attemped"
    console.log(td5);

    tRow.append(td1, td2, td3, td4, td5,);
  }
}



// redirect function for add question
function redirectAddQuestion(){
  location.href="add-questions.html"
}
function displayAllQuizes() {
  const allQuizes = JSON.parse(localStorage.getItem("Quizes"));
  //   console.log(allQuizes.option[0])
  for (let i = 0; i < allQuizes.length; i++) {
    let tableBody = document.getElementById("Quizes-list");
    
    let tRow = document.createElement("tr");
    tRow.setAttribute("data-qi", i);

    tableBody.append(tRow);
    let td1 = document.createElement("td");
    td1.style.textAlign = "center";
    td1.innerText = `${i + 1}`;
    let td2 = document.createElement("td");
    td2.innerHTML = `<p id="display-quize">${allQuizes[i].question}</p>`;
    let td3 = document.createElement("td");
    td3.style.textAlign = "center";
    td3.innerHTML = `<img src="assets/images/edit.png" alt="edit-icon">`;
    let td4 = document.createElement("td");
    td4.style.textAlign = "center";
    td4.style.cursor = "pointer";
    td4.innerHTML = `<img src="assets/images/dustbin.png" alt="delete-icon" id="delete-quize" onclick="deleteQuize(${i})">`;
    let td5 = document.createElement("td");
    td5.style.textAlign = "center";
    td5.innerHTML = `<a href="quize-details.html"><img src="assets/images/view.png" alt="view-icon"></a>`;
    tRow.append(td1, td2, td3, td4, td5);
  }
}

// delete quize
function deleteQuize(index){
  const allquize = JSON.parse(localStorage.getItem("Quizes"));
  console.log(index, allquize)
  allquize.splice(index,1);
  localStorage.setItem("Quizes", JSON.stringify(allquize));
}



function quizesDetails() {
  const allQuizes = JSON.parse(localStorage.getItem("Quizes"));
  //   console.log(allQuizes.option[0])
  for (let i = 0; i < allQuizes.length; i++) {
    let tableBody = document.getElementById("quize-body");
    let tRow = document.createElement("tr");
    tableBody.append(tRow);
    let td1 = document.createElement("td");
    td1.style.textAlign = "center";
    td1.innerText = `${i + 1}`;
    let td2 = document.createElement("td");
    td2.innerText = allQuizes[i].question;
    let td3 = document.createElement("td");
    td3.style.textAlign = "center";
    td3.innerHTML = allQuizes[i].options[0];
    console.log(td2);
    let td4 = document.createElement("td");
    td4.style.textAlign = "center";
    td4.innerHTML = allQuizes[i].options[1];
    let td5 = document.createElement("td");
    td5.style.textAlign = "center";
    td5.innerHTML = allQuizes[i].options[2];
    let td6 = document.createElement("td");
    td6.style.textAlign = "center";
    td6.innerHTML = allQuizes[i].options[3];
    let td7 = document.createElement("td");
    td7.style.textAlign = "center";
    td7.innerHTML = allQuizes[i].answer;
    tRow.append(td1, td2, td3, td4, td5, td6, td7);
  }
}

//  add questions and options
function addNewQuizes(){
  console.log("hii")
  const quize =JSON.parse(localStorage.getItem("Quizes")) || [];
  const question = document.getElementById("question").value;

  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const option3 = document.getElementById("option3").value;
  const option4 = document.getElementById("option4").value;
  const answer = document.getElementById("Correct-Answer").value;
  console.log(question,option1,option2,option3,option4);
  
  const addNewQuize = {
    question : question,
    options : [option1, option2, option3, option4],
    answer: answer
  }

  quize.push(addNewQuize);

  localStorage.setItem("Quizes" , JSON.stringify(quize));

  return alert("quize is add")
}
// admin logout function
function adminLogOut() {
  let logOut = document.getElementById("admin-logout-container");
  if (logOut.style.display === "block") {
    logOut.style.display = "none";
  } else {
    logOut.style.display = "block";
  }
}
