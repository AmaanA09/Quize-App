// admin panel javscript //


function countTest(){
    const userTest = JSON.parse(localStorage.getItem("userTest"));
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user) 
    const currentUser = JSON.parse(localStorage.getItem("userLogedIn"));
  
    count = 0;
    for(let i=0; i<userTest.length; i++){
      if( currentUser.email === userTest[i].email){
        count++;
      }
    }
    
    for(let i=0; i<user.length; i++){
      if(currentUser.email === userTest[i].email){
        user[i].givenTestOfUser = count
        break;
      }
    }
  
    for(let i=0; i<user.length; i++){
      for(let j=0; j<userTest.length; j++){
        if(currentUser.email == user[i].email){
          user[i].latestScore = userTest[j].score
          console.log(user[i].latestScore)
        }
      }
    }
  
    localStorage.setItem("user",JSON.stringify(user));
    
  }
  countTest()
  
  function informationOfUsers(){
    const user = JSON.parse(localStorage.getItem("user"));   
          for (let i = 0; i < user.length; i++) {
              let tableBody = document.getElementById("users-list");
              let tRow = document.createElement("tr");
              tableBody.append(tRow);
              let td1 = document.createElement("td");
              td1.innerText = `${i + 1}`
              let td2 = document.createElement("td");
              td2.innerText = user[i].name
              let td3 = document.createElement("td");
              td3.innerText = user[i].email
              let td4 = document.createElement("td");
              td4.innerText = user[i].givenTestOfUser || "Not Attemped"
              let td5 = document.createElement("td");
              td5.innerText = user[i].latestScore;
              console.log(td5)
              let td6 = document.createElement("td");
              
              td6.innerHTML = `<a href="#">View more</a>`
  
  
              tRow.append(td1, td2, td3, td4, td5, td6);
          }
        }
  
  function displayAllQuizes(){
    const allQuizes = JSON.parse(localStorage.getItem("Quizes"));
      //   console.log(allQuizes.option[0])
        for(let i=0; i<allQuizes.length; i++){
          let tableBody = document.getElementById("Quizes-list");
          let tRow = document.createElement("tr");
          tableBody.append(tRow);
          let td1 = document.createElement("td");
          td1.innerText = allQuizes[i].question;
          console.log(td1)
          let td2 = document.createElement("td");
          td2.innerText = allQuizes[i].options[0]
          console.log(td2)
          let td3 = document.createElement("td");
          td3.innerText = allQuizes[i].options[1]
          tRow.append(td1,td2,td3,)
        }
  }      
  // admin logout function
  function adminLogOut(){
    let logOut = document.getElementById("admin-logout-container");
    if(logOut.style.display === "block"){
      logOut.style.display="none";
    }else{
      logOut.style.display = "block"
    }
  }
  