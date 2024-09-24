//
function validation() {
    let email = document.querySelector("#email-id").value;
    let password = document.querySelector("#password").value;
  //   localStorage.setItem("email", "amaan@5074gmail.com");
  //   localStorage.setItem("password", "1234567890");
  //   localStorage.clear();
  
    if (email == "" || password == "") {
      alert("please enter your email and password");
    }else if (email == "amaan@gmail.com" || password == "1234567890") {
      alert("Welcome !")
      window.location.href = "start-quiz.html";
    }else{
      alert("please enter valid email and password")
    }
  };
  
  // function register(){
  //     const email = document.querySelector("#email-id").value
  //     const password = document.querySelector("#password").value
  //     const user = {
  //         email : email,
  //         password : password,
  //     }
  
  //     localStorage.setItem("user",JSON.stringify(user));
  //     alert("stored data successfully")
  //     window.location.href="start-quiz.html"
  // }

  // const existName = localStorage.getItem(userDetails.name);
  // const existPassword = localStorage.getItem(userDetails.password);
  // const userExist =  JSON.parse(localStorage.getItem("user"));

  // if (email === userExist.email) {
  //   alert("user already exist");
  // }