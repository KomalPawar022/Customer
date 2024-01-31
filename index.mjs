const login_id = document.getElementById("login_id").value;
let password = document.getElementById("password");

const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  console.log(login_id);
  console.log(password.value);
  password=password.value;
  console.log(password);
  // const script = document.createElement("script");
  // script.src = "https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp?callback=handleAuthenticationResponse";
  // script.async = true; // Ensure asynchronous loading
  // document.head.appendChild(script);

//   let script = document.createElement("script");
// script.src = `https://cors-anywhere.herokuapp.com/https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp`;
// script.async = true;
// document.head.appendChild(script);


// script = document.createElement("script");
// script.src = `https://jsonpify.com/?url=https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp&callback=handleAuthenticationResponse`;
// script.async = true;
// document.head.appendChild(script);

  authenticate()


  


});
async function authenticate() {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp`
  , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login_id,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("data : "+data);
    const token = data.token; 
   
    localStorage.setItem("jwtToken", token); 
    console.log("token : "+token);
    console.log("Authentication successful!");
    window.open("./CustomerList.html", "_self");

  } else {
    const error = await response.text();
    console.error("Authentication failed:", error);
    console.log("Authentication failed.");
  }
}