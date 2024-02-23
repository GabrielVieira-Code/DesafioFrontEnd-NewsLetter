let stateEmailValidation = true
function emailvalidation(field) {
    if (stateEmailValidation==true) {
        
        usuario = field.value.substring(0, field.value.indexOf("@"));
        dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

        let textEmail =  document.getElementById("textEmail");
        let inputError = document.getElementById('username')
        let dateInput = document.getElementById('dateInput')

        var novaTagFilha = document.createElement('span');
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
                alert("E-mail valido");
                // dateInput.style.border='red'
        let inputElement=document.getElementById("userName");
    }
    else{
        let novaTagFilha = document.createElement('span');
        textEmail.appendChild(novaTagFilha);
        
        novaTagFilha.textContent = 'Email invalido';
        // inputError.style.border = '1px solid red';
        
        setTimeout(() => {
            novaTagFilha.style.display = 'none'
            inputError.style.border = 'rgb(181, 189, 196)'
            let dateInput = document.querySelector('input');
            dateInput.style.border = '2px solid red'
            console.log(inputError);
        }, 2000);
    }
    stateEmailValidation = false
    setTimeout(()=>{
stateEmailValidation=true
    },1500)
    }      
}