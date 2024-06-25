var nameV,genderV,ageV,emailV,phonenoV; 

function readFom() {
   
    nameV = document.getElementById("name").Value;
    nameV = document.getElementById("gender").Value;
    nameV = document.getElementById("age").Value;
    nameV = document.getElementById("email").Value;
    nameV = document.getElementById("phone").Value;
};
document.getElementById("insert").onclick = function (){
    readFom();
     firebase
    .database()
    .ref("student/" + nameV)
    .set(
        {
        name: nameV,
        gender: genderV,
        age: ageV,
        email: emailV,
        phone: phonenoV, 
    }
);

    alert("data inserted");
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
};
document.getElementById("read").onclick = function (){
    readFom();
 
    firebase
    .database()
    .ref("student/" + nameV)
    .on("value",function(snap){
        document.getElementById("name").value = snap.val().name;
        document.getElementById("gender").value =  snap.val().gender;
        document.getElementById("age").value =  snap.val().age;
        document.getElementById("email").value = snap.val().email;
        document.getElementById("phone").value =snap.val().phoneno;
      
    });
};

document.getElementById("update").onclick = function (){
    readFom();
 
    firebase
    .database()
    .ref("student/" + nameV)
    .update({
        //rollNo: rollV,
        name: nameV,
        gender: genderV,
        address: addressV, 
    });
    alert("data update");
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
};
document.getElementById("delete").onclick = function (){
    readFom();
 
    firebase
    .database()
    .ref("student/" + nameV)
    .remove();
    alert("data deleted");
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
};
