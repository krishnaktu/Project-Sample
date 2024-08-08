function GetData(){
  var loginForm=document.getElementById('login').elements;
  var loginDetails={};
  Array.from(loginForm).forEach(element=>{
    loginDetails[element.id]=element.value;

  });
    

    var getForm = new XMLHttpRequest();
    getForm.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.response);
    window.alert(response.message);
    window.alert('Click ok to go to the payment page');
    localStorage.setItem("course", response.course);
    localStorage.setItem("amount",response.amount);
    window.location.href = 'payment.html';
  }  else if (this.readyState == 4 && this.status == 400) {
     var response = JSON.parse(this.response);
     window.alert('Bad Request: ' + response.message);
  }
};
    getForm.open("GET",`http://127.0.0.1:5000/user/12?email=${loginDetails['username']}&password=${loginDetails['password']}` ,true);
    getForm.send();
  };


  function CreateUserAccount() {
   var registerForm=document.getElementById('form').elements;
   formDetails={};
   Array.from(registerForm).forEach(element=>{
    formDetails[element.id]=element.value;
   });
  
    

    var POSTform=new XMLHttpRequest();
     POSTform.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
    var response = JSON.parse(this.response);
    window.alert(response.message);
    window.alert('Click ok to go to the login page');
    
    window.location.href = 'index.html';

    } else if (this.readyState == 4 && this.status == 400) {
    var response = JSON.parse(this.response);
    window.alert('Bad Request: ' + response.message);
    }
   };
    POSTform.open("POST", 'http://127.0.0.1:5000/user/12',true);
    POSTform.setRequestHeader('Content-type', 'application/json');
    POSTform.send(JSON.stringify(formDetails));
  
  }; 
  function payment(){
    var payment=document.getElementById("course")
    var amount=document.getElementById("amount")
    setUserInformation();
    if (payment==course ||amount==amount){
      window.alert("payment successFull !!!")
     
    }
  }

  
  


  function setUserInformation(){
    var course=localStorage.getItem('course');
    var amount=localStorage.getItem('amount')
    if (!course ||!amount){
      window.alert("invalid user session !!!")
      window.location.href="index.html"
      
    }
    document.getElementById('course').innerHTML=course
    document.getElementById('amount').innerHTML=amount

  }
