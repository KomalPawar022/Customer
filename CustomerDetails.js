const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const street =document.getElementById("street");
const address=document.getElementById("address");
const city=document.getElementById("city");

const state=document.getElementById("state");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const submit=document.getElementById("submit");

submit.addEventListener("click",()=>{
    console.log("FirstName: "+firstName.value);
    console.log("LastName: "+lastName.value);
    console.log("Street: "+street.value);
    console.log("Address: "+address.value);
    console.log("City: "+city.value);
    console.log("State: "+state.value);
    console.log("Email: "+email.value);
    console.log("Phone: "+phone.value);
})