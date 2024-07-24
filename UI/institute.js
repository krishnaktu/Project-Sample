function GetData() {
    var username = document.getElementById('username').value;
    var password=document.getElementById('password').value
    var authenticatedUser = users.find(user => {
      return user.username === username && user.password === password;
    });
    
    if (authenticatedUser) {
      window.alert = 'Login successful!';
      window.location.href='payment.html';
      document.getElementById('login-form').reset();
    } else {
      window.alert= 'Invalid username or password';
      return;
    }
    var formData=new formData (document.getElementById('login-form')) ;
    var xhr=new XMLHttpRequest();
    xhr.open("GET", '#');
    xhr.send(formData)
  };


  function CreateUserAccount() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('e-mail').value;
    var password = document.getElementById('password').value;
    var qualification = document.getElementById('qualification').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address=document.getElementById('address').value;
    
    
    if (username === '' || email === '' || password === '' || qualification === ''|| phoneNumber===''|| address==='') {
      window.alert = 'Please fill all requirements';
      return;
    }
    
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
      window.alert = 'Username or email already exists';
      return;
    }
    
    const newUser = { username, email, password, qualification, phoneNumber, address };
    users.push(newUser);
    
    document.getElementById('register-form').reset();
    
    window.alert= 'Registration successful!';
    window.location.href='index.html';
    var formData=new formData (document.getElementById('register-form')) 
    var xhr=new XMLHttpRequest();
    xhr.open("POST", '#');
    xhr.send(formData)
  
  }; 


  function updateAccount(){
    var payment=document.getElementById('pay').value;
    if (payment<30000){
      window.alert='payment not successFull !!';
      return;
    }
    if (payment==30000){
      window.alert='payment successFull !!';
      window.location.href='index.html';
    }
    var logout=document.getElementById('logout').value;
    if (logout==logout){
      window.alert='log-out successFull !!'
      window.location.href='index.html';
    }

    const selectedCourse = document.getElementById('selectCourse').value;
      
    if (selectedCourse === '') {
      window.alert = 'Please select a course';
    } else {
      window.alert= `You selected: ${selectCourse}`;
    }

    const selectedMode = document.getElementById('selectMode').value;
      
    if (selectedMode === '') {
      window.alert = 'Please select online or offline';
    } else {
       window.alert = `You selected: ${selectedCourse}`;
    }

    document.getElementById('payment').reset();
    var formData=new formData (document.getElementById('payment')) 
    var xhr=new XMLHttpRequest();
    xhr.open('POST', '#');
    xhr.send(formData)

  };