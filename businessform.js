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

document.getElementById("businesscontactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  
  var businessname = getElementVal("businessname");
  var businesssurname = getElementVal("businesssurname");
  var businessdate = getElementVal("businessdate");
  var businessadress = getElementVal("businessadress");
  var businessphone = getElementVal("businessphone");
  var businessemail = getElementVal("businessemail");
  var businesspassword = getElementVal("businesspassword");
  var name = getElementVal("name");
  var surname = getElementVal("surname");
  var date = getElementVal("date");
  var phone = getElementVal("phone");
  var email = getElementVal("email");

  saveMessages(businessname, businesssurname, businessdate, businessadress, businessphone, businessemail, businesspassword, name, surname, date, phone, email);

  //alert 
  document.querySelector('.alert').style.display = 'block';
  //remove alert
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //reset form
  document.getElementById('businesscontactForm').reset();
}


const saveMessages = (businessname, businesssurname, businessdate, businessadress, businessphone, businessemail, businesspassword, name, surname, date, phone, email) => {
    var nexwContactForm = contactFormDB.push();

    nexwContactForm.set({
        businessname : businessname,
        businesssurname : businesssurname,
        businessdate : businessdate,
        businessadress : businessadress,
        businessphone : businessphone,
        businessemail : businessemail,
        businesspassword : businesspassword,
        name : name,
        surname : surname,
        date : date,
        phone : phone,
        email : email,
    })
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
