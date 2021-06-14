function postToGoogle() {
    var field1 = $("#name").val();
    var field2 = $("#email").val();
    var field3 = $("#phone-num").val();
    var field4 = $("#message").val();
      var phoneno = /^\d{10}$/;
      var mailformat=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

   
    if(field1 == ""){
        alert('Please Fill Your Name');
        document.getElementById("name").focus();
        return false;
    }
      if((field3 == "" || field3.length > 10 || field3.length < 10)||(!field3.match(phoneno))){
        alert('Please Fill an appropriate 10-digit Mobile Number');
        document.getElementById("phone-num").focus();
        return false;
    }
    if((field2 == "")||(!field2.match(mailformat))){
        alert('Please Fill Your Email');
        document.getElementById("email").focus();
        return false;
    }
 
    if(field4 == ""){
        alert('Please Fill Your Message');
        document.getElementById("message").focus();
        return false;
    }

 $.ajax({
url:'https://api.apispreadsheets.com/data/14036/',
type:'post',
data:$("#myForm").serializeArray(),
success: function(){
alert("We have recieved your message. Thank you!")
    document.getElementById("myForm").style.display='none';
    document.getElementsByClassName("reply").style.display='block';
},
error: function(){
alert("There was an error in sending the message. Please try again.")
}
});
}
