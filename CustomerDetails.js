
const firstName=document.getElementById("firstName").value;
const lastName=document.getElementById("lastName").value;
const street =document.getElementById("street").value;
const address=document.getElementById("address").value;
const city=document.getElementById("city").value;

const state=document.getElementById("state").value;
const email=document.getElementById("email").value;
const phone=document.getElementById("phone").value;
const submit=document.getElementById("submit");





submit.addEventListener("click",()=>{
    console.log("FirstName: "+firstName);
    console.log("LastName: "+lastName);
    console.log("Street: "+street);
    console.log("Address: "+address);
    console.log("City: "+city);
    console.log("State: "+state);
    console.log("Email: "+email);
    console.log("Phone: "+phone);

    let newCustomer = new Customer(firstName,lastName,street,address,city,state,email,phone);
    console.log(newCustomer);
    let insert=new InsertCustomer();
    let connection=insert.getConnection();
    insert.insertUser(newCustomer);

   
})


