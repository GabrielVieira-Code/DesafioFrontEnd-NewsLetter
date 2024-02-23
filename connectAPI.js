   
 const inputEmail = document.getElementById("dateInput");
 const eventForm = document.getElementById('idForm');
 
 const fetchAPI= async () =>{
    // event.preventDefault();
    const task = { email: inputEmail.value };
        await fetch('http://localhost:3333/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        } )
}

fetchAPI()
  