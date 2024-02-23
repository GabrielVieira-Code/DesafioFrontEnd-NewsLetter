const sendEmail =  ()=>{
    const inputEmail = document.getElementById("dateInput");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const email = JSON.stringify({
      "to": inputEmail.value,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: email,
      redirect: "follow"
    };
    fetch("http://localhost:3333/sendemail", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}