function GetData() {
    var username = document.getElementById('username').value;
    var password=document.getElementById('password').value;
     var loginDetails={};
    
    if (loginDetails [username]==''||loginDetails[password]==''){
      window.alert('enter username and password');
      return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.response);
    window.alert(response.message);
    window.alert('Click ok to go to the account page');
    window.location.href = 'account.html';
  } else if (this.readyState == 4 && this.status == 400) {
    var response = JSON.parse(this.response);
    window.alert('Bad Request: ' + response.message);
  }
};
    xhttp.open("GET", 'http://127.0.0.1:5000/user/11',true);
    xhttp.send()
  };


  function CreateUserAccount() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('e-mail').value;
    var password = document.getElementById('password').value;
    var qualification = document.getElementById('qualification').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address=document.getElementById('address').value;
    var register={};
    
    
    if (register [username] === '' ||register [email] === '' || register[password] === '' ||register[qualification] === ''||register [phoneNumber]===''||register [address]==='') {
      window.alert('Please fill all requirements');
      return;
    }
    var xhttpPOST= new XMLHttpRequest();
     xhttpPOST.onreadystatechange = function () {
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
    xhttpPOST.open("POST", 'http://127.0.0.1:5000/user/12',true);
    xhttpPOST.setRequestHeader('Content-type', 'application/json');
    xhttpPOST.send(JSON.stringify(register));
  
  }; 


  function updateAccount(){
    var payment=document.getElementById('pay').value;
    var payment={};
    if (payment<30000){
      window.alert('payment not successFull !!');
      return;
    }
    if (payment[payment]==30000){
      window.alert('payment successFull !!');
      window.location.href='index.html';
    }
    var logout=document.getElementById('logout').value;
    if (logout==logout){
      window.alert('log-out successFull !!');
      window.location.href='index.html';
    }

    const selectedCourse = document.getElementById('selectCourse').value;
    var payment={};
      
    if (payment [selectedCourse] === '') {
      window.alert('Please select a course');
    } else {
      window.alert(`You selected: ${selectedCourse}`);
    }

    const selectedMode = document.getElementById('selectMode').value;
    var payment={};
      
    if (payment[selectedMode] === '') {
      window.alert('Please select online or offline');
    } else {
       window.alert (`You selected: ${selectedCourse}`);
    }
    var xhttpPOST = new XMLHttpRequest();
    xhttpPOST.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.response);
        window.alert(response.message);
      }
    };
    xhttpPOST.open('POST', 'http://127.0.0.1:5000/user/13',true);
    xhttpPOST.send(JSON.stringify(payment));

  };