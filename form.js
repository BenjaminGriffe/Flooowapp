const firebaseConfig = {
    apiKey: "AIzaSyCVNMVJ9-4qOmSFPKEXrZkSKBXyI6TLubg",
    authDomain: "flowapp-9b0c2.firebaseapp.com",
    databaseURL: "https://flowapp-9b0c2-default-rtdb.firebaseio.com",
    projectId: "flowapp-9b0c2",
    storageBucket: "flowapp-9b0c2.appspot.com",
    messagingSenderId: "773324895018",
    appId: "1:773324895018:web:2666a0ef247feaafc2e453"
  };


//initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var surname = getElementVal("surname");
  var date = getElementVal("date");
  var adress = getElementVal("adress");
  var phone = getElementVal("phone");
  var email = getElementVal("email");
  var password = getElementVal("password");

  saveMessages(name, surname, date, adress, phone, email, password);

  //alert 
  document.querySelector('.alert').style.display = 'block';
  //remove alert
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //reset form
  document.getElementById('contactForm').reset();
}


const saveMessages = (name, surname, date, adress, phone, email, password) => {
    var nexwContactForm = contactFormDB.push();

    nexwContactForm.set({
        name : name,
        surname : surname,
        date : date,
        adress : adress,
        phone : phone,
        email : email,
        password : password,
    })
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
